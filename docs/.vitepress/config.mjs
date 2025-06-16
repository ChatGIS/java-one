import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/java-one/",
  title: "Java One",
  head: [
    ["link", { rel: "icon", href: "https://chatgis.space/images/favicon.png" }],
  ],
  description: "One notebook of Java",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "Java入门", link: "/articles/01/01" },
    ],
    sidebar: [
      {
        text: "Java入门教程",
        items: [
          {
            text: "你好, Java",
            items: [
              { text: "Java概述", link: "/articles/01/01" },
              { text: "下载安装", link: "/articles/01/02" },
              { text: "Hello World", link: "/articles/01/03" },
            ],
          },
          {
            text: "异常处理",
            items: [
              { text: "异常类继承层次", link: "/articles/09/01" },
              { text: "tyr-catch", link: "/articles/09/02" },
              { text: "finally", link: "/articles/09/03" },
              { text: "throws", link: "/articles/09/04" },
              { text: "自定义异常类", link: "/articles/09/05" },
            ],
          },
        ],
      },
      {
        text: "Spring Cloud Greenwich",
        collapsed: true,
        items: [{ text: "Spring Cloud版本说明", link: "/articles/10/01" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ChatGIS/java-one" },
    ],
  },
});
