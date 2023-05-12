import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "随笔",
    icon: "note",
    link: "/note"
  },
  {
    text: "Linux",
    icon: "linux",
    link: "/linux"
  },
  {
    text: "文章",
    icon: "article",
    prefix: "/post/",
    children: [
      {
        text: "原创文章",
        icon: "article",
        link: "",
        activeMatch: "^/post/$",
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
    text: "游戏",
    icon: "software",
    prefix: "/game/",
    children: [
      {
        text: "猜数字",
        icon: "software",
        link: "guess-num",
      },
    ],
  },
])
