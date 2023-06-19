import type { InjectionKey } from "vue";

export const secretProvideKey = Symbol('secretProvideKey') as InjectionKey<boolean>;