# SSR

>第一次请求之后，后端会把首屏完整的dom结构返回给前端并激活，用户后面再去点击超链接的话，应用会按照spa应用的方式执行，即跟普通的项目一样，不会再发送请求了

>对于正常的vue项目来说，当我们打开控制台查看dom结构的时候，只会得到一个id为app的div，这样不利于seo优化。而服务端渲染则可以帮助我们很好的解决这个事情

## 预备知识

1.  服务端知识express
```
npm i express -S
npm i nodemon -g   //实时启动node服务
npm i serve-favicon -S  //处理对于网站icon的请求 

//以下是基础使用
const express = require('express')

// 获取express实例
const server = express()

// 编写路由处理不同请求
server.get('/',(req,res)=>{
    res.send('HEY Mr哎呦喂')
})

// 监听端口
server.listen(80,()=>{
    console.log('listen ready')
})
```

## 基础实现
将VUE实例成HTML并返回

```
安装vue服务渲染器(此处要注意渲染器版本要与VUE版本保持一致)
npm i vue-server-renderer -S

const path  = require('path')
const Vue = require('vue')
//创建服务
const server = require('express')()
//创建渲染器实例
const renderer = require('vue-server-renderer').createRenderer()
//处理favicon
const favicon = resquire('serve-favicon')
server.use(favicon(path.join(__dirname,'../../public','favicon.ico')))


server.get('*', (req, res) => {

  //创建vue实例
  const app = new Vue({
    data: {
      message: 'hey Mr哎呦喂'
    },
    template: `<div>{{ message }}</div>`
  })

  //使用渲染器渲染vue实例并返回给前端
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.send(html)
  })
})

server.listen(80)
```

## 开始
### 目录结构

我们除了main.js之外，还需要两个入口文件
entry-client.js # 客户端入口 用于静态内容激活
entry-server.js # 服务端入口 用于首屏内容渲染

因为我们使用的是服务端渲染 面对的是多个客户 每次请求过来都是一个新的客户  应该返回一个新的路由   防止相互影响  

同理main.js中的vue也应该是一个工厂函数，那么我们开始动手修改  

在router/index.js中
```
//先将Vue.use(VueRouter)后面的代码全部注释，并换成以下的

export function createRouter(){
  return new VueRouter({
    routes:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/admin/:id',
        name: 'admin',
        component: () => import( '../views/Admin.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import( '../views/Login.vue')
      },
      {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue')
      }
    ]
  })
}
```
