module.exports = {
  title: 'Mr哎呦喂的博客',
  description: 'Mr哎呦喂的博客',
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
  markdown:{
    lineNumbers:true
  },
  themeConfig: {
    logo: '/assets/img/hero.png',
    //禁用页面所有导航(导航栏消失不见)
    // navbar: false,
    // 导航栏深度
    sidebarDepth: 3,
    // 头部导航配置
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    // sidebar:'auto'
    //显示所有嵌套标题
    // displayAllHeaders: true,
  }
}