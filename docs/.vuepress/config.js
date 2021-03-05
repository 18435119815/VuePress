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
    sidebarDepth: 3,
    // 头部导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/myself/' },
      { text: '人生心得', link: '/lifeExperience/' },
      { text: '网址导航', link: '/website/' },
      {
        text: '技术文档',
        items: [
          {
            text: 'JS', items: [
              { text: '基础使用', link: '/JS/' },
              { text: '浏览器', link: '/browser/' },
            ]
          },
          { text: 'vue', items: [
            { text: 'ssr', link: '/vue/ssr/' }
          ] },
          { text: '其他知识', items: [
            { text: '移动端', link: '/knowledge/mobileAPP/' }
          ] }
        ]
      }
    ],
    sidebar: {
      '/JS/':['','Object','Math'],
      '/foo/':['','one','two'],
      '/vue/':['','vue-x','interview','sourceCode','ssr','project','vue3'],
      '/lifeExperience/':[''],
      '/markDown/':[''],
      '/website/':[''],
      '/browser/':[''],
      '/knowledge/':['mobileAPP','webpack','other'],
      '/typeScript/':[]
    }
  }
}