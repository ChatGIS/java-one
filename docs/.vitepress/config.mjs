import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/java-one/',
  title: "Java One",
  head: [['link', { rel: 'icon', href: 'https://chatgis.space/images/favicon.png' }]],
  description: "One notebook of Java",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Java入门', link: '/articles/01/01' }
    ],

    sidebar: [
      {
        text: 'Java入门教程',
        items: [
          { text: '你好, Java', link: '/articles/01/01' },
          { text: 'Java基本语法', link: '/articles/01/01' },
        ]
      }, {
        text: '异常处理',
        items: [
          {text: '异常类继承层次', link: '/articles/09/01'},
          {text: 'tyr-catch', link: '/articles/09/02'},
        ]
      }, {
        text: 'Spring Cloud Greenwich',
        items: [
          { text: 'Spring Cloud版本说明', link: '/articles/10/01' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChatGIS/java-one' }
    ]
  }
})
