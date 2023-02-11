import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "default"
declare module "/Users/salscodes/naijlist/naijlist/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}