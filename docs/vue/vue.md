# vue2

## 一些小知识点

1.  快速启动单个vue文件，不需要创建项目
```
vue serve
```
2.  想要往路由里添加的各种信息可以写在路由对象的meta属性上，啥都可以写
3.  图片上传得到的对象想要传给后端的话，需要使用new FormData().append(name:value)包裹再发送
4.  只有当实例被创建时已经存在于data中的数据才是响应式的，后面新增的属性不是响应式的，无法被检测到，需要使用vue.$set
5.  运行打包后的文件
```
npm i serve -g 

运行命令serve dist
```

## 过滤器filters
>filters是一个对象，里面可以定义很多个过滤方法，这个方法可以接收两个参数，需要格式化的值和一个参数  

### 冷门知识
1.  类名中的变量也可以使用过滤器
2.  过滤器可以连续使用

## 监听器watch
```
 data:{
     a:1,
     b:{
         c:1
     }
 },
 watch:{
     a(val, oldVal){//普通的watch监听
         console.log("a: "+val, oldVal);
     },
     b:{//深度监听，可监听到对象、数组的变化
         handler(val, oldVal){
             console.log("b.c: "+val.c, oldVal.c);
         },
         deep:true //true 深度监听
     }
 }
```

## 插槽slot
>理解：当我们在使用一个组件的时候，想要在组件内部添加一些自定义的内容，就会用到插槽  

 1. 匿名插槽  
    即默认插槽。在父组件对子组件的引用中插入自己的自定义内容，有就显示插入的，没有就显示默认的
    ```
    //子组件

    <div>
      <slot>
        可以写默认插槽内容
      </slot>
    </div>

    //父组件
    <div>
      <children>
        我是自定义插槽内容
      </children>
    </div>
    ```
 2. 具名插槽  
 可以给插槽命名。定义的时候使用name='head'，使用的时候是slot='head'或者v-slot:head或者#head。  
    ```
    //子组件

    <div>
      <slot name='head'></slot>
      <slot></slot>
      <slot name='foot'></slot>
    </div>

    //父组件
    <div>
      <children>
        我是默认内容
        <span slot='foot'>我是底部</span>
        <div slot='head'>我是头部</div>
      </children>
    </div>
    ```
 3. 作用域插槽  
    ```
    //子组件

    <div>
      <slot name='head' :name1='children1'></slot>
      <slot :name2='children2'></slot>
    </div>

    ...
    data(){
      return{
        children1:'',
        children2:''
      }
    }
    //父组件
    <div>
      <children>
        我是默认内容
        <span v-slot:foot='user1'>
          {{user1.name1}}
        </span>
        <div v-slot:default='user2'>
          {{user2.name2}}
        </div>
      </children>
    </div>
    ```
    首先在子组件的slot上动态绑定一个值( :key='value')  
    然后在父组件通过v-slot : name = ‘values ’的方式将这个值赋值给 values  
    最后通过 values.key 的方式获取数据  
 4. 编译作用域  
    直接传入子组件内的数据是不可以的。因为：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。  
 


### 基础使用
```
  <p>{{ count | filter1 }}</p>    //template中的使用 中间加一个管道符

  filters: {                      //script中的使用
    filter1: function(value) {
      return `$${value}美元`;
    }
  },
```
有的時候后端有一些数据会以数值的形式返回给我们  
比方说状态代付款，代发货， 待收货，待评价，无状态，而后端返回给我们的是1,2,3,4,5这样的数值  
在方法中挨个转化的话会比较麻烦  
可以用filters和switch统一格式化处理  

```
    //template
    <table border="1">
      <tr v-for="(item,index) in array" :key="index">
        <th>{{item.name}}</th>
        <th :class="item.status | filter2 | filter3">{{item.status | filter2}}</th>
      </tr>
    </table>

    //filters
    filter2: function (value) {
      switch(value){
        case 1:return `代付款`;
        case 2:return `代发货`;
        case 3:return `待收货`;
        case 4:return `待评价`;
        default:return `无状态`;
      }
    },  
    filter3: function (value) {
      switch (value) {
        case `代付款`:
          return 'red';
        case `代发货`:
          return 'yellow';
        case `待收货`:
          return 'blue';
        case `待评价`:
          return 'green';
        default:
          return 'white';
      }
    },

    //data
    array: [
        { status: 1, name: "衣服" },
        { status: 2, name: "裤子" },
        { status: 3, name: "内裤" },
        { status: 4, name: "秋衣" },
        { status: 5, name: "袜子" },
    ],
```


## API
### 自定义指令
```
//示例  input框自动获取焦点
vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})

<input v-focus>
```






## 异步组件
>有的时候一些组件过大，我们不希望它在一开始就加载进来，可以选择使用异步组件的方式引入它，这样该组件就会在我们使用的时候才被加载进来

```
new Vue({
  // ...
  components: {
    'list': () => import('./list.vue')
  }
})
```


## 修饰符

## mixins混入
### 混入的执行顺序
全局混入>组件中的混入>组建自身的方法
### 冲突
如果混入的方法与组件内部的方法冲突，则组件内的生效

## 事件总线eventBus
[原理及注意事项](https://www.jianshu.com/p/6bbf9c3364a3)
```
//全局注册
Vue.prototype.$bus = new Vue()
```

## 环境变量
在vue中输出 process.env.NODE_ENV（脚手架内置变量），可以看到它默认是development

1.  创建.env.production  和  .env.development文件并添加代码
`VUE_APP_BASEURL = '***.***.*.*:8080'`
我们在使用的时候，就需要这么写(一般用在proxy代理)
`process.env.VUE_APP_BASEURL`


### 处理加载状态
>可以更加细致的处理异步组件的每一个时期的状态

```
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./list.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})



new Vue({
  // ...
  components: {
    AsyncComponent
  }
})

```


## Render函数
```
render(h){
  return h('button',{
    class:{
      '类名'：判断条件,
      normal:true
    },
    //dom属性
    domProps:{
      innerText : this.text||'默认按钮'
    },

  })
}
```
h相当于JS中的creatElement


## 批量注册组件
```
const requireComponent = require.context('./',false,/\.vue$/)

requireComponent.keys().forEach(fileName=>{
  
})
```