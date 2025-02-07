// import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@GuessNum": path.resolve(__dirname, "component/GuessNum.vue"),
  },
  dest: "dist",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "fetie",
      description: "fetie的博客",
    },
  },

  markdown: {
    code: {
      lineNumbers: 10,
    },
  },

  theme,

  plugins: [cachePlugin({ type: "filesystem" })],

  shouldPrefetch: false,
});
