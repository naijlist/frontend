globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2004-lKj5x5cU/wd8giMMbFcofaADD3E\"",
    "mtime": "2023-02-11T09:37:11.382Z",
    "size": 8196,
    "path": "../public/.DS_Store"
  },
  "/active.png": {
    "type": "image/png",
    "etag": "\"32f3-0HggFxg+LuxfBrkhKPPsjEEnHkc\"",
    "mtime": "2023-02-11T09:37:11.381Z",
    "size": 13043,
    "path": "../public/active.png"
  },
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"12a4-nCCZFL5w5sDA3Jc9weiPcHWscQs\"",
    "mtime": "2023-02-11T09:37:11.380Z",
    "size": 4772,
    "path": "../public/android-chrome-192x192.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"3ead-nv+snoNrHLm2UARHsWEydGblnmc\"",
    "mtime": "2023-02-11T09:37:11.379Z",
    "size": 16045,
    "path": "../public/android-chrome-512x512.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"1006-lnHCVmzt4xm4V1i8Od6MDB1A4xQ\"",
    "mtime": "2023-02-11T09:37:11.379Z",
    "size": 4102,
    "path": "../public/apple-touch-icon.png"
  },
  "/cancel.png": {
    "type": "image/png",
    "etag": "\"3790-Q5ozh+nSYZP+o7dOk75zkRKk2hA\"",
    "mtime": "2023-02-11T09:37:11.378Z",
    "size": 14224,
    "path": "../public/cancel.png"
  },
  "/check.png": {
    "type": "image/png",
    "etag": "\"3b4a-TAtd8ikHArJS7xIeEqNKnpIxeZQ\"",
    "mtime": "2023-02-11T09:37:11.376Z",
    "size": 15178,
    "path": "../public/check.png"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"173-I/hSSAhl8eTmNb3O4hSLJqwKqdI\"",
    "mtime": "2023-02-11T09:37:11.376Z",
    "size": 371,
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"246-rGmNKcsKfIrbeSYt0AZJNs5TbRo\"",
    "mtime": "2023-02-11T09:37:11.375Z",
    "size": 582,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-MQDCaBOahZtlGm4ekoGA0X5FXl4\"",
    "mtime": "2023-02-11T09:37:11.374Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/hourglass.png": {
    "type": "image/png",
    "etag": "\"91f5-nZCyDXRsw+WBxIKPLtf/sKMiG+o\"",
    "mtime": "2023-02-11T09:37:11.374Z",
    "size": 37365,
    "path": "../public/hourglass.png"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"20a4-XrTbO4/S3dhe3MSvcxWtUp7bj9o\"",
    "mtime": "2023-02-11T09:37:11.327Z",
    "size": 8356,
    "path": "../public/logo.svg"
  },
  "/map.png": {
    "type": "image/png",
    "etag": "\"c50c6-MrdPbdxqhf8ko4B3V/77Rekhgc8\"",
    "mtime": "2023-02-11T09:37:11.325Z",
    "size": 807110,
    "path": "../public/map.png"
  },
  "/remove.png": {
    "type": "image/png",
    "etag": "\"42f5-LbnCTT3Gu29bCYLV30lXFTMYouA\"",
    "mtime": "2023-02-11T09:37:11.318Z",
    "size": 17141,
    "path": "../public/remove.png"
  },
  "/sals.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d9a5-cgB1+OCWPceCNoTsgE00hL8fDnE\"",
    "mtime": "2023-02-11T09:37:11.306Z",
    "size": 252325,
    "path": "../public/sals.jpg"
  },
  "/_nuxt/Auth.97e9ab47.js": {
    "type": "application/javascript",
    "etag": "\"1961-miVNUBqtkRpjeZEhXjvIvUtDQ3I\"",
    "mtime": "2023-02-11T09:37:11.303Z",
    "size": 6497,
    "path": "../public/_nuxt/Auth.97e9ab47.js"
  },
  "/_nuxt/Auth.9ec9f3bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d8-sjr79uRJM0OimjmbRcXQdXyvbRk\"",
    "mtime": "2023-02-11T09:37:11.303Z",
    "size": 1496,
    "path": "../public/_nuxt/Auth.9ec9f3bf.css"
  },
  "/_nuxt/Footer.521adcd2.js": {
    "type": "application/javascript",
    "etag": "\"98c-NW6tVkFVNtkG7316Wq3SPhhI3VU\"",
    "mtime": "2023-02-11T09:37:11.302Z",
    "size": 2444,
    "path": "../public/_nuxt/Footer.521adcd2.js"
  },
  "/_nuxt/Signup.19e88b88.js": {
    "type": "application/javascript",
    "etag": "\"1d25-RLbgRFRdqlJ2TD1xRUd0JHo/z+U\"",
    "mtime": "2023-02-11T09:37:11.301Z",
    "size": 7461,
    "path": "../public/_nuxt/Signup.19e88b88.js"
  },
  "/_nuxt/Signup.a8a82e66.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d8-5LZwi7+t/lsUPfH2qBM2RUSVrP8\"",
    "mtime": "2023-02-11T09:37:11.300Z",
    "size": 1496,
    "path": "../public/_nuxt/Signup.a8a82e66.css"
  },
  "/_nuxt/_id_.e633b03a.js": {
    "type": "application/javascript",
    "etag": "\"2375-evZ5eMtGwsjMov/GGAeV3yp+peI\"",
    "mtime": "2023-02-11T09:37:11.300Z",
    "size": 9077,
    "path": "../public/_nuxt/_id_.e633b03a.js"
  },
  "/_nuxt/composables.268b48dd.js": {
    "type": "application/javascript",
    "etag": "\"61-TTrviDp2ZOqU7uGiqRDb2TDvdXE\"",
    "mtime": "2023-02-11T09:37:11.299Z",
    "size": 97,
    "path": "../public/_nuxt/composables.268b48dd.js"
  },
  "/_nuxt/dashboard.cfb0c513.js": {
    "type": "application/javascript",
    "etag": "\"8ee-SRUefZQmMWYGQFnKBYhnP3+gdsU\"",
    "mtime": "2023-02-11T09:37:11.298Z",
    "size": 2286,
    "path": "../public/_nuxt/dashboard.cfb0c513.js"
  },
  "/_nuxt/default.7e0ffe0e.js": {
    "type": "application/javascript",
    "etag": "\"10a-onwNfuDnY3utaorjkdYv9BT2lDE\"",
    "mtime": "2023-02-11T09:37:11.298Z",
    "size": 266,
    "path": "../public/_nuxt/default.7e0ffe0e.js"
  },
  "/_nuxt/entry.644b027b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59f4-08j9mcLhM0KLOsEwv87MKLsJJpA\"",
    "mtime": "2023-02-11T09:37:11.290Z",
    "size": 23028,
    "path": "../public/_nuxt/entry.644b027b.css"
  },
  "/_nuxt/entry.f9b9c85c.js": {
    "type": "application/javascript",
    "etag": "\"21d41-uiDPhrcoZGVl/w96JgoKcMX3cGA\"",
    "mtime": "2023-02-11T09:37:11.289Z",
    "size": 138561,
    "path": "../public/_nuxt/entry.f9b9c85c.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-11T09:37:11.288Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.a543e59a.js": {
    "type": "application/javascript",
    "etag": "\"8ca-dpa6VDX4CzssXoyo1DzKXZGSSFI\"",
    "mtime": "2023-02-11T09:37:11.288Z",
    "size": 2250,
    "path": "../public/_nuxt/error-404.a543e59a.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-11T09:37:11.287Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.f0351a12.js": {
    "type": "application/javascript",
    "etag": "\"773-V/ccwaczJ3bbBTK7fZjOawasmAI\"",
    "mtime": "2023-02-11T09:37:11.286Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.f0351a12.js"
  },
  "/_nuxt/error-component.b5721a1a.js": {
    "type": "application/javascript",
    "etag": "\"4ad-WvRhlNzHLdS1VeQnERZHYzQIszc\"",
    "mtime": "2023-02-11T09:37:11.286Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.b5721a1a.js"
  },
  "/_nuxt/home.b6d98c0d.js": {
    "type": "application/javascript",
    "etag": "\"66c-vS1onwtkIHTMCr6PtXAp2dPhP1U\"",
    "mtime": "2023-02-11T09:37:11.285Z",
    "size": 1644,
    "path": "../public/_nuxt/home.b6d98c0d.js"
  },
  "/_nuxt/index.272e2fba.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17e-irwrLyf80ZbrifwuezsDkRjJ3QQ\"",
    "mtime": "2023-02-11T09:37:11.285Z",
    "size": 382,
    "path": "../public/_nuxt/index.272e2fba.css"
  },
  "/_nuxt/index.c2e65411.js": {
    "type": "application/javascript",
    "etag": "\"1b63-qftn4VeLCr2/GHG4/Ni2lilX+lw\"",
    "mtime": "2023-02-11T09:37:11.284Z",
    "size": 7011,
    "path": "../public/_nuxt/index.c2e65411.js"
  },
  "/_nuxt/list.9bfd1aad.js": {
    "type": "application/javascript",
    "etag": "\"4d-FfeDAZMUCxWQZaXufx/E3QlhJP0\"",
    "mtime": "2023-02-11T09:37:11.283Z",
    "size": 77,
    "path": "../public/_nuxt/list.9bfd1aad.js"
  },
  "/_nuxt/list.a5950064.png": {
    "type": "image/png",
    "etag": "\"2f8b-BPuZWciDXAyACVuTW4HwKHTdWZg\"",
    "mtime": "2023-02-11T09:37:11.282Z",
    "size": 12171,
    "path": "../public/_nuxt/list.a5950064.png"
  },
  "/_nuxt/my-ads.266b6877.js": {
    "type": "application/javascript",
    "etag": "\"c6-uRQ53Ax3OBGkvM0AUKtMPEaNmdI\"",
    "mtime": "2023-02-11T09:37:11.281Z",
    "size": 198,
    "path": "../public/_nuxt/my-ads.266b6877.js"
  },
  "/icons/bike.png": {
    "type": "image/png",
    "etag": "\"c87b-wUwE+K9G0hHgfC1b2I3DMvfiFFE\"",
    "mtime": "2023-02-11T09:37:11.372Z",
    "size": 51323,
    "path": "../public/icons/bike.png"
  },
  "/icons/car.png": {
    "type": "image/png",
    "etag": "\"9126-RS8n7UUJ6CGOiqWtxBtw9lA2aws\"",
    "mtime": "2023-02-11T09:37:11.372Z",
    "size": 37158,
    "path": "../public/icons/car.png"
  },
  "/icons/dress.png": {
    "type": "image/png",
    "etag": "\"5d0d-pg21rNZYyUfmcbFa+iQoGtSwj9w\"",
    "mtime": "2023-02-11T09:37:11.371Z",
    "size": 23821,
    "path": "../public/icons/dress.png"
  },
  "/icons/fashion-design.png": {
    "type": "image/png",
    "etag": "\"e57a-0zHKEXfF5Gmz5+7GEBlxf8ycm3k\"",
    "mtime": "2023-02-11T09:37:11.370Z",
    "size": 58746,
    "path": "../public/icons/fashion-design.png"
  },
  "/icons/furnitures.png": {
    "type": "image/png",
    "etag": "\"4fb4-WHWmecYQRUpDs8fZeRRkivnXyK8\"",
    "mtime": "2023-02-11T09:37:11.369Z",
    "size": 20404,
    "path": "../public/icons/furnitures.png"
  },
  "/icons/gadget.png": {
    "type": "image/png",
    "etag": "\"cfdf-yumtV/iJZExeTv2g1lLm8a398Zs\"",
    "mtime": "2023-02-11T09:37:11.368Z",
    "size": 53215,
    "path": "../public/icons/gadget.png"
  },
  "/icons/house.png": {
    "type": "image/png",
    "etag": "\"47f1-o7aZGbfNBzKLgvpobm4aft5IjmQ\"",
    "mtime": "2023-02-11T09:37:11.367Z",
    "size": 18417,
    "path": "../public/icons/house.png"
  },
  "/icons/jewellery.png": {
    "type": "image/png",
    "etag": "\"acea-eHoPouue97MQEu4+10En7G6zPIg\"",
    "mtime": "2023-02-11T09:37:11.366Z",
    "size": 44266,
    "path": "../public/icons/jewellery.png"
  },
  "/icons/job-seeker.png": {
    "type": "image/png",
    "etag": "\"6cb5-bp5ajnI42kYdoHT+8LGPIO7W7aI\"",
    "mtime": "2023-02-11T09:37:11.366Z",
    "size": 27829,
    "path": "../public/icons/job-seeker.png"
  },
  "/icons/laptop.png": {
    "type": "image/png",
    "etag": "\"520f-R2r2FcW06OpQUJYt+6E00Nc/OYA\"",
    "mtime": "2023-02-11T09:37:11.365Z",
    "size": 21007,
    "path": "../public/icons/laptop.png"
  },
  "/icons/pets.png": {
    "type": "image/png",
    "etag": "\"6bed-R7vLclZ92WFIzlkeRnq44tPa0PI\"",
    "mtime": "2023-02-11T09:37:11.364Z",
    "size": 27629,
    "path": "../public/icons/pets.png"
  },
  "/icons/phone.png": {
    "type": "image/png",
    "etag": "\"27e5-0BoEOhR17CdfoJeK8mpjIgMtiSE\"",
    "mtime": "2023-02-11T09:37:11.363Z",
    "size": 10213,
    "path": "../public/icons/phone.png"
  },
  "/icons/shampoo.png": {
    "type": "image/png",
    "etag": "\"4f06-oz+IU/AuGh4YXSJkPNf7aA94CGo\"",
    "mtime": "2023-02-11T09:37:11.362Z",
    "size": 20230,
    "path": "../public/icons/shampoo.png"
  },
  "/icons/sport.png": {
    "type": "image/png",
    "etag": "\"8d61-BhxteAvfLNizBHbDf++lV/5Bqvk\"",
    "mtime": "2023-02-11T09:37:11.361Z",
    "size": 36193,
    "path": "../public/icons/sport.png"
  },
  "/icons/wheat-sack.png": {
    "type": "image/png",
    "etag": "\"fda7-LYWzI2pW4hD2RSOa1zXHudevUos\"",
    "mtime": "2023-02-11T09:37:11.354Z",
    "size": 64935,
    "path": "../public/icons/wheat-sack.png"
  },
  "/imgs/bike.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d9c-w/i6psr3z9E4WRrLiqmKMq6YqNo\"",
    "mtime": "2023-02-11T09:37:11.352Z",
    "size": 28060,
    "path": "../public/imgs/bike.jpg"
  },
  "/imgs/bike.png": {
    "type": "image/png",
    "etag": "\"49b1-fL0d0xah04NLKGRo2kgQva3DHpQ\"",
    "mtime": "2023-02-11T09:37:11.351Z",
    "size": 18865,
    "path": "../public/imgs/bike.png"
  },
  "/imgs/canon.jpg": {
    "type": "image/jpeg",
    "etag": "\"c761-xcV2nanWyUtdrRbCJwYJ1gvPd9s\"",
    "mtime": "2023-02-11T09:37:11.350Z",
    "size": 51041,
    "path": "../public/imgs/canon.jpg"
  },
  "/imgs/car.png": {
    "type": "image/png",
    "etag": "\"2e50-pq/ZlkUX3J5dQ92y/Q+wMPiJ/TI\"",
    "mtime": "2023-02-11T09:37:11.348Z",
    "size": 11856,
    "path": "../public/imgs/car.png"
  },
  "/imgs/dress.png": {
    "type": "image/png",
    "etag": "\"3217-BDHKPDdfIICShEcjVtT+6rBy2m0\"",
    "mtime": "2023-02-11T09:37:11.347Z",
    "size": 12823,
    "path": "../public/imgs/dress.png"
  },
  "/imgs/gadget.png": {
    "type": "image/png",
    "etag": "\"7108-2xGV8DZNzfqLLmscgLvK9vh3vMM\"",
    "mtime": "2023-02-11T09:37:11.346Z",
    "size": 28936,
    "path": "../public/imgs/gadget.png"
  },
  "/imgs/house.png": {
    "type": "image/png",
    "etag": "\"279d-JR7OCqtale8eo5SZrhSrMgiBtyc\"",
    "mtime": "2023-02-11T09:37:11.345Z",
    "size": 10141,
    "path": "../public/imgs/house.png"
  },
  "/imgs/job.png": {
    "type": "image/png",
    "etag": "\"3cd0-4yivSeypPZrwCcNqhRASxcspLbs\"",
    "mtime": "2023-02-11T09:37:11.344Z",
    "size": 15568,
    "path": "../public/imgs/job.png"
  },
  "/imgs/laptop.png": {
    "type": "image/png",
    "etag": "\"f6e2f-8rYk61PH+Li69K9od5pUGNxVdmU\"",
    "mtime": "2023-02-11T09:37:11.343Z",
    "size": 1011247,
    "path": "../public/imgs/laptop.png"
  },
  "/imgs/lenovot450.jpg": {
    "type": "image/jpeg",
    "etag": "\"26de1-SlcUsHLoiUXetDbAdRmBowRoLig\"",
    "mtime": "2023-02-11T09:37:11.341Z",
    "size": 159201,
    "path": "../public/imgs/lenovot450.jpg"
  },
  "/imgs/logo.png": {
    "type": "image/png",
    "etag": "\"e938-2I9BRIZZhBUdtlZIvaH5+b30yK4\"",
    "mtime": "2023-02-11T09:37:11.339Z",
    "size": 59704,
    "path": "../public/imgs/logo.png"
  },
  "/imgs/menubutton.png": {
    "type": "image/png",
    "etag": "\"19d2-GP5hQbqfkyUtzwHkRq1gGQ88RDQ\"",
    "mtime": "2023-02-11T09:37:11.338Z",
    "size": 6610,
    "path": "../public/imgs/menubutton.png"
  },
  "/imgs/pet.png": {
    "type": "image/png",
    "etag": "\"afef-GAIMVD4CsqtWJXuhy3n7PWK03nQ\"",
    "mtime": "2023-02-11T09:37:11.337Z",
    "size": 45039,
    "path": "../public/imgs/pet.png"
  },
  "/imgs/powered_by.png": {
    "type": "image/png",
    "etag": "\"14ca-xOhal4cGsohVHGJkTiEtVvS78oc\"",
    "mtime": "2023-02-11T09:37:11.336Z",
    "size": 5322,
    "path": "../public/imgs/powered_by.png"
  },
  "/imgs/redditicon.png": {
    "type": "image/png",
    "etag": "\"16a32-BJB1QFWMnMIGt79ZAFra5pC61mg\"",
    "mtime": "2023-02-11T09:37:11.335Z",
    "size": 92722,
    "path": "../public/imgs/redditicon.png"
  },
  "/imgs/salscodes.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d9a5-cgB1+OCWPceCNoTsgE00hL8fDnE\"",
    "mtime": "2023-02-11T09:37:11.333Z",
    "size": 252325,
    "path": "../public/imgs/salscodes.jpg"
  },
  "/imgs/samsuns9+.jpg": {
    "type": "image/jpeg",
    "etag": "\"6500d-h8OSn4Jc0tVMCJceTlS2Qm8EjWg\"",
    "mtime": "2023-02-11T09:37:11.332Z",
    "size": 413709,
    "path": "../public/imgs/samsuns9+.jpg"
  },
  "/imgs/smartphone.png": {
    "type": "image/png",
    "etag": "\"35d8-7WVqZq7T7ocKZNYDPs0osi34/Dk\"",
    "mtime": "2023-02-11T09:37:11.330Z",
    "size": 13784,
    "path": "../public/imgs/smartphone.png"
  },
  "/imgs/sofa.jpg": {
    "type": "image/jpeg",
    "etag": "\"133ba-TWwbN8r5/tJ8L3w4ZpEoL4SLcIc\"",
    "mtime": "2023-02-11T09:37:11.329Z",
    "size": 78778,
    "path": "../public/imgs/sofa.jpg"
  },
  "/imgs/sofa.png": {
    "type": "image/png",
    "etag": "\"39dc-QopVcVOOHzh2Fpk6VbNOM31Afzg\"",
    "mtime": "2023-02-11T09:37:11.328Z",
    "size": 14812,
    "path": "../public/imgs/sofa.png"
  },
  "/naijlist/g15432.png": {
    "type": "image/png",
    "etag": "\"8607-qbsiZt0w70AfDMABLkB1eDmW9bo\"",
    "mtime": "2023-02-11T09:37:11.322Z",
    "size": 34311,
    "path": "../public/naijlist/g15432.png"
  },
  "/naijlist/g15432.svg": {
    "type": "image/svg+xml",
    "etag": "\"2097-mwq8/qkbss8DW1uTxZEV/2Y52RE\"",
    "mtime": "2023-02-11T09:37:11.321Z",
    "size": 8343,
    "path": "../public/naijlist/g15432.svg"
  },
  "/naijlist/g8797.png": {
    "type": "image/png",
    "etag": "\"8a77-XikkXnW93W+wsmYzbbq3DlQBNHA\"",
    "mtime": "2023-02-11T09:37:11.320Z",
    "size": 35447,
    "path": "../public/naijlist/g8797.png"
  },
  "/naijlist/g8797.svg": {
    "type": "image/svg+xml",
    "etag": "\"20a4-XrTbO4/S3dhe3MSvcxWtUp7bj9o\"",
    "mtime": "2023-02-11T09:37:11.319Z",
    "size": 8356,
    "path": "../public/naijlist/g8797.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_HCzv6D = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_HCzv6D, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_HCzv6D, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
