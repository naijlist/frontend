import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "default"
declare module "/Users/salscodes/naijlist/naijlist-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}