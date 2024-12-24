import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java One",
  description: "One notebook of Java",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Java入门', link: '/java/java0101' }
    ],

    sidebar: [
      {
        text: 'Java入门教程',
        items: [
          { text: '你好, Java', link: '/java/java0101' },
          { text: 'Java基本语法', link: '/java/java0201' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChatGIS/java-one' }
    ]
  }
})
