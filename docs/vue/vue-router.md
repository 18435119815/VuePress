# vue路由

## 前端路由和后端路由的区别

- 后端路由(mvc模式)  
    - 输入url->向服务器发送请求->解析对应的路径>达到对应的页面->返回给前端
    - 在服务端进行  每次跳转页面都需要向服务器请求
- 前端路由(mvvm模式)  
    - 输入url->JS解析地址->找到对应地址的页面->执行生成页面的JS->渲染完成
    - 在浏览器进行 只在第一次加载页面时向服务器发送请求（除了懒加载和服务端渲染的情况下）

## hash和history模式的区别

<img src="/assets/img/vrouter1.jpg" width="500" height="auto" align="middle" />

## 小知识

### $route.matched
一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。

### $route.fullPath
路由是：/path/:type真正路径是：/path/list  
path匹配路径: /path/list  
fullPath匹配路由: /path/:type  