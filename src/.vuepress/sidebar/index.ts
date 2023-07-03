import { sidebar } from "vuepress-theme-hope";
import { post } from "./post.js";
import { linux } from "./linux.js";
import { civil } from "./civil.js";

export const zhSidebarConfig = sidebar({
  "/note": [""],

  "/game/": ["guess-num"],

  "/linux/": linux,

  "/civil/": civil,

  "/post/": post,

  "/about/": ["", "site","donate"],

  // fallback
  "/": ["", "about/", "note"],
});
