import { arraySidebar } from "vuepress-theme-hope"

export const post = arraySidebar([
  "",
  {
    text: "后端",
    icon: "shell",
    prefix: "after/",
    collapsible: true,
    children: [
      "",
      "dispose-https",
      "mongodb-defense",
      "host-custom",
      "free-https",
    ]
  },
  {
    text: "前端",
    icon: "chrome",
    prefix: "front/",
    collapsible: true,
    children: [
      "",
      "html2pdf",
      "vue2to3",
      "repeat-click",
      "scss-check",
      "ts-problem",
      "css-block",
      "css-attr-calc",
      "event",
      "render",
    ]
  }
]);
