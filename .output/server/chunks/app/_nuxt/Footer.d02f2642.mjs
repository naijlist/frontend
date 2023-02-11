import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';

const _imports_0 = "" + globalThis.__publicAssetsURL("logo.svg");
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    setHamburger: Boolean
  },
  emits: ["setHambuger"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><header class="fixed inset-0 z-40 flex justify-between items-center px-10 bg-primary h-20 w-full"><div class="flex justify-center items-center gap-5"><div class="cursor-pointer"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.195068" y="0.5" width="25" height="2" rx="1" fill="#FFF"></rect><rect x="0.195068" y="8.5" width="25" height="2" rx="1" fill="#FFF"></rect><rect x="0.195068" y="16.5" width="25" height="2" rx="1" fill="#FFF"></rect></svg></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex gap-2 items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-32"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-32"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="justify-between space-x-6 text-black hidden lg:flex"><li class="text-white border hover:bg-primaryDark duration-500 transition ease-in rounded-md py-2 px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/home",
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="${ssrRenderStyle({ "fill": "white", "transform": "" })}"${_scopeId}><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"${_scopeId}></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"${_scopeId}></path></svg> \xA0 Post ads`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                style: { "fill": "white", "transform": "" }
              }, [
                createVNode("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }),
                createVNode("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })
              ])),
              createTextVNode(" \xA0 Post ads")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="rounded-md bg-black hover:bg-gray-800 duration-500 transition ease-in py-2 px-4 text-white">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="${ssrRenderStyle({ "fill": "white", "transform": "" })}"${_scopeId}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"${_scopeId}></path></svg> \xA0 Account `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                style: { "fill": "white", "transform": "" }
              }, [
                createVNode("path", { d: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" })
              ])),
              createTextVNode(" \xA0 Account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></header><ul class="sm:hidden bottom-0 left-0 fixed flex justify-between w-screen px-10 py-4 bg-zinc-900 text-white"><li>Home</li><li>Post ads</li><li>Account</li></ul><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Footer </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _, _sfc_main$1 as a };
//# sourceMappingURL=Footer.d02f2642.mjs.map
