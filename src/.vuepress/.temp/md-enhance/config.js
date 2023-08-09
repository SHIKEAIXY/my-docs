import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "C:/Users/dell/Desktop/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
  },
  setup: () => {

  }
});
