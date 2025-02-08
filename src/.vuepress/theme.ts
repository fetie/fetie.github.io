import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbarConfig } from "./navbar.js";
import { zhSidebarConfig } from "./sidebar";

export default hopeTheme({
  hostname: "https://www.fetie.cn",

  author: {
    name: "fetie",
    url: "https://www.fetie.cn",
    email:"a@fetie.cn"
  },

  favicon: "/favicon.ico",

  logo: "/avatar.jpg",

  repo: "https://github.com/fetie/fetie-blog",

  docsBranch:'master',

  repoDisplay: true,

  docsDir: "src",

  contributors: false,

  lastUpdated: true,

  locales: {
    "/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,

      footer:
        '<a href="https://www.fetie.cn/about/site.html" target="_blank">关于网站</a>',

      copyright: "MIT Licensed | Copyright © 2019-present fetie",

      blog: {
        description: "fetie的博客",
        intro: "/about/",
        medias: {
          Juejin: {
            icon: '<svg t="1683275733811" class="icon" viewBox="0 0 1322 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="736" width="120" height="120"><path d="M664.49066633 247.637333h0.085334l154.88-123.178666-154.88-124.288L664.40533333 0l-154.624 124.202667 154.624 123.306666 0.085333 0.128z m0.085334 388.565334l0.085333-0.085334 399.573333-315.221333-108.373333-87.04-291.2 229.76-0.085333 0.085333-0.085334 0.085334-291.242666-229.76-108.245334 87.04 399.488 315.221333 0.085334-0.085333z m-0.170667 215.466666l0.170667-0.085333 534.954666-422.101333 108.373334 87.04-243.413334 192L664.57600033 1024 31.74400033 525.013333 21.33333333 516.778667l108.373333-87.04 534.698667 421.973333z" fill="#1E80FF" p-id="737"></path></svg>',
            link: "https://juejin.cn/user/545781679669150",
          },
          GitHub: "https://github.com/fetie",
          Gitee: "https://gitee.com/fetie",
        },
      },
    }
  },

  displayFooter: true,

  plugins: {

    icon:{
      assets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
      prefix: "iconfont icon-",
    },

    blog: {
      excerptLength: 0
    },

    comment: {
      provider: "Giscus",
      repo:'fetie/fetie-blog',
      repoId:'R_kgDOJgDXBw',
      category:'Announcements',
      categoryId:'DIC_kwDOJgDXB84CWXI0',
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    /*markdown: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imgMark: true,
      katex: true,
      mermaid: true,
      presentation: true,
      sub: true,
      sup: true,
      vPre: true,
    },*/

    pwa: {
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png"
      },
      manifest: {
        name: "fetie 的个人博客",
        short_name: "fetie Blog",
        description: "fetie 的个人博客",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/favicon.ico",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "分类",
            short_name: "分类",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "文章分类分组",
          },
          {
            name: "标签",
            short_name: "标签",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "文章标签分组",
          },
          {
            name: "时间线",
            short_name: "时间线",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "时间线文章列表",
          },
          {
            name: "个人介绍",
            short_name: "个人介绍",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "个人介绍",
          },
        ],
      },
    },
  },
});
