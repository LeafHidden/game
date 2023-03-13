import type { EventBusKey } from '@vueuse/core'
export const fooKey: EventBusKey<string> = Symbol('symbol-key')