import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "脆脆鲨插件",
  description: "Jinmaocuicuisha-plugin docs",
  
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
        container: true,
      },
    },
  }),
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
