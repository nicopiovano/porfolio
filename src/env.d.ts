/// <reference types="astro/client" />

declare global {
  namespace Astro {
    interface Locals {
      lang?: import("./i18n").Lang
      t?: ReturnType<typeof import("./i18n").getI18n>
    }
  }
}

// `astro check` a veces no resuelve tipos de `three` desde <script> inline en `.astro`.
// Declaraciones mínimas para evitar TS7016 durante build.
declare module "three";
declare module "three/examples/jsm/controls/OrbitControls.js" {
  export const OrbitControls: any;
}

export { }