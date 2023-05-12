import { sidebar } from "vuepress-theme-hope";
import { post } from "./post.js";
import { linux } from "./linux.js";

export const zhSidebarConfig = sidebar({
  "/note": [""],

  "/game/": ["guess-num"],

  "/linux/": linux,

  "/post/": post,

  "/about/": ["", "site","donate"],

  // fallback
  "/": ["", "about/", "note"],
});
