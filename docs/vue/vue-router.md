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
