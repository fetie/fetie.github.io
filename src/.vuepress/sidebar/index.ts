import { sidebar } from "vuepress-theme-hope";
import { post } from "./post.js";

export const zhSidebarConfig = sidebar({
  "/post/": post,

  "/about/": ["", "site"],

  "/note": [""],

  // fallback
  "/": ["", "about/", "note"],
});
