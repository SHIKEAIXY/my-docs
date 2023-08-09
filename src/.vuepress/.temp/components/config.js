import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import Badge from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
