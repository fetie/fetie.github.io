import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "文章",
    icon: "article",
    link: "/article/",
    activeMatch: "^/article/$",
  }
])
