import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("check.png");
const _imports_1 = "" + globalThis.__publicAssetsURL("hourglass.png");
const _imports_2 = "" + globalThis.__publicAssetsURL("remove.png");
const _sfc_main = {
  setup() {
    const layout = "dashboard";
    const showDrawer = ref(true);
    return { showDrawer, layout };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "dashboard" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-28 z-10 lg:px-72 px-40 grid grid-cols-2 lg:grid-cols-3 gap-16 lg:text-lg text-md leading-10"${_scopeId}><div class="hover:scale-105 ease-out transition-300 cursor-pointer bg-gradient-to-r from-secondary to-dashboardPrimary w-52 h-40 rounded-md text-white px-5 py-5"${_scopeId}><div class="flex justify-start"${_scopeId}><div class="bg-white w-10 h-10 rounded-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-10 h-10"${_scopeId}></div></div> Active ads <div class="flex justify-end"${_scopeId}><p class="text-4xl"${_scopeId}>10</p></div></div><div class="bg-gradient-to-r from-dashboardPreNursery to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5"${_scopeId}><div class="flex justify-start"${_scopeId}><div class="bg-white w-9 h-9 rounded-sm flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="w-5 h-5"${_scopeId}></div></div> Reviewing ads <div class="flex justify-end"${_scopeId}><p class="text-4xl"${_scopeId}>6</p></div></div><div class="bg-gradient-to-r from-secondary to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5"${_scopeId}><div class="flex justify-start"${_scopeId}><div class="bg-white w-10 h-10 rounded-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="w-10 h-10"${_scopeId}></div></div> Declined ads <div class="flex justify-end"${_scopeId}><p class="text-4xl"${_scopeId}>3</p></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-28 z-10 lg:px-72 px-40 grid grid-cols-2 lg:grid-cols-3 gap-16 lg:text-lg text-md leading-10" }, [
            createVNode("div", { class: "hover:scale-105 ease-out transition-300 cursor-pointer bg-gradient-to-r from-secondary to-dashboardPrimary w-52 h-40 rounded-md text-white px-5 py-5" }, [
              createVNode("div", { class: "flex justify-start" }, [
                createVNode("div", { class: "bg-white w-10 h-10 rounded-lg" }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "w-10 h-10"
                  })
                ])
              ]),
              createTextVNode(" Active ads "),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("p", { class: "text-4xl" }, "10")
              ])
            ]),
            createVNode("div", { class: "bg-gradient-to-r from-dashboardPreNursery to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5" }, [
              createVNode("div", { class: "flex justify-start" }, [
                createVNode("div", { class: "bg-white w-9 h-9 rounded-sm flex justify-center items-center" }, [
                  createVNode("img", {
                    src: _imports_1,
                    class: "w-5 h-5"
                  })
                ])
              ]),
              createTextVNode(" Reviewing ads "),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("p", { class: "text-4xl" }, "6")
              ])
            ]),
            createVNode("div", { class: "bg-gradient-to-r from-secondary to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5" }, [
              createVNode("div", { class: "flex justify-start" }, [
                createVNode("div", { class: "bg-white w-10 h-10 rounded-lg" }, [
                  createVNode("img", {
                    src: _imports_2,
                    class: "w-10 h-10"
                  })
                ])
              ]),
              createTextVNode(" Declined ads "),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("p", { class: "text-4xl" }, "3")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home.fd6087d2.mjs.map
