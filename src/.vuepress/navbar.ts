import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "文章",
    icon: "article",
    prefix: "/article/",
    children: [
      {
        text: "原创文章",
        icon: "article",
        link: "",
        activeMatch: "^/article/$",
      },
      {
        text: "后端",
        icon: "shell",
        link: "after/",
        activeMatch: "^/after/$",
      },
      {
        text: "前端",
        icon: "chrome",
        link: "front/",
        activeMatch: "^/front/$",
      }
    ],
  },
  {
    text: "随笔",
    icon: "note",
    link: "/note"
  },
])
