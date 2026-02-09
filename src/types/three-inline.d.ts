// Tipos mínimos para que `astro check` no falle cuando `three` se importa dentro de
// <script> inline en archivos `.astro`.

declare module "three";

declare module "three/examples/jsm/controls/OrbitControls.js" {
  export const OrbitControls: any;
}

