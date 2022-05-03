(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{697:function(s,n,a){"use strict";a.r(n);var e=a(88),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目实践"}},[s._v("#")]),s._v(" 项目实践")]),s._v(" "),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[s._v("#")]),s._v(" axios")]),s._v(" "),a("h3",{attrs:{id:"全局axios封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局axios封装"}},[s._v("#")]),s._v(" 全局axios封装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import axios from 'axios';\n\n//配置一个新的axios：域名、请求头、超时时间(axios.create)\n//有不同的域名的话   可以创建多个axios\nconst service = axios.create({\n  baseURL: process.env.VUE_APP_BASE_API, // 前置域名配置 url = base url + request url\n  withCredentials: true, // 是否将cookie信息一起传给后端\n  headers: {\n    'Content-Type': 'text/plain;charset=UTF-8'\n  },\n  timeout: 25000 // 超时时间\n});\n\n// 添加请求拦截器\naxios.interceptors.request.use(config=>{\n\t// config 请求配置(包含了baseURL、headers、method、params、timeout、url等信息，均可以进行对应处理)\n    //携带token\n    if(let token = window.sessionStorage.getItem('token')){\n        config.headers.Authorization = token\n    }\n\t// 可用于发送网络请求时，在界面显示loading动画\n\t// 某些请求（比如登录（token））必须携带一些特殊的信息\n    if (config.method === 'post') {\n      config.data = config.params;\n      config.params = {};\n    }\n\n    return config\n},err=>{\n\t// 请求失败拦截\n    return Promise.reject(err)\n})  \n\n// 添加响应拦截器\naxios.interceptors.response.use(response=>{\n\t// res 响应结果\n\t// 根据返回回来的状态码进行对应的处理\n    const res = response.data;\n    if (res.code !== 200) {\n\n    }else {\n      return res.data;\n    }\n},err=>{\n\t// 响应拦失败拦截\n    return Promise.reject(err)\n}) \n\nexport default service;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])]),a("h3",{attrs:{id:"接口统一管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口统一管理"}},[s._v("#")]),s._v(" 接口统一管理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import axios from '@/utils/request';\n\nexport function registerCode(data) {\n    return axios({\n        url: `/registerSendMsg`,\n        method: 'post',\n        data\n    });\n}\n\nexport function registerCode(data) {\n    return axios({\n        url: `/registerSendMsg`,\n        method: 'get',\n        params:data\n    });\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"vue-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-config-js"}},[s._v("#")]),s._v(" vue.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//安装依赖\nconst CompressionWebpackPlugin = require(\"compression-webpack-plugin\")\n\n//配置对象\nmodule.exports = {\n    publicPath:'/',             //项目前置路径,用法和 webpack 本身的 output.publicPath 一致\n    lintOnSave:false,           //每次保存代码是否要通过lint检测  boolean | 'warning' | 'default' | 'error'\n\n    \x3c!-- 打包相关 --\x3e\n    outputDir:'dist',           //打包文件输出目录,用法和 webpack 的 output.path一致\n    assetsDir:'static',         //打包文件中放置静态资源的目录css、img、font等\n    indexPath:'index.html',     //制定生成的index.html生成路径\n    filenameHashing:true,       //文件名hash，更好的控制缓存，改为false即关闭\n\n\n    devServer:{\n        port:8088,              //默认端口\n        open: true,\n        overlay: {\n            warnings: false,\n            errors: true\n        },\n        proxy: {                //接口代理服务\n            [process.env.VUE_APP_BASE_API]: {\n                target: `代理地址`,\n                changeOrigin: true,\n                pathRewrite: {\n                    ['^' + process.env.VUE_APP_BASE_API]: '需要重写的部分'\n                }\n            }\n        },\n    },\n\n    \x3c!-- webpack相关 --\x3e\n    //因为vuecli3中已经不能直接修改webpack配置，所以需要通过这个属性\n    configureWebpack:config=>{\n        let plugins = [\n            new CompressionWebpackPlugin({\n                algorithm:'gzip',       //压缩方式\n                test:/\\.js$|\\.css$/,    //匹配压缩文件\n                threshold:10240         //大于10k的压缩\n            })\n        ]\n        if(process.env.NODE_ENV === 'production'){\n            config.mode = 'production';\n            config.plugins = [...config.plugins,...plugins]\n        }else{\n            config.mode = 'development'\n        }\n        //打包的时候将第三方包排除出去，减少体积，\n        Obiect.assign(config,{\n            externals:{\n                vue:'Vue',\n                axios:'axios'\n            }\n        })\n    }\n    chainWebpack：{             //链式操作，可以更细粒度控制webpack内部配置。\n        name: '项目名称',\n        resolve: {\n            alias: {\n                '@': resolve('src')\n            }\n        }\n    },           \n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h3",{attrs:{id:"proxy代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy代理"}},[s._v("#")]),s._v(" proxy代理")]),s._v(" "),a("ol",[a("li",[s._v("新建.env.development和.env.production文件夹")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ENV = 'development'\nVUE_APP_BASE_API = '/dev-api'\nVUE_CLI_BABEL_TRANSPILE_MODULES = true\n\n\nENV = 'production'\nVUE_APP_BASE_API = '/prod-api'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("vue.config.js中")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    devServer:{\n        port:8088,              //默认端口\n        proxy: {                //接口代理服务\n            [process.env.VUE_APP_BASE_API]: {\n                target: `代理地址`,\n                changeOrigin: true,\n                pathRewrite: {\n                    ['^' + process.env.VUE_APP_BASE_API]: '需要重写的部分'\n                }\n            }\n        },\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[s._v("#")]),s._v(" vue-router")]),s._v(" "),a("h3",{attrs:{id:"路由拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截"}},[s._v("#")]),s._v(" 路由拦截")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("router.beforeEach((to, from, next) => {\n    //给每一页更换标题\n    if (to.meta.title) {\n        document.title = to.meta.title\n    }\n    //判断要去的页面是否需要登录\n    if (to.matched.some(res => res.meta.isLogin)) { \n        从本地存储中查找token，如果有，则跳转\n        没有的话，先尝试获取用户信息，获取到继续跳转\n        获取不到，就去登录页面\n    } else {\n        //不需要的话直接跳转\n        next()\n    }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"路由权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由权限"}},[s._v("#")]),s._v(" 路由权限")]),s._v(" "),a("ol",[a("li",[s._v("后端保存单个路由对象(非树状结构)，获取用户id之后，在表中筛选出合适的路由列表，返回前端，由前端拼成树结构并展示渲染。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("将后端传来的数据拼接成树状的过程")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("function tree(data) {\n    //首先将一级菜单跟其他级别的菜单分开\n    let parents = data.filter(a => a.pid === 0),\n        children = data.filter(a => a.pid != 0);\n\n\n    madeTree(parents,children);\n\n    //因为确定二级菜单之后还要确定三级菜单，需要用到递归，所以我们写个递归函数\n    function madeTree(parents,children) {\n        parents.map(p => {\n            children.map((c,i)=> {\n                //先找到二级菜单\n                if (c.pid === p.id) {                       \n                   // 1.  将二级菜单放入一级菜单的children\n                   if(p.children){\n                       p.children.push(c)\n                   }else{\n                       p.children = [c]\n                   }\n                   //2.   将该二级菜单与其他的children比较，找出三级菜单\n                   //复制一份children，并将当前二级菜单项剔除\n                   let _children = JSON.parse(JSON.stringify(children));\n                   _children.splice(i,1);\n                   //递归\n                   madeTree([c],_children)\n                }\n            })\n        })\n    }\n\n    return parents\n}\n")])])])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("接着再通过映射给路由数据中添加component属性")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("function realRoutes(routes){\n    let newRoutes = routes.map(r=>{\n        let route = {\n            name:r.name,\n            path:r.path,\n            component:() => import(`@/views/${r.name}`)\n        }\n\n        if(r.children){\n            route.children = realRoutes(r.children)\n        }\n\n        return route\n    })\n\n    return newRoutes\n}\n")])])])]),s._v(" "),a("h2",{attrs:{id:"vue-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-x"}},[s._v("#")]),s._v(" Vue-x")]),s._v(" "),a("ol",[a("li",[s._v("state、moutations、actions分别建立文件再单个引入\n"),a("img",{attrs:{src:"/assets/img/vue/vuex1.jpg",width:"500",height:"auto",align:"middle"}})])]),s._v(" "),a("h2",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[s._v("#")]),s._v(" keep-alive")]),s._v(" "),a("h2",{attrs:{id:"filters过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters过滤"}},[s._v("#")]),s._v(" filters过滤")]),s._v(" "),a("h3",{attrs:{id:"批量注册过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量注册过滤器"}},[s._v("#")]),s._v(" 批量注册过滤器")]),s._v(" "),a("ol",[a("li",[s._v("建立一个存放过滤函数的filters.js文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export function sex(value){\n    switch(value){\n        case '':\n            break;\n        case '':\n            break;\n    }\n}\n\nexport function name(value){\n    switch(value){\n        case '':\n            break;\n        case '':\n            break;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("建立一个批量注册的index.js文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import * as filters from './filters.js'\n\nObject.keys(filters).forEach(v=>{\n    Vue.filter(v,filters[v])\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("在main.js中引入\n"),a("code",[s._v("import './filters/index'")])])]),s._v(" "),a("h2",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[s._v("#")]),s._v(" 组件")]),s._v(" "),a("p",[s._v("一个页面由多个自定义组件组成的时候，我们除了一个一个引入，还有一种更便于理解的方法：")]),s._v(" "),a("ol",[a("li",[s._v("在放置自定义组件的components组件中定义一个js文件")]),s._v(" "),a("li",[s._v("将各个组件引入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export {default as Header} from './header'\nexport {default as Siderbar} from './siderbar'\nexport {default as Main} from './main'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("在页面中引入\n"),a("code",[s._v("import {Header、Siderbar、Main}")]),s._v("from './components'")])]),s._v(" "),a("h2",{attrs:{id:"常用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用功能"}},[s._v("#")]),s._v(" 常用功能")]),s._v(" "),a("ol",[a("li",[s._v("下载\n如果是无权限文件，后端直接返回一个下载地址，前端打开即可。"),a("br"),s._v("\n如果是需要权限的，前端先发起请求，向后端请求一个url。再拿着url以及token向后端请求流文件，拿到之后进行解析即可。")])]),s._v(" "),a("h2",{attrs:{id:"项目优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[s._v("#")]),s._v(" 项目优化")]),s._v(" "),a("ol",[a("li",[s._v("在vue.config.js中开启文件压缩，对于JS\\CSS文件进行压缩处理")]),s._v(" "),a("li",[s._v("对于第三方包进行拆分，比如vue、elementui、axios，打包的时候排除在外。然后在index.html中通过cdn的方式引入")]),s._v(" "),a("li",[s._v("没有cdn的话，可以把第三方包下载下来单独引入，这样第一次加载就会被缓存，后面打开的速度就大大提升了")])]),s._v(" "),a("h2",{attrs:{id:"小知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小知识"}},[s._v("#")]),s._v(" 小知识")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看webpack默认配置  "),a("code",[s._v("vue inspect")]),s._v("  只查看规则配置"),a("code",[s._v("vue inspect --rules")]),s._v(" 查看某一项具体规则"),a("code",[s._v("vue inspect --rule 名称(例如svg)")]),a("br"),s._v(" "),a("img",{attrs:{src:"/assets/img/vueConfig1.jpg",width:"350",height:"200",align:"middle"}}),s._v(" "),a("img",{attrs:{src:"/assets/img/vueConfig2.jpg",width:"350",height:"200",align:"middle"}})])]),s._v(" "),a("li",[a("p",[s._v("lodash插值语法")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//在根目录的index.html中使用configureWebpack的name属性\n<title><%= webpackConfig.name %></title>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("chainWebpack范例:svg icon引入")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载图标，存入src/icons/svg中")])]),s._v(" "),a("li",[a("p",[s._v("安装依赖：svg-sprite-loader"),a("br"),s._v(" "),a("code",[s._v("npm i svg-sprite-loader -D")])])]),s._v(" "),a("li",[a("p",[s._v("修改规则和新增规则")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//vue.config.js中\n// resolve定义一个绝对路径获取函数 \nconst path = require('path')\nfunction resolve(dir) {\n    return path.join(__dirname, dir)\n}\n//... \nchainWebpack(config) {\n    // 配置svg规则排除icons目录中svg文件处理 \n    // 目标给svg规则增加一个排除选项exclude: ['path/to/icon']\n    config.module.rule(\"svg\").exclude.add(resolve(\"src/icons\"))\n    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg \n    config.module.rule('icons')\n    .test(/\\.svg$/)\n    .include.add(resolve('./src/icons')).end()\n    .use('svg-sprite-loader')\n    .loader('svg-sprite-loader')\n    .options({ symbolId: 'icon-[name]' })\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("组件中使用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <svg>\n    <use xlink:href=\"#icon-wx\" />\n  </svg>\n</template> \n<script> \n  import '@/icons/svg/wx.svg' \n  export default {}\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("由于项目中的icon可能过多，我们不能每一个都单独引入，因此需要工程化配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//新建src/icons/index.js\n//webpack创建一个以svg目录为上下文的require函数\nconst req = require.context('./svg', false, /\\.svg$/) \n//keys会获取所有的svg文件\nreq.keys().map(req);\n//在main.js中引入该文件 @import '@/icons' \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);