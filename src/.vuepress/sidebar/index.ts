import { sidebar } from "vuepress-theme-hope";
import { post } from "./post.js";

export const zhSidebarConfig = sidebar({
  "/note": [""],

  "/game/": ["guess-num"],

  "/post/": post,

  "/about/": ["", "site","donate"],

  // fallback
  "/": ["", "about/", "note"],
});
