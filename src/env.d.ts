/// <reference types="astro/client" />

declare namespace App {
  export interface Locals {
    lang: import("./i18n").Lang
    t: ReturnType<typeof import("./i18n").getI18n>
  }
}

export { }