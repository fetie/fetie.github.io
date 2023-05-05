import { sidebar } from "vuepress-theme-hope";
import { article } from "./article.js";

export const zhSidebarConfig = sidebar({
  "/article": article,

  "/about/": ["", "site"],

  // fallback
  "/": ["", "about/"],
});
