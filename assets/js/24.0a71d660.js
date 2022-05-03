(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{666:function(s,n,a){"use strict";a.r(n);var e=a(88),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"赣州分项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赣州分项目"}},[s._v("#")]),s._v(" 赣州分项目")]),s._v(" "),a("h2",{attrs:{id:"离职原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离职原因"}},[s._v("#")]),s._v(" 离职原因")]),s._v(" "),a("ol",[a("li",[s._v("项目需要长期驻场开发")]),s._v(" "),a("li",[s._v("类型单一，不利用未来的发展")]),s._v(" "),a("li",[s._v("sz相对来说互联网氛围更好，朋友也都在这边。")])]),s._v(" "),a("h2",{attrs:{id:"项目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目描述"}},[s._v("#")]),s._v(" 项目描述")]),s._v(" "),a("p",[s._v("通过分析市民的基本信息以及诚实守信行为计算出来的个人信用分，以此来提供不同的便民服务，建设信用城市。"),a("br"),s._v("\nweb端做的是后台管理，使用vue+elementui搭建前端项目，管理员可以在次分配不同的机构、角色、用户、资源、应用场景，进行一些日志、信用记录的查询，查看机构、用户的统计报表。")]),s._v(" "),a("p",[s._v("vue版本： 2.6.10"),a("br"),s._v("\nvue/cli版本: 3.6.0")]),s._v(" "),a("img",{attrs:{src:"/assets/img/project/project1.jpg",width:"100",height:"auto",align:"middle"}}),s._v(" "),a("p",[s._v("H5是客户端，使用的是vue+vantui搭建，用来给客户提供信用分查询、授权、修复等功能。")]),s._v(" "),a("h2",{attrs:{id:"通用知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用知识"}},[s._v("#")]),s._v(" 通用知识")]),s._v(" "),a("h3",{attrs:{id:"身份安全验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#身份安全验证"}},[s._v("#")]),s._v(" 身份安全验证")]),s._v(" "),a("ol",[a("li",[s._v("登录之后，后端会生成一个token并存入浏览器scookie中，需要前端设置每次请求的时候，在请求头中加入token，后端自行读取")]),s._v(" "),a("li",[s._v("登录之后，后端会生成一个token并返回前端，由前端保存，每次发送请求的时候在请求头中携带token给后端")])]),s._v(" "),a("h2",{attrs:{id:"web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[s._v("#")]),s._v(" web")]),s._v(" "),a("h3",{attrs:{id:"路由权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由权限"}},[s._v("#")]),s._v(" 路由权限")]),s._v(" "),a("ol",[a("li",[s._v("在前端先定义好所有的路由信息AllRoutes，由后端返回包含只name和children字段的权限数组partRoutes，前端拿到之后进行递归遍历，将匹配到的数组push进一个新的数组并映射到界面中。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    function newRoutes(partRoutes=[],AllRoutes=[]){\n        //定义新数组来接收用户对应的路由权限\n        const realRoutes = []\n        AllRoutes.forEach((v,i)=>{\n            partRoutes.forEach((item,index)=>{\n                if(v.meta.name==item.name){\n                    //递归判断子路由的权限\n                    if(item.children&&item.children.length>0){\n                        v.children = newRoutes(item.children,v.children)\n                    }\n\n                    realRoutes.push(v)\n                }\n            })\n        })\n\n        return realRoutes\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("如果路由是根据角色进行划分的话，在设置路由的时候，在meta信息中加入路由对应的角色名，拿到后端返回的角色后，再对路由进行筛选。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//router.js中\nroutes: [\n  {\n    path: '/login',\n    name: 'login',\n    meta: {\n      roles: ['admin', 'user']\n    },\n    component: () => import('../components/Login.vue')\n  },\n  {\n    path: 'home',\n    name: 'home',\n    meta: {\n      roles: ['admin']\n    },\n    component: () => import('../views/Home.vue')\n  },\n]\n//路由导航中\n//从后台获取的用户角色\nconst role = 'user'\n//当进入一个页面是会触发导航守卫 router.beforeEach 事件\nrouter.beforeEach((to,from,next)=>{\n if(to.meta.roles.includes(role)){\n next() //放行\n }esle{\n next({path:\"/404\"}) //跳到404页面\n }\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("后端返回全部路由，需要注意一个问题就是后端返回的不可以直接使用，因为component项不识别，需要自己处理")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export function traverseRoutes(menus) {\n  const routes = menus.filter(item => item.path).map(menu => {\n    if (menu.component) {\n      const name = menu.component;\n      menu.component = (resolve) => require([`@/${name}`], resolve);\n    }\n\n    menu.meta = { title: menu.name, icon: menu.icon };\n\n    if (menu.children && menu.children.length) {\n      menu.children = traverseRoutes(menu.children);\n    }\n    return menu;\n  });\n\n  return routes;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"h5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5"}},[s._v("#")]),s._v(" H5")]),s._v(" "),a("h3",{attrs:{id:"app-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-vue"}},[s._v("#")]),s._v(" app.vue")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  \x3c!-- 修改应用组件的模板 --\x3e\n  <div id="app">\n    <keep-alive>\n        \x3c!-- 需要缓存的视图组件 --\x3e \n        <router-view v-if="$route.meta.keepAlive"></router-view>\n     </keep-alive>\n      \x3c!-- 不需要缓存的视图组件 --\x3e\n     <router-view v-if="!$route.meta.keepAlive"></router-view>\n    \x3c!-- 并放置非路由组件 --\x3e\n    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>\n  </div>\n</template>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"分享给微信好友"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分享给微信好友"}},[s._v("#")]),s._v(" 分享给微信好友")]),s._v(" "),a("ol",[a("li",[s._v("weixin-js-sdk\n"),a("code",[s._v('import wx from "weixin-js-sdk";')])]),s._v(" "),a("li",[s._v("定义分享内容以及必要信息")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 控制分享标题，图片\n    wxShare(encodeURIComponent(location.href.split("#")[0]))\n      .then((res) => {\n        wx.config({\n          appId: res.config.appId, // 必填，公众号的唯一标识\n          timestamp: res.config.timestamp, // 必填，生成签名的时间戳\n          nonceStr: res.config.nonceStr, // 必填，生成签名的随机串\n          signature: res.config.signature, // 必填，签名\n          jsApiList: [\n            "updateAppMessageShareData", //自定义“分享给朋友”及“分享到QQ”按钮的分享内容\n            "updateTimelineShareData", //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容\n          ], // 必填，需要使用的JS接口列表\n        });\n      })\n      .catch((error) => {\n        console.log(error);\n      });\n    //通过ready接口处理成功验证\n    wx.ready(function () {\n      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容\n      wx.updateAppMessageShareData({\n        title: "快来看看你的信用值多少钱叭~", // 分享标题\n        desc: "快来看看你的信用值多少钱叭~", // 分享描述\n        link: `http://sukura.nat300.top/#/gradeExtension?userId=${link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致\n        imgUrl: "http://sukura.nat300.top/images/logo.jpg", // 分享图标\n        success: () => {},\n      });\n      //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容\n      wx.updateTimelineShareData(内容同上);\n    });\n\n    wx.error(function (res) {});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("禁止分享")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 禁止微信分享\nbanWxShare() {\n    wx.config({\n        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。\n        appId: '123123', // 必填，公众号的唯一标识\n        timestamp: '123123123', // 必填，生成签名的时间戳\n        nonceStr: '123123', // 必填，生成签名的随机串\n        signature: '123123123', // 必填，签名，见附录1  \n        jsApiList: [\n                'hideOptionMenu'//hideOptionMenu  禁用\n        ]\n            \n    })\n    wx.ready(function() {\n        wx.hideOptionMenu();\n    })\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);