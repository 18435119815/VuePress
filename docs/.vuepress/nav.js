module.exports = [
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
        {
          text: 'vue', items: [
            { text: '基础知识', link: '/vue/' },
            { text: 'ssr', link: '/vue/ssr/' }
          ]
        },
        {
          text: '面试题', items: [
            { text: '理论面试题', link: '/interview/interviewText'},
            { text: '实战面试题', link: '/interview/interviewMath'},
            { text: '项目细节', link: '/interview/project'},
        ]
        },
        {
          text: '其他知识', items: [
            { text: '移动端', link: '/knowledge/mobileAPP/' },
            { text: 'typeScript', link: '/knowledge/typeScript/' },
            { text: '其他常用', link: '/knowledge/other/' }
          ]
        }
      ]
    },
    {
      text: '其他知识',
      items: [
        {
          text: '相机', link: '/other/camera'
        },
        {
          text: '面料', link: '/other/fabric'
        },
        {
          text: '股票', link: '/other/fund'
        },
        {
          text: '粤语', link: '/other/yueyu'
        },
        {
          text: '接口', link: '/other/Interface'
        },
      ]
    }
  ]