# 小知识

## 基础知识

1.  双向绑定&&单项绑定

单项绑定: 只能从data流向页面；
双向绑定: 双向流动；一般都应用于表单元素(input、select)

2.  数据代理

利用Object.defineProperty可以实现数据代理
```
let really = {say:'我是真实的'};
let agent = {call:'我是想要代理的'};

Object.defineProperty(agent, 'say', {
    get(){
      return really.say;
    },
    set(value){
      really.say = value;
    }
})
```

vue-data数据代理实现路径  

<img src="/assets/img/vue/vue2.jpg" width="750" height="auto" align="middle" />  

在浏览器调试工具中打开vue实例对象，会发现有data中的所有属性，还有个_data属性。当我们获取this.name时，其实获取的时this._data.name。它是通过Object.defineProperty的数据代理实现的。  
只有配置在data中的数据才会做数据代理，methods里的是不用的，否则vue实例就太臃肿了。
data中的任意一个数据发生变化，都会引起整个模版的重新解析。

[视频讲解](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=13)