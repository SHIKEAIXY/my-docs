import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"

import "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});