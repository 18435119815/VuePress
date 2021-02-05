module.exports = {
  title: 'Mr哎呦喂的博客',
  description: '欢迎来到我的小窝',
  base:'/VuePress/',
  head: [
    ["link", { rel: "icon", href: "/assets/img/icon1.png" }],
    // 百度统计代码
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?e2bd54b8015cec977c6f30d0896b8a1b";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  themeConfig: {
    logo: '/assets/img/hero.png',
    //禁用页面所有导航(导航栏消失不见)
    // navbar: false,
    // 导航栏深度
    sidebarDepth: 2,
    // 头部导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: 'External', link: 'https://google.com' },
      { text: '人生心得', link: '/lifeExperience/' },
      { text: '百度', link: 'https://www.baidu.com' },
      {
        text: '选择语言',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ]
          },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ],
    sidebar: {
      '/foo/':['','one','two'],
      '/vue/':['','vue-x'],
      '/lifeExperience/':[''],
      '/markDown/':['']
    }
  }
}