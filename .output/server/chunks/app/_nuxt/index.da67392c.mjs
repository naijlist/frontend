import { useSSRContext, ref, mergeProps, resolveComponent, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$3 = {
  setup() {
    const query = ref("");
    function searchAds() {
    }
    return {
      query,
      searchAds
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero--container flex justify-center items-center bg-blend-multiply bg-primary px-10 sm:px-0 py-10 sm:pt-10 mt-20 sm:mt-20" }, _attrs))} data-v-0fb84478><div class="w-full max-w-screen-sm" data-v-0fb84478><h1 class="text text-center text-white text-semibold text-2xl font-bold sm:text-5xl pb-4" data-v-0fb84478>Google of classified ads </h1><p class="text-white sm:text-base text-sm text-semibold text-center" data-v-0fb84478>Buy And Sell Everything From Used Cars To Mobile Phones And Computers, Or Search For Property, Jobs And More.</p><div class="flex justify-center items-center py-5" data-v-0fb84478><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="${ssrRenderStyle({ "fill": "white", "user-select": "auto" })}" data-v-0fb84478><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" style="${ssrRenderStyle({ "user-select": "auto" })}" data-v-0fb84478></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" style="${ssrRenderStyle({ "user-select": "auto" })}" data-v-0fb84478></path></svg><div class="bg-black hover:bg-gray-800 transition ease-in duration-500 px-2 rounded-md" data-v-0fb84478><select class="py-2 text-white bg-black hover:bg-gray-800 duration-500 transition ease-in focus:outline-none" data-v-0fb84478><option data-v-0fb84478>Abuja</option><option data-v-0fb84478>Kaduna</option><option data-v-0fb84478>Lagos</option></select></div></div><div class="flex" data-v-0fb84478><input${ssrRenderAttr("value", $setup.query)} class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none" type="text" placeholder="Search for anything in Nigeria" data-v-0fb84478><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 px-3 py-3 cursor-pointer flex items-center rounded-tr-md rounded-br-md bg-black text-red hover:bg-gray-800 duration-500 transition ease-in" width="24" height="24" style="${ssrRenderStyle({ "fill": "white", "user-select": "auto" })}" data-v-0fb84478><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" style="${ssrRenderStyle({ "user-select": "auto" })}" data-v-0fb84478></path></svg></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0fb84478"]]);
const _sfc_main$2 = {
  name: "autoscroll",
  components: {},
  data() {
    return {
      items: [
        { title: "phones", icon: "phone.png" },
        { title: "laptops", icon: "laptop.png" },
        { title: "gadgets", icon: "gadget.png" },
        { title: "properties", icon: "house.png" },
        { title: "fashion", icon: "fashion-design.png" },
        { title: "funiture", icon: "furnitures.png" },
        { title: "pets", icon: "pets.png" },
        { title: "cars", icon: "car.png" },
        { title: "bike", icon: "bike.png" },
        { title: "job", icon: "job-seeker.png" },
        { title: "jewerries", icon: "jewellery.png" },
        { title: "Health beauty ", icon: "shampoo.png" },
        { title: "Sport outdoor", icon: "sport.png" },
        { title: "Food", icon: "wheat-sack.png" }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-11/12 py-5 text-white container mt-10 mx-auto m-auto p-auto" }, _attrs))}><div class="flex overflow-x-scroll hide-scroll-bar"><div class="flex flex-nowrap lg:ml-20 md:ml-20 ml-10"><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<div class="inline-block px-3"><div class="w-20 h-20 max-w-xs overflow-hidden px-2 py-2 rounded-md hover:shadow-xl transition-shadow duration-300 ease-in-out"><img${ssrRenderAttr("src", `/icons/${item.icon}`)}${ssrRenderAttr("alt", item.title)}></div><div class="w-20 mt-2"><p class="text-black text-center break-words text-xs">${ssrInterpolate(item.title)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Categories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("imgs/canon.jpg");
const _sfc_main$1 = {
  props: ["title"],
  setup(props) {
    return {
      title: props.title
    };
  },
  mounted() {
    console.log(this.title);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-center justify-center w-11/12 container mx-auto" }, _attrs))}><h1 class="px-1 pt-10 pb-5 lg:text-2xl text-base sm:text-3xl">${ssrInterpolate($setup.title)}</h1><div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14"><!--[-->`);
  ssrRenderList(8, (i, index2) => {
    _push(`<div class="card focus:bg-gray-100 hover:bg-gray-100 duration-500 transition ease-in cursor-pointer"><div class="pt-0 px-0 rounded-md flex flex-col">`);
    _push(ssrRenderComponent(_component_router_link, {
      to: `/ads-details/${index2}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="rounded-md overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", { class: "rounded-md overflow-hidden" }, [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="flex justify-between -mt-4 px-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 rounded-full bg-white text-red hover:bg-gray-300 duration-500 transition ease-in" style="${ssrRenderStyle({ "fill": "rgb(0, 0, 0)", "user-select": "auto" })}"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" style="${ssrRenderStyle({ "user-select": "auto" })}"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 rounded-full bg-white text-red hover:bg-gray-300 duration-500 transition ease-in" style="${ssrRenderStyle({ "fill": "rgb(0, 0, 0)", "user-select": "auto" })}"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z" style="${ssrRenderStyle({ "user-select": "auto" })}"></path></svg></div><div class="flex justify-between items-center">`);
    _push(ssrRenderComponent(_component_router_link, {
      to: `/ads-details/${index2}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><h5 class="sm:text-sm text-xs text-semibold pl-4 -mt-3 py-4"${_scopeId}>Canon Camera 50px</h5><h5 class="sm:text-sm text-xs text-semibold pl-4 -mt-4 sm:-mt-3 sm:pr-4 py-1"${_scopeId}><b${_scopeId}>NGN 50000</b></h5><span class="flex pl-3 sm:pr-4 py-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"${_scopeId}></path></svg><h5 class="sm:text-sm text-xs text-slate-400 text-semibold"${_scopeId}> Abuja</h5></span></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("h5", { class: "sm:text-sm text-xs text-semibold pl-4 -mt-3 py-4" }, "Canon Camera 50px"),
              createVNode("h5", { class: "sm:text-sm text-xs text-semibold pl-4 -mt-4 sm:-mt-3 sm:pr-4 py-1" }, [
                createVNode("b", null, "NGN 50000")
              ]),
              createVNode("span", { class: "flex pl-3 sm:pr-4 py-2" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-primary mr-1",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                    "clip-rule": "evenodd"
                  })
                ])),
                createVNode("h5", { class: "sm:text-sm text-xs text-slate-400 text-semibold" }, " Abuja")
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_Categories = __nuxt_component_1;
  const _component_AdsList = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_Categories, null, null, _parent));
  _push(ssrRenderComponent(_component_AdsList, { title: "Featured ads" }, null, _parent));
  _push(ssrRenderComponent(_component_AdsList, { title: "Popular ads" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.da67392c.mjs.map
