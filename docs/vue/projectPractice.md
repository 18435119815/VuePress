# 项目实践

## axios
###  全局axios封装
```
import axios from 'axios';

//配置一个新的axios：域名、请求头、超时时间(axios.create)
//有不同的域名的话   可以创建多个axios
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 前置域名配置 url = base url + request url
  withCredentials: true, // 是否将cookie信息一起传给后端
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  },
  timeout: 25000 // 超时时间
});

// 添加请求拦截器
axios.interceptors.request.use(config=>{
	// config 请求配置(包含了baseURL、headers、method、params、timeout、url等信息，均可以进行对应处理)
    //携带token
    if(let token = window.sessionStorage.getItem('token')){
        config.headers.Authorization = token
    }
	// 可用于发送网络请求时，在界面显示loading动画
	// 某些请求（比如登录（token））必须携带一些特殊的信息
    if (config.method === 'post') {
      config.data = config.params;
      config.params = {};
    }

    return config
},err=>{
	// 请求失败拦截
    return Promise.reject(err)
})  

// 添加响应拦截器
axios.interceptors.response.use(response=>{
	// res 响应结果
	// 根据返回回来的状态码进行对应的处理
    const res = response.data;
    if (res.code !== 200) {

    }else {
      return res.data;
    }
},err=>{
	// 响应拦失败拦截
    return Promise.reject(err)
}) 

export default service;
```

### 接口统一管理
```
import axios from '@/utils/request';

export function registerCode(data) {
    return axios({
        url: `/registerSendMsg`,
        method: 'post',
        data
    });
}

export function registerCode(data) {
    return axios({
        url: `/registerSendMsg`,
        method: 'get',
        params:data
    });
}
```


## vue.config.js
```
//安装依赖
const CompressionWebpackPlugin = require("compression-webpack-plugin")

//配置对象
module.exports = {
    publicPath:'/',             //项目前置路径,用法和 webpack 本身的 output.publicPath 一致
    lintOnSave:false,           //每次保存代码是否要通过lint检测  boolean | 'warning' | 'default' | 'error'

    <!-- 打包相关 -->
    outputDir:'dist',           //打包文件输出目录,用法和 webpack 的 output.path一致
    assetsDir:'static',         //打包文件中放置静态资源的目录css、img、font等
    indexPath:'index.html',     //制定生成的index.html生成路径
    filenameHashing:true,       //文件名hash，更好的控制缓存，改为false即关闭


    devServer:{
        port:8088,              //默认端口
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {                //接口代理服务
            [process.env.VUE_APP_BASE_API]: {
                target: `代理地址`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: '需要重写的部分'
                }
            }
        },
    },

    <!-- webpack相关 -->
    //因为vuecli3中已经不能直接修改webpack配置，所以需要通过这个属性
    configureWebpack:config=>{
        let plugins = [
            new CompressionWebpackPlugin({
                algorithm:'gzip',       //压缩方式
                test:/\.js$|\.css$/,    //匹配压缩文件
                threshold:10240         //大于10k的压缩
            })
        ]
        if(process.env.NODE_ENV === 'production'){
            config.mode = 'production';
            config.plugins = [...config.plugins,...plugins]
        }else{
            config.mode = 'development'
        }
        //打包的时候将第三方包排除出去，减少体积，
        Obiect.assign(config,{
            externals:{
                vue:'Vue',
                axios:'axios'
            }
        })
    }
    chainWebpack：{             //链式操作，可以更细粒度控制webpack内部配置。
        name: '项目名称',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },           
}

```
### proxy代理
1.  新建.env.development和.env.production文件夹
```
ENV = 'development'
VUE_APP_BASE_API = '/dev-api'
VUE_CLI_BABEL_TRANSPILE_MODULES = true


ENV = 'production'
VUE_APP_BASE_API = '/prod-api'
```
2.  vue.config.js中  
```
    devServer:{
        port:8088,              //默认端口
        proxy: {                //接口代理服务
            [process.env.VUE_APP_BASE_API]: {
                target: `代理地址`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: '需要重写的部分'
                }
            }
        },
    },
```


## vue-router

### 路由拦截
```
router.beforeEach((to, from, next) => {
    //给每一页更换标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    //判断要去的页面是否需要登录
    if (to.matched.some(res => res.meta.isLogin)) { 
        从本地存储中查找token，如果有，则跳转
        没有的话，先尝试获取用户信息，获取到继续跳转
        获取不到，就去登录页面
    } else {
        //不需要的话直接跳转
        next()
    }
});
```

### 路由权限
1.  后端保存单个路由对象(非树状结构)，获取用户id之后，在表中筛选出合适的路由列表，返回前端，由前端拼成树结构并展示渲染。

::: details 将后端传来的数据拼接成树状的过程
    function tree(data) {
        //首先将一级菜单跟其他级别的菜单分开
        let parents = data.filter(a => a.pid === 0),
            children = data.filter(a => a.pid != 0);


        madeTree(parents,children);

        //因为确定二级菜单之后还要确定三级菜单，需要用到递归，所以我们写个递归函数
        function madeTree(parents,children) {
            parents.map(p => {
                children.map((c,i)=> {
                    //先找到二级菜单
                    if (c.pid === p.id) {                       
                       // 1.  将二级菜单放入一级菜单的children
                       if(p.children){
                           p.children.push(c)
                       }else{
                           p.children = [c]
                       }
                       //2.   将该二级菜单与其他的children比较，找出三级菜单
                       //复制一份children，并将当前二级菜单项剔除
                       let _children = JSON.parse(JSON.stringify(children));
                       _children.splice(i,1);
                       //递归
                       madeTree([c],_children)
                    }
                })
            })
        }

        return parents
    }
:::
  
  
::: details 接着再通过映射给路由数据中添加component属性
    
    function realRoutes(routes){
        let newRoutes = routes.map(r=>{
            let route = {
                name:r.name,
                path:r.path,
                component:() => import(`@/views/${r.name}`)
            }

            if(r.children){
                route.children = realRoutes(r.children)
            }

            return route
        })

        return newRoutes
    }
:::  

## Vue-x
1.  state、moutations、actions分别建立文件再单个引入
<img src="/assets/img/vue/vuex1.jpg" width="500" height="auto" align="middle" />


## keep-alive


## filters过滤
### 批量注册过滤器
1.  建立一个存放过滤函数的filters.js文件
```
export function sex(value){
    switch(value){
        case '':
            break;
        case '':
            break;
    }
}

export function name(value){
    switch(value){
        case '':
            break;
        case '':
            break;
    }
}
```
2.  建立一个批量注册的index.js文件
```
import * as filters from './filters.js'

Object.keys(filters).forEach(v=>{
    Vue.filter(v,filters[v])
})
```

3.  在main.js中引入
`import './filters/index'`

## 组件
一个页面由多个自定义组件组成的时候，我们除了一个一个引入，还有一种更便于理解的方法：  
1.  在放置自定义组件的components组件中定义一个js文件
2.  将各个组件引入
```
export {default as Header} from './header'
export {default as Siderbar} from './siderbar'
export {default as Main} from './main'
```
3.  在页面中引入
`import {Header、Siderbar、Main}`from './components'


## 常用功能
1.  下载
如果是无权限文件，后端直接返回一个下载地址，前端打开即可。  
如果是需要权限的，前端先发起请求，向后端请求一个url。再拿着url以及token向后端请求流文件，拿到之后进行解析即可。  


## 项目优化
1.  在vue.config.js中开启文件压缩，对于JS\CSS文件进行压缩处理
2.  对于第三方包进行拆分，比如vue、elementui、axios，打包的时候排除在外。然后在index.html中通过cdn的方式引入
3.  没有cdn的话，可以把第三方包下载下来单独引入，这样第一次加载就会被缓存，后面打开的速度就大大提升了   

## 小知识
1. 查看webpack默认配置  `vue inspect`  只查看规则配置`vue inspect --rules` 查看某一项具体规则`vue inspect --rule 名称(例如svg)`  
<img src="/assets/img/vueConfig1.jpg" width="350" height="200" align="middle" />
<img src="/assets/img/vueConfig2.jpg" width="350" height="200" align="middle" /> 

2.  lodash插值语法
```
//在根目录的index.html中使用configureWebpack的name属性
<title><%= webpackConfig.name %></title>
```
3.  chainWebpack范例:svg icon引入  
- 下载图标，存入src/icons/svg中
- 安装依赖：svg-sprite-loader  
`npm i svg-sprite-loader -D`

- 修改规则和新增规则 

```
//vue.config.js中
// resolve定义一个绝对路径获取函数 
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
//... 
chainWebpack(config) {
    // 配置svg规则排除icons目录中svg文件处理 
    // 目标给svg规则增加一个排除选项exclude: ['path/to/icon']
    config.module.rule("svg").exclude.add(resolve("src/icons"))
    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg 
    config.module.rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('./src/icons')).end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({ symbolId: 'icon-[name]' })
}
```
- 组件中使用
```
<template>
  <svg>
    <use xlink:href="#icon-wx" />
  </svg>
</template> 
<script> 
  import '@/icons/svg/wx.svg' 
  export default {}
</script>
```
- 由于项目中的icon可能过多，我们不能每一个都单独引入，因此需要工程化配置
```
//新建src/icons/index.js
//webpack创建一个以svg目录为上下文的require函数
const req = require.context('./svg', false, /\.svg$/) 
//keys会获取所有的svg文件
req.keys().map(req);
//在main.js中引入该文件 @import '@/icons' 
```