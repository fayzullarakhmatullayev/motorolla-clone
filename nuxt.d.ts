import type { Router, RouteLocationNormalized } from "vue-router";

export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $t: (key: string) => string;
    $router: Router;
    $route: RouteLocationNormalized;
  }
}
