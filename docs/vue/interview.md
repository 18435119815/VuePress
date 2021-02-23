# 面试题

> 以下是我2020年在杭州面试时总结的面试题，可供参考

## VUE  
1.	history 和 hash 的区别
（hash通过hashChange事件来实现，history通过pushState() 和 replaceState() ）
2.	计算属性 和 watch 的区别
单页面应用 和 多页面应用的区别
3.	Vue-x都有哪些属性，及其作用,如何存储数据
(state,mutations,getters,actions,module)
dispatch：异步操作，写法： this.$store.dispatch(‘mutations方法名’,值)
commit：同步操作，写法：this.$store.commit(‘mutations方法名’,值)
4.	Vue的两大核心
(组件化开发,数据驱动）
5.	前端性能优化
(路由懒加载，组件按需引入，图片压缩转码，文件压缩，提前请求，功能封装)
6.	mvc和mvvm
（mvc是后端的一种开发模式,model中处理数据的增删改查，view用于展示页面，contorller用来实现复杂的逻辑处理。mvvm是前端的开发模式，每一个页面都可以看作是一个mvvm，vm是连接m和v的桥梁，因为vm提供了数据双向绑定）
7.	this.$nextTick
（因为vue的dom更新是异步的，这个方法的回调可以确保在前面的dom操作完成之后才调用）
8.	对vue响应式理解
9.	如何拓展一个Vue组件
10.	VUE删除一个数组元素或者对象属性，原因？
11.	事件总线eventBus的原理
12.	webpack打包步骤
（初始化项目npm init 打包webpack ）
13.	vue.config.js配置
（）
14.	scoped实现原理
（通过该属性可以实现组件间的样式独立，原理是postcss的转译，会给每一个dom动态添加一个唯一的属性，并在css选择器中选中）

15.	Uni-app环境变量
16.	Vue是如何渲染DOM的（Render函数）
通过vue的render函数，有一个参数为createElement,他本身也是个函数
当节点发生变化时，Vue 通过建立一个虚拟 DOM 来追踪自己要如何改变真实 DOM.
createElement会返回一个虚拟节点（虚拟DOM or Vnode），“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼
vue源码分析
17.	vue diff算法



## 浏览器原理
1.	从输入http到页面显示浏览器发生了啥
(输入的url经过DNS解析之后得到服务器IP地址，接着向服务器发起请求，经过TCP三次握手确认连接后，浏览器得到资源开始构建DOM数，并最终渲染出来)
（1.浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;
   2.解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;
   3.浏览器发出读取文件(URL 中域名后面部分对应的文件)的HTTP 请求，该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器;
    4.服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;
    5.释放 TCP连接;
    6.浏览器将该 html 文本并显示内容; ）
2.	浏览器缓存
（强缓存，协商缓存：共同点都是从浏览器读取资源，不同点强缓存不给服务器发请求，直接读；协商是发送，然后根据返回信息决定是否使用缓存）
3.	CDN
4.	HTTP 和HTTPS的区别
（是客户端和服务器请求和接受数据的一个标准，规定客户端和服务端的数据传输格式。
默认端口是80。
基于TCP/IP的应用层协议，无状态。
一个HTTP请求报文包括请求行，请求头，空的一行，请求体。
客户端向服务器发起一个请求报文，包含请求的方法，协议版本，路径，请求头以及数据。服务端返回一个状态作为响应，响应内容包括协议版本，成功错误代码，服务器信息，响应头以及数据）
5.	token被人恶意截取怎么办
a、在存储的时候把 token 进行对称加密存储，用时解开。
b、将请求 URL、时间戳、token 三者进行合并加盐签名，服务端校验有效性。
c、HTTPS 对 URL 进行判断。
6.	常用的的请求头都有哪些
```
multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）

application/json    ： JSON数据格式
```

7.	get和post区别
1. 	请求形式 2.	get获取数据，post提交修改  3.	get可以使用缓存,post不可以

8.	与缓存相关的请求头有哪些，我们一般都缓存哪些文件
### 什么是跨域，如何解决？
说到跨域就得先了解同源策略
>• 同源策略是浏览器的一个最核心也最基本的安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源  
>• 源（origin）就是协议、域名和端口号  
>• 即便两个不同的域名指向同一个IP地址，也非同源  

#### 概念  

<img src="/assets/img/crossDomain.jpg" width="500" height="auto" align="middle" />  

#### 利用jsonp解决跨域
HTML中有一些标签是可以跨域访问资源的,如link、img、src以及iframe等，jsonp就是利用了src的这一特性  
<img src="/assets/img/jsonp.jpg" width="500" height="auto" align="middle" />  

**缺点**：

- 需要服务的支持
- 只能发起GET请求

---

#### 利用CORS解决跨域
是后端人员在服务中设置允许跨域请求，前端人员不用做其他处理，如果需要携带cookie的话，则前后端都需要设置。是一种规范化的跨域请求解决方案，安全可靠。

**优势** 
- 在服务端进行控制是否允许跨域，可自定义规则
- 支持各种请求方式  

**缺点**
- 会产生额外的请求

---
#### proxy代理解决跨域
通过中间件来实现,浏览器之间有跨域限制，但服务器之间没有，所以中间件就是服务器  

vue  

**缺点**
- 只能在生产环境中使用

---


## JS
1.	节流和防抖以及使用场景
2.	箭头函数和普通函数的差别
(箭头函数是匿名函数，不能作为构造函数，单个表达式的时候可以省略大括号。箭头函数没有arguments属性，取而代之用rest参数...解决。箭头函数的 this 永远指向其上下文的  this ，任何方法都改变不了其指向，如 call() ,  bind() ,  apply() ,普通函数的this指向调用它的那个对象)
3.	var let const的区别
（let，const不存在变量提升）
4.	ES6数组新方法
（Array.find(),Array.findIndex()传入一个回调，返回以第一个匹配到的值或者下标
   Array.fill(value,start,end)）填充或者替换指定位置的元素
   Array.form ()将类数组对象转为真正的数组

5.	高阶函数
6.	图片上传
7.	map和forEach的区别
（map返回的是一个新的数组，forEach改变的是原数组。 相同点：都是数组方法，都是循环遍历，三个参数相同，this指向window）
8.	for in适用于遍历对象,for  of适用于遍历数组
9.	Promise.all（）Promise的几个状态（1、pending[待定]初始状态 2、fulfilled操作成功 3、rejected操作失败）
10.	对模块化的理解
（我们将一个复杂的程序依据一定的规则封装成几个块，并相互依赖组合。每个块只是向外部暴露一些接口）
11.	cookie，localStorage,sessionStorage
(cookie就是一小段文本信息)


12.	对象的继承有哪几种方式
13.	数组的扁平化处理
14.	树形结构的数据处理
15.	Promise和setTimeout的执行顺序
setTimeout在下一轮“事件循环”开始时执行，
Promise.then() 在本轮“事件循环”结束时执行。因此then 函数先输出，settimeout后输出。
参考

16.	那些常见操作会造成内存泄漏
1. setTimeout 的第一个参数使用字符串而非函数的话,会引发内存泄露
2. 全局变量
3. 闭包
4. dom清空或删除时，事件未清除导致的内存泄漏
5. 控制台日志
6. 循环


## CSS
1.	重绘和重排
（重绘不一定重排，但重排一定会重绘，css3动画，视频等大多数浏览器都会自动创建图层，如果像gif图这样的，可以添加一个动画属性来让浏览器自动创建图层）
2.	css实现两边固定 中间自适应
3.	css3圆角属性如何兼容ie低版本浏览器
4.	display:none和visibility：hidden有什么区别
(visibility占据空间，且子元素继承属性，可以单独显示)
5.	对盒模型的理解
6.	页面引入了多个css的情况下，如何处理才能减少请求
（新建一个css文件，利用@important 引入其余的所有css文件，主页面只引入我们新建的css即可）

样式旋转
放大  阴影
## 网络安全
1. 如何防止token被恶意获取
2. 状态码302是什么
3. xss攻击



## 还没咋搞懂得
1. 	移动端适配
2.  webpack和vue.config.js的配置
3.  重构项目的时候要考虑哪些方面
