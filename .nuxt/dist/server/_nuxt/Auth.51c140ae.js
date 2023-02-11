import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./list.9bfd1aad.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const Auth_vue_vue_type_style_index_0_scoped_372e7978_lang = "";
const _sfc_main = {
  setup() {
    function userSignup(e) {
      e.preventDefault();
      console.log("Signing up....");
    }
    return { userSignup };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex" }, _attrs))} data-v-372e7978><div class="fixed z-10 sm:px-10 sm:py-5 sm:text-black text-black" data-v-372e7978>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "flex gap-2 items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-8" data-v-372e7978${_scopeId}><h3 class="text-white font-semibold text-2xl" data-v-372e7978${_scopeId}>Naijlist</h3>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo",
            class: "w-8"
          }),
          createVNode("h3", { class: "text-white font-semibold text-2xl" }, "Naijlist")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white" data-v-372e7978><div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end p-10 pr-20 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative" style="${ssrRenderStyle({ "background-image": "url(https://images.unsplash.com/photo-1472841298542-80b08039a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)" })}" data-v-372e7978><div class="absolute bg-gradient-to-b from-secondary to-primary opacity-75 inset-0 z-0" data-v-372e7978></div><div class="w-full max-w-lg z-10 mb-20" data-v-372e7978><div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6" data-v-372e7978>Google of classified ads.....</div><div class="sm:text-sm xl:text-md text-gray-100 font-normal" data-v-372e7978> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div></div><ul class="circles" data-v-372e7978><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li><li data-v-372e7978></li></ul></div><div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white" data-v-372e7978><div class="max-w-md w-full" data-v-372e7978><div class="mb-10" data-v-372e7978><h3 class="font-semibold text-2xl text-gray-800" data-v-372e7978>Login </h3><p class="text-gray-500" data-v-372e7978>Welcome back to your account.</p></div><div class="flex" data-v-372e7978><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-v-372e7978><button type="submit" class="w-full flex items-center justify-center bg-red-500 hover:bg-red-400 text-gray-100 p-3 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500" data-v-372e7978> Login with <svg class="w-4 ml-2" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-372e7978><path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z" data-v-372e7978></path></svg></button></div><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-v-372e7978><button type="submit" class="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-gray-100 p-3 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500" data-v-372e7978> Login with <svg class="w-4 ml-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-372e7978><path fill="#fff" fill-rule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22" data-v-372e7978></path></svg></button></div></div><div class="flex items-center justify-center space-x-2 my-5" data-v-372e7978><span class="h-px w-16 bg-gray-200" data-v-372e7978></span><span class="text-gray-300 font-normal" data-v-372e7978>or continue with</span><span class="h-px w-16 bg-gray-200" data-v-372e7978></span></div><form class="w-full max-w-lg" data-v-372e7978><div class="flex flex-wrap -mx-3 mb-2" data-v-372e7978><div class="w-full px-3" data-v-372e7978><label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password" data-v-372e7978> Email </label><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-password" type="email" placeholder="johndoe@example.com" data-v-372e7978></div></div><div class="flex flex-wrap -mx-3 mb-2" data-v-372e7978><div class="w-full px-3" data-v-372e7978><label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password" data-v-372e7978> Password </label><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-password" type="password" placeholder="******************" data-v-372e7978></div></div><div class="space-y-6 mt-2" data-v-372e7978><div class="flex items-center justify-between" data-v-372e7978><div class="flex items-center" data-v-372e7978><input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" data-v-372e7978><label for="remember_me" class="ml-2 block text-sm text-gray-800" data-v-372e7978> Remember me </label></div><div class="text-sm" data-v-372e7978> Forgot your password? <a href="#" class="text-blue-400 hover:text-blue-400" data-v-372e7978> Reset it </a></div></div><div data-v-372e7978><button type="submit" class="w-full flex justify-center bg-primary hover:bg-pink-500 text-white p-3 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500" data-v-372e7978> Sign in </button></div><p className="mt-3 mb-4 text-center text-sm " data-v-372e7978> Don&#39;t have an account yet? `);
  _push(ssrRenderComponent(_component_router_link, { to: "/signup" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="text-blue-400" data-v-372e7978${_scopeId}>Sign up</a>`);
      } else {
        return [
          createVNode("a", { class: "text-blue-400" }, "Sign up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-372e7978"]]);
export {
  Auth as default
};
//# sourceMappingURL=Auth.51c140ae.js.map
