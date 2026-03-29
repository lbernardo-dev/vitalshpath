/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.PNG" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.webp" {
  const content: any;
  export default content;
}
