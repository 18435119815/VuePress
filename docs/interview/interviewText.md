# 理论面试题

[前端面试题汇总](https://vue3js.cn/interview/)

## VUE  

[【Vue面试专题】金三银四必备！56道经典Vue面试题详解！](https://www.bilibili.com/video/BV1CF41137St)

### 0.   通用格式（复制用）
::: details 参考
   [参考链接](https://cloud.tencent.com/developer/article/1876067)  
   >   

   ```
     

   ```
:::

### 1.	history 和 hash 的区别
>为了构建单页面页面，需要引入前端路由，而前端路由的核心，就是改变URL不会向服务端发起请求
::: details 参考
hash模式下的地址栏里的URL夹杂着‘#’号 ，而history模式下没有。vue默认使用hash  

<font color=#0099ff style='fontSize:25px' face="正楷">hash</font>  
hash通过onhashchange事件去监听location.hash的改变;  
**特点：**
1. hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
2. 支持低版本浏览器和IE浏览器

<font color=#0099ff style='fontSize:25px' face="正楷">history</font>  
history通过H5新增的pushState() 和 replaceState()来实现。  
1. pushState()方法可以改变URL地址且不会发送请求，replaceState()方法可以读取历史记录栈，还可以对浏览器记录进行修改。  
2. pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
3. pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
4. pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
5. pushState() 可额外设置 title 属性供后续使用。

**问题：**  
history模式的问题
不怕前进，不怕后退，就怕刷新（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的。如果服务器中没有相应的响应或者资源，则会刷新出来404页面。  
所以需要服务端作处理，如果找不到对应的页面也返回index.html，前端路由则根据路径的切换去做一个相应的处理
:::

### 2.	计算属性 和 watch 的区别
::: details 参考  
既能用computed 实现又可以用 watch 监听来实现的功能，推荐用 computed，重点在于 computed 的缓存功能  
computed只能执行同步任务，watch可以执行异步任务，是因为计算属性必须要接受return出来的结果，但是异步任务无法把结果return给最外层。因此，计算属性可以完成的，watch一定可以完成，但是watch可以完成的，计算属性不一定可以

<font color=#0099ff style='fontSize:25px' face="正楷">计算属性computed</font>  

1. computed计算属性适用于当某个数据需要依赖好几个数据进行变动的时候使用。
2. 当计算属性依赖的数据没有发生变化的时候，我们调用n次，只会执行一次，其他时候用的都是缓存
3. 计算属性也有自己的get和set属性，get用来获取值，set是修改计算属性时可以执行一些其他操作

<font color=#0099ff style='fontSize:25px' face="正楷">watch监听</font>  
watch是当我们希望在某个值发生变化的时候，执行一些复杂的操作或者异步操作时使用。  
:::



### 3.	Vue-x都有哪些属性，及其作用,如何存储数据
::: details 详情
5个属性，都是对象的形式

1. state 存储状态值，以键值对的形式
```
state：{
   name:'',
   age:''
}

//增删state中的成员
Vue.set(state,'name','aiyouwei')
Vue.delete(state,'name')

```
2. getters 相当于计算属性，对状态值进行加工。第一个参数state，第二个参数getters，可以拿其他getters的值来用
```
getters:{
   people(state,getters){
      return state.name+state.age
   }
}
```
3. mutations 相当于方法，用来修改state中的属性。参数state,payload。
```
mutations:{
   edit(state,payload){
      if(state.name == 'aiyouwei'){
         return payload.height
      }
   }
}

触发：this.$store.commit('edit',{height:180})  
或者：this.$store.commit({type:'edit'},payload:{height:180})

```
4. actions 执行异步操作的方法。但凡有涉及到异步的操作，都放到actions中，再去触发mutations方法修改state。第一个参数是上下文this对象，包含了store的五个属性，第二个参数是挂载参数值。
   不建议在actions中直接修改state的值，是为了保证数据的可追踪性。
```
actions:{
   aEdit(context,payload){
        setTimeout(()=>{
            context.commit('edit',payload)
        },2000)
    }
}

触发：this.$store.dispatch('aEdit',{age:18})  
```
5. modules 模块化管理。项目比较大，全局数据很多的时候使用。
:::





### 4.	Vue的两大核心

::: details 详情
<font color=#0099ff style='fontSize:25px' face="正楷">组件化开发</font>  

每个组件都有自己的模版，初始数据，方法等等，阅读性和可复用性大大提升

<font color=#0099ff style='fontSize:25px' face="正楷">数据驱动</font>  

就是数据的双向绑定，由数据变化来驱动视图变化

:::

### 32.	组件传值||组件通信
::: details 参考  
1. 父子组件 

   子向父:  
   this.$emit
   this.$parent   
   父向子:  
   props   
   this.$children  
   this.$refs 

2. 兄弟组件  

   通过父组件来传值  
   vuex  
   eventBus  

3. 跨辈组件
   provide和inject  
   $root根实例  
   $attrs和$listerners  
   $attrs包含了父组件在当前组件上绑定的自定义属性(除了props里面使用的属性)  
   $listerners包含了当前组件上在父组件上监听的自定义事件(除了有.native修饰符的事件)  
   组件编译之后会把非 props 属性当成原始属性对待，从而添加到DOM元素（HTML标签上。如果想去掉HTML标签中 name 的属性，以至于该属性不暴露出来，我们可以借助 inheritAttrs:false 属性来完成。  
   通过子组件向下传递，两个属性均写在子组件对孙子组件的引用上。  
   [理解](https://www.cnblogs.com/lsboom/p/11365293.html)  
   [Vue组件数据通讯新姿势：$attrs 和 $listeners](https://www.codercto.com/a/62224.htm)
:::

### 33.	路由传值
::: details 参考  
```
1. this.$router.push('/detail?name="aiyouwei"') 
2. this.$router.push({
      path: '/detail',
      query:{
         name: "aiyouwei"
      }
   })   
   query传值参数会出现在url中，类似于get请求  
   this.$route.query.name  
3. this.$router.push({
      name: 'detail',
      params:{
         name: "aiyouwei"
      }
   })  
   params传值参数不会出现在url中，类似于post请求  
   this.$route.params.name(动态传值也用这个方法)  
```
:::

### 5.	前端性能优化
(路由、图片懒加载，组件按需引入，图片压缩转码，文件压缩，提前请求，功能封装，精简代码删除注释)  
1. 放在head标签中的JS和CSS文件会堵塞渲染，所以要将JS文件放在底部，CSS文件放在头部是因为如果先加载了HTML，没有样式，那么页面会很丑，用户体验就不好了。JS也可以放在头部，只要给script标签加上defer就可以了。    
2. 使用字体图标代替图片。    
3. 减少http请求。一个请求包含了DNS查找、tcp握手、发出请求、服务器接受并响应处理等，多一个请求就多了这些步骤，很消耗性能。  
4. 静态资源使用CDN。  
5. 减少重绘重排。操作DOM时，可以先将DOM暂时脱离文档流，操作完成再放回来。 
6. 图片懒加载：[参考](https://blog.csdn.net/w1418899532/article/details/90515969)  
   1. 先给图片的src属性一个很小的默认等待图，再将真实图片地址放在自定义属性里。
   2. 判断【图片距离浏览器顶部】与【浏览器视口高度+浏览器滚动区域高度之和】的差值。为负说明图片出现在可视区域了，需要加载。
   3. 获取并赋值。



### 6.	mvc和mvvm
（mvc是后端的一种开发模式,model中处理数据的增删改查，view用于展示页面，contorller用来实现复杂的逻辑处理。mvvm是前端的开发模式，每一个页面都可以看作是一个mvvm，vm是连接m和v的桥梁，因为vm提供了数据双向绑定）
::: details 详情
<font color=#0099ff style='fontSize:25px' face="正楷">mvc</font>  
model->模型，对数据库进行操作  
controller->控制器，链接model和view，处理逻辑，即JS  
view->视图层，即html  


<font color=#0099ff style='fontSize:25px' face="正楷">mvvm</font>  
它实现了view和model的自动同步，当model改变时，我们不必再手动操作dom，它们会同时发生改变  
model->模型，即我们的数据data  
viewmodel->视图模型，实现数据双向绑定  
view->视图层，即html  
:::

### 7.	this.$nextTick
（因为vue的dom更新是异步渲染的，这个方法的回调可以确保在前面的dom异步渲染完成之后才调用）
**tips:**  
this.$nextTick会等同一个作用域下的所有同步代码执行完毕才执行，不会等待异步代码
```
  data() {
    return {
      price: 10,
    };
  },
  methods: {
    add() {
      this.price++;
      this.$nextTick(() => {
        console.log(this.price);             //1200
      });
      this.price ++;
      setTimeout(() => {
        this.price++;
        console.log(this.price);             //1201
      }, 2000);
      this.price = this.price + '00'
    },
  },
```

### 8.	对vue响应式理解  vue是如何实现数据双向绑定的  vue的优点
   1. 我们在使用以前框架的时候，先得操作JS修改数据，然后再操作DOM改变视图，遇到复杂的页面更为麻烦，写的80%的代码都是跟核心业务逻辑无关的。  
      现在vue帮我们把这些都处理好了，我们之用专注于组件和数据之间的关系，修改视图数据会发生变化，修改数据视图会发生变化。更简单，更靠谱，更方便~   
   2. 遍历data中的所有属性  
      利用Obiect.defineproperty给所有的属性设置getter和setter  
      每个组件都有自己的watcher实例，会在渲染过程中将所有属性记录为依赖  
      当依赖项的setter变化时，会通知watcher重新计算，从而使它关联的组件得到更新

      高阶回答：
        <img src="/assets/img/interview3.png" width="300" height="auto" align="middle" />     
        <img src="/assets/img/interview4.png" width="300" height="auto" align="middle" />     


### 9.	如何拓展一个Vue组件
::: details 详情
1. 使用mixins混入
2. 使用extends拓展
3. 使用slot插槽
:::

### 10.	VUE删除一个数组元素或者对象属性，原因？
::: details 详情
```
obj:{name:'哎呦喂'}

vue.delete(this.obj,'name')   //vue删除方式  这种方式会真正的删除数组或者对象的属性
delete this.obj.name          //js删除方式   这种方式会让数组或者对象的属性变成empty/undefined，数组的长度，对象的键值还是没变
```
:::

### 11.	事件总线eventBus的原理
[阐述以及注意事项](https://www.jianshu.com/p/6bbf9c3364a3)  
在this.$emit的时候，必须已经有$on，否则无法监听到。所以我们需要在需要传值的页面的destoryed中触发$emit，在接收值页面的created中$on

### 12.	webpack打包步骤
（初始化项目npm init 打包webpack ）

### 13.	vue.config.js配置
（）

### 14.	scoped实现原理
（通过该属性可以实现组件间的样式独立，原理是postcss的转译，会给每一个组件中的dom动态添加一个唯一的属性，并在css选择器中选中）

### 15.	Uni-app环境变量

### 16.	Vue是如何渲染DOM的（Render函数）

### 17.  vue

### 18.  vue2的数组更新存在什么问题

::: details 详情
[参考链接](https://segmentfault.com/a/1190000038142224)

vue2不能监听对象属性的添加和删除，但是defineproperty是可以的，作者之所以没有这么做是因为性能问题    

以下两种方法会导致变动不是响应式的
1. 当我们利用索引去更新数组元素时
2. 直接修改数组长度的时候

```
arr:[1,2,3,4]

this.arr[4] = 5;       //非响应式
this.arr.length = 5    //非响应式
```

如何才能让它是响应式的
```
1. this.$set or vue.set;
2. this.arr.splice(4,0,5);
3. this.arr[4] = 5;
   this.$forceUpdate;
4. 使用map、filter等方法重新生成一个数组并赋值原数组;
   this.arr = this.arr.map(()=>);
```
:::

### 19.  vue2和vue3有什么区别
      - vue3支持vue2的大多数特性
      - vue3更好的支持ts
      - Vue3使用Proxy和flact代替了vue2的defineproperty来实现数据代理
      - 新的脚手架工具vite
      - 重写了虚拟DOM 更快了

### 20.  token如何处理
在axios请求的响应拦截中，在每次请求的请求头中加入token
```
config=>{
   const token = ''; // 服务端拿的 token 可以从 vuex、localStorage 等地方取

   config.headers['authorization'] = `Bearer ${token}`
}

```

### 21.  作用域插槽
::: details 详情
作用域插槽就是带数据的插槽
```
//子组件
<div class="child">
   <h3>我是子组件</h3>
   <slot :data='data'>
</div>


data(){
   return{
      data:['one','two','three','four']
   }
}


//父组件
<Child>
   <template slot-scope='user'>        //插槽必须放在template标签内 slot-scope后面的名字自定义
      <span v-for='item in user.data' :key='user.data'>{{item}}</span>
   </template>
</Child>
```


:::

### 22.  单页面应用 和 多页面应用的区别
::: details 详情

<font color=#0099ff style='fontSize:25px' face="正楷">单页面应用</font>  

1. 初次加载损耗大，但是切换流畅，只需要加载局部资源
2. 不利于seo检索，需要做SSR。因为搜索引擎只认识html里的内容，不认识js的内容，而单页应用的内容都是靠js渲染生成出来的，搜索引擎不识别这部分内容，也就不会给一个好的排名

<font color=#0099ff style='fontSize:25px' face="正楷">多页面应用</font>  

1.   跳转重新发起请求，然后加载所有的资源，用户体验不够好。但是首屏加载快


<img src="/assets/img/vue/vue1.jpg" width="600" height="auto" align="middle" />
:::

### 23.  数据双向绑定是如何实现的  
::: details 详情
数据发生变化后，会重新对页面渲染，这就是Vue响应式  

想完成这个过程，我们需要：

侦测数据的变化
收集视图依赖了哪些数据
数据变化时，自动“通知”需要更新的视图部分，并进行更新
对应专业俗语分别是：

数据劫持 / 数据代理
依赖收集
发布订阅模式  
 

也就是说：Vue 响应式核心就是，getter 的时候会收集依赖，setter 的时候会触发依赖更新

vue将遍历data中对象的所有property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。

这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。

每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。

getter 的时候我们会收集依赖，依赖收集就是订阅数据变化watcher的收集，依赖收集的目的是当响应式数据发生变化时，能够通知相应的订阅者去处理相关的逻辑。

setter 的时候会触发依赖更新，之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

 

总结：

1）原理：

当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。

每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,

从而使它关联的组件重新渲染。

 

2）实现过程：

    我们已经知道实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。

因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，

将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：

1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器
:::

### 24.  如何为一个对象添加多个属性
添加一个属性： this.$set(this.obj,'name',value)  
添加多个属性： this.obj =  Object.assign({},this.obj,{a:1,b:2}) 将要添加的属性与原对象通过assign混合成一个新的对象    


### 25.  vue的生命周期以及每个周期都发生了什么
::: details 详情
[完美回答](https://www.bilibili.com/video/BV1kr4y117yr/?spm_id_from=333.788.recommend_more_video.1) 

生命周期就是vue实例从创建到销毁的一个过程，即从创建、初始化数据、编译模板、挂载渲染、更新、销毁的一系列过程。  
主要分为8个阶段：创建前后、挂载前后、更新前后、销毁前后

<img src="/assets/img/interview5.jpg" width="500" height="auto" align="middle" />  

1. beforeCreate

在实例初始化之前，数据观测和事件配置都还未执行时调用,用此时data和methods还没初始化完成。this.$el,this.$data,this.$methods都无法访问

2. created

组件实例已经创建完成，data和methods初始化完成，已经可以对data、methods进行操作了，但是dom和el属性还不存在。vue【开始】编译模板，生成一个虚拟dom。
在这一步，实例已完成以下配置：数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化，el还没有配置完成。

3. beforeMount

对代码中的vue指令和模版进行解析，生成虚拟DOM，但还未挂载到页面中

4. mounted

模版已经渲染完毕，可以对dom进行操作了


5. beforeUpdate

发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程。  
data中的数据已经更新，但是dom中的数据还没改变

6. updated

页面和data中的数据同步

7. beforeDestory

实例中的所有指令、数据、方法还处于可用状态   

8. destoryed

组件被完全销毁，都不可用  

9. activated

10.  deactivated
:::

### 34.  Vue 的⽗组件和⼦组件⽣命周期钩⼦执⾏顺序是什么
[参考](https://www.jianshu.com/p/a08e8ce730ce)

### 26.  v-if 和 v-show 区别
v-show 相当于控制css的display:none OR block；不论条件是否成立标签都会被渲染；频繁切换的时候使用；
而v-if是根据条件渲染或者删除标签，而且是惰性的，初始条件不成立的时候就不会渲染；

### 27.  vue中key的作用&&虚拟 DOM 的优缺点？
**虚拟dom**  
JS操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程。如果要更新10个节点，浏览器会执行10次。   

虚拟dom使用js对象将dom树转换成了一个对象树，放在浏览器内存中。当我们需要变更的时候，找出新旧节点之间的差异，然后对差异进行打补丁  

新旧节点如果不相似，直接根据新节点创建dom；
如果相似，先是对data比较，包括class、style、event、props、attrs等，有不同就调用对应的update函数，然后是对子节点的比较，子节点的比较用到了diff算法

diff算法对新旧dom进行逐层比较，删除，创建。再反应到实际的dom中，减少了dom操作。但是如果有很多相同的元素，可能会浪费性能，所以引入了key进行区分

优点：避免了直接操作dom,提高了工作效率和性能。  
缺点：首次渲染比较慢。  

想要知道key的作用，就必须先了解一下diff算法:
1. Vue中的数据发生变化的时候，只会比较同一层级的节点  
如果节点不同，则之间干掉前面的节点，在创建并插入新的节点，不会再比较下一层的子节点了  
如果节点相同，则会重新设置该节点的属性，来实现节点的更新  
2. 当我们渲染一个例如v-for的列表时，想要往已经生成的队列中插入一条数据：
如果我们加了key唯一标识，vue就可以更加准确的知道应该往哪里插入新的节点，否则只能从变化的地方开始挨个更改，性能就会不太好  

### 28.  vue-router中导航守卫有哪些
::: details 详情
1. 全局前置守卫      beforeEach
2. 全局后置守卫      afterEach
3. 路由内独享守卫    beforeEnter
4. 组件内的守卫      beofreRouteEnter
                   beofreRouteUpdate
                   beofreRouteLeave
5. 全局解析守卫      beforeResolve
:::

### 29.  vue与react的选择

### 30.  v-if和v-for为什么不能一起用

### 31.  vue项目优化
1. 只有在页面中需要响应式显示的数据，再放到data中，否则每个数据都要经过defineproperty，很浪费性能。
如果说某个对象数据我们只用到一次，我们用到Object.freeze()冻结这个对象，就不会被defineproperty处理。  
虽然不能改变值的内容，但是可以改变对象的引用
```
new Vue({
    data: {
             // vue不会对list里的object做getter、setter绑定
             list: Object.freeze([
                    { value: 1 },
                    { value: 2 }
             ])
    },
    created () {
             // 界面不会有响应
             this.list[0].value = 100;

             // 下面两种做法，界面都会响应
             this.list = [
                 { value: 100 },
                 { value: 200 }
             ];
             this.list = Object.freeze([
                 { value: 100 },
                 { value: 200 }
             ]);
    }
})
```
2. 路由懒加载，对需要频繁访问的组件进行keep-alive持久化，并对数量进行限制（exclude,include,max）
3. 开启gzip压缩
注意事项：版本不能过高，网友推荐1.1.2  
`　npm install --save-dev compression-webpack-plugin@1.1.2`
[参考地址](https://blog.csdn.net/u013611033/article/details/104953615)
4. 通过cdn引入外部资源，减少打包体积  
   我们在项目里面通常会引入很多外部插件，在打包的时候不需要将它们打包进去，甚至vue,vuex这些。  
   1. 将它们以cdn的方式写进public/index.html里面。  
   [cdn地址查询](https://www.bootcdn.cn/)
   2. 在vue.config.js中，将这些文件剔除  
   ```
   module.exports = {
      //找到正确的文件路径
      publicPath: './',
      configureWebpack: {
         externals: {
            //键为引入的时候from的值，键值为该键全局变量的名字
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'element-ui': 'ELEMENT',
            'axios': 'axios',
         }
      }
   }
   ```


### 35.  vue的虚拟DOM、Render函数是什么

::: details 虚拟DOM
   [参考链接](https://cloud.tencent.com/developer/article/1876067)  
   > 简单点，就是一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性


   渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排。  
   JS的运行速度是非常快的，所以我们可以通过JS计算出发生变更的具体节点进行操作，达到渲染的最快值。  
   vue 在 虚拟 dom 这一块，是参照了 snabbdom.js 然后在上面进行了部分的修改的。  
   下面用虚拟DOM描述一段HTML结构。  

   ```
      <div id="app" class="container">
        <h1>虚拟DOM</h1>
        <ul style="color:red">
            <li>第一项</li>
            <li>第二项</li>
            <li>第三项</li>
        </ul>
      </div>

      //虚拟DOM
      {
         tag: 'div',
         props: {
            id: "app",
            class: "container"
         },
         children: [
            {
               tag: 'h1',
               children: '虚拟DOM' //文本也是子节点
            },
            {
               tag: 'ul',
               children: [...]
            }
         ]
      }

   ```
:::

::: details Render函数
   [参考视频](https://www.bilibili.com/video/BV1364y1F7H4/?spm_id_from=333.788.recommend_more_video.0)  
   >   1.   我们一般写组件是将页面结构写在<template></template>标签里面，而Render函数则是通过函数的方式构造页面。   
   >   2.   我们写在<template></template>标签里面结构最终也会被编译为Render函数。  
   >   3.   作用是动态创建元素或者写源码的时候会用到。

   ```
     //一般
      <template>
         <ul>
            <li class='list' onClick='console.log('')'></li>
         </ul> 
      </template>

     //Render函数
      export default{
         data() {
            return {
               list: [1,2,3]
            }
         },
         render(creatElement) {
            //三个参数：元素标签、标签信息、子元素信息
            //注意必须要return
            return creatElement(
               'ul', 
               {}, 
               this.list.map(n => creatElement(
                  'li', 
                  { attrs:{ class: 'list',on: () => {console.log('') }}}, 
                  我们第n个子元素
                  )
               )
            );
         }
      }

   ```
:::



### 36.  diff算法
::: details diff算法
   [图文并茂](https://www.cnblogs.com/wind-lanyan/p/9061684.html)  
   [参考链接](https://cloud.tencent.com/developer/article/1876067)  
   [【李发亮】图解 Vue.js Virtual DOM 的 Diff 算法核心](https://www.bilibili.com/video/BV1b5411V7i3/?spm_id_from=trigger_reload)  
   [参考视频](https://www.bilibili.com/video/BV1dV411a7mT?p=3)  
   >   虚拟DOM的核心。我们会用虚拟DOM计算出最小的变化，根据变化去更新真实DOM，来达到性能的最大化。

   ::: details patch函数
    
      页面首次更新和数据更新时触发。  
      首次更新时，会创建一个新的vnode，更新到关联到的DOM元素上。  
      页面更新时，会用新的vnode替换掉老的vnode。  
      逻辑：  
      1. 判断第一个参数是不是vnode，不是说明是第一次执行，创建vnode并关联DOM。   
      2. 判断oldVnode和vnode的tag、key、是否为注释节点等信息是否相同。  
         如果相同，说明是同一个元素，执行patchVnode函数做进一步比较。  
         如果不同，则创建一个新的DOM元素，插入到页面，并删除旧的vnode。  
      ```
         function patch (oldVnode, vnode) {
            // some code
            if (sameVnode(oldVnode, vnode)) {
               patchVnode(oldVnode, vnode)
            } else {
               const oEl = oldVnode.el // 当前oldVnode对应的真实元素节点
               let parentEle = api.parentNode(oEl)  // 父元素
               createEle(vnode)  // 根据Vnode生成新元素
               if (parentEle !== null) {
                     api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)) // 将新元素添加进父元素
                     api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
                     oldVnode = null
               }
            }
            // some code 
            return vnode
         }

         function sameVnode (a, b) {
            return (
               a.key === b.key &&  // key值
               a.tag === b.tag &&  // 标签名
               a.isComment === b.isComment &&  // 是否为注释节点
               // 是否都定义了data，data包含一些具体信息，例如onclick , style
               isDef(a.data) === isDef(b.data) &&  
               sameInputType(a, b) // 当标签是<input>的时候，type必须相同
            )
         }
      ```  
   :::
   ::: details patchVnode函数 

   逻辑：  
   1. 判断oldVnode和vnode是否指向同一个对象，是则直接return  
   2. 如果他们都有文本节点且不相等，则将DOM的文本设置为vnode的文本  
   3. 如果oldVnode有子节点而Vnode没有，则删除el的子节点  
   4. 如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el  
   5. 如果两者都有子节点，则执行updateChildren函数比较子节点，也就是我们的diff算法执行的地方  

   ```
     patchVnode (oldVnode, vnode) {
         const el = vnode.el = oldVnode.el
         let i, oldCh = oldVnode.children, ch = vnode.children
         if (oldVnode === vnode) return
         if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
            api.setTextContent(el, vnode.text)
         }else {
            updateEle(el, vnode, oldVnode)
            if (oldCh && ch && oldCh !== ch) {
                  updateChildren(el, oldCh, ch)
            }else if (ch){
                  createEle(vnode) //create el's children dom
            }else if (oldCh){
                  api.removeChildren(el)
            }
         }
      }

   ```
   :::

   ::: details updateChildren  
   逻辑：  
   1. 现将新老vnode的子节点提取出来
   2. 出现4个指针，分别指向新老vnode的头尾变量，他们会进行两两比较，没有匹配成功则会遍历oldVnode的key，使用新vnode的头变量key进行比较，有就更新或者移动，没有就创建。一旦某个vnode的StartIndex>EndIndex，说明遍历完毕  
   3. oldVnode先遍历完毕，说明新增了节点。将多余的vnode子节点按照他们的index插入到DOM中  
   4. vnode先遍历完毕，说明删除了节点。在真实DOM中将多余的节点删除
   :::

### 37.   我们为什么会用到路由懒加载
::: details 参考
   [参考视频：JS++小野老师](https://www.bilibili.com/video/BV1wC4y1t7b8/?spm_id_from=333.788.recommend_more_video.0)  
   如果不使用路由懒加载，我们在首屏渲染的时候，就会加载所有的路由文件，导致页面加载时间过长。  
   使用之后就可以在点击路由之后再去加载对应的JS文件。  
   ```
      {
         path: '/',
         name: 'home',
         //第一种 webpackChunkName是加载文件时显示的文件名称，没写就是从0开始命名。没有指定webpackChunkName，每个组件打包成一个js文件。指定了相同的webpackChunkName，会合并打包成一个js文件。
         component: () => import(/*webpackChunkName: 'home' */ '../views/About.vue')
         //第二种 异步加载
         component: resolve => (require (["@/components/HelloWorld"],resolve))
      }
   ```  

   
:::

### 38.   动态组件中的activated与deactivated钩子函数
::: details 参考
   [参考文章](https://juejin.cn/post/7005926039171891207)  
   这两个钩子函数是动态组件被<keep-alive></keep-alive>包裹时，组件被激活和被缓存的时候调用的    
   ```
      {
         path: '/',
         name: 'home',
         //第一种 webpackChunkName是加载文件时显示的文件名称，没写就是从0开始命名。没有指定webpackChunkName，每个组件打包成一个js文件。指定了相同的webpackChunkName，会合并打包成一个js文件。
         component: () => import(/*webpackChunkName: 'home' */ '../views/About.vue')
         //第二种 异步加载
         component: resolve => (require (["@/components/HelloWorld"],resolve))
      }
   ```  
:::

### 39.   keep-alive
::: details 参考
   [参考文章](https://www.jianshu.com/p/4b55d312d297)  
   [前进刷新，后退不刷新](https://www.jianshu.com/p/0b0222954483)   
   [源码解析](https://www.cnblogs.com/chanwahfung/p/13523396.html)  
   vue内置的一个组件，用来缓存不活动的组件状态，避免重新渲染，提高性能。被缓存的组件在切换时会触发activated、deactivated这两个生命周期钩子函数。  

   标签中的name属性对应的是每个组件配置中的name属性，而不是路由的name属性！

   1. 切换回来需要置顶怎么办？
      1. Router方法中有一个scrollBehavior，接收to/form参数，可以利用这个做处理
      2. 可以在具体组件中的 activated中做处理     
   2. 切换默认不支持二三级路由，应该怎么办？
   3. 切换回来没有默认请求，应该怎么办？
      1. 可以在具体组件中的 activated中做处理 
      2. 利用include、exclude属性  
:::

### 40.   在自定义组件中使用v-model
::: details 参考
   [参考文章](https://blog.csdn.net/liub37/article/details/83382205)   
    
:::

## 浏览器原理
### **从输入http到页面显示浏览器发生了啥**  
>输入的url经过DNS(分布式数据库，记录了域名和其IP地址的对应关系)解析之后得到服务器IP地址，接着向服务器发起请求，经过TCP三次握手确认连接后，浏览器得到资源开始构建DOM树，并最终渲染出来(一个完整的 HTTP 请求需要经历 DNS 查找，TCP 握手，浏览器发出 HTTP 请求，服务器接收请求，服务器处理请求并发回响应，浏览器接收响应等过程)  
>输入bilibili.com  DNS解析得到B站的IP地址。接着向B站发起获得首页内容的请求

   - 浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;
   - 解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;
   - 浏览器发出读取文件(URL 中域名后面部分对应的文件)的HTTP 请求，该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器;
   - 服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;
   - 释放 TCP连接;
   - 浏览器将该 html 文本并显示内容; 

### **TCP三次握手的过程**  
1. A确定B能接受信息
2. A确定B能发送信息
3. B确定A能接受信息
4. B确定A能发送信息

### **浏览器缓存**  
浏览器缓存机制有四个方面，但我们最常用的是HTTP缓存。大家倾向于将浏览器缓存简单地理解为“HTTP 缓存”。  

强缓存，协商缓存：共同点都是从浏览器读取资源，不同点强缓存不给服务器发请求，直接读；协商是发送，然后根据返回信息决定是否使用缓存  

浏览器存在一个缓存数据库，用于储存一些不经常变化的静态文件（图片、css、js等）。缓存分为强制缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓存。  
<font color=#0099ff style='fontSize:25px' face="正楷">强制缓存</font> 
当缓存数据库中已有所请求的数据时。客户端直接从缓存数据库中获取数据。当缓存数据库中没有所请求的数据时，客户端的才会从服务端获取数据。  
服务器觉得某个资源需要被缓存时，会在资源的响应头中设置Cache-Control的max-age。前端不需要作处理。    


<font color=#0099ff style='fontSize:25px' face="正楷">协商缓存</font> 
又称对比缓存。首次请求会得到最新的资源和一个资源标识，存储到本地缓存。下次请求客户端会拿着缓存标识，去请求服务端验证是否失效（新鲜），如果没有失效服务端会返回304，此时客户端直接从缓存中获取所请求的数据，如果标识失效，服务端会返回200状态码和最新的资源。

### **CDN**  

### **HTTP 和HTTPS的区别**  
是客户端和服务器请求和接受数据的一个标准，规定客户端和服务端的数据传输格式。  
默认端口是80。  
基于TCP/IP的应用层协议，无状态。  
一个HTTP请求报文包括请求行，请求头，空的一行，请求体。  
客户端向服务器发起一个请求报文，包含请求的方法，协议版本，路径，请求头以及数据。服务端返回一个状态作为响应，响应内容包括协议版本，成功错误代码，服务器信息，响应头以及数据  

### **token被人恶意截取怎么办**  
1. 在存储的时候把 token 进行对称加密存储，用时解开。
2. 将请求 URL、时间戳、token 三者进行合并加盐签名，服务端校验有效性。
3. HTTPS 对 URL 进行判断。

### **常用的的请求头都有哪些**  

1. multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

2. application/x-www-form-urlencoded ： `<`form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）

3. application/json    ： JSON数据格式

### **常用的的状态码都有哪些** 


### **与缓存相关的请求头有哪些，我们一般都缓存哪些文件**  

### **什么是跨域，如何解决？**  
   说到跨域就得先了解同源策略
   > 同源策略是浏览器的一个最核心也最基本的安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源  
   > 源（origin）就是协议、域名和端口号  
   > 即便两个不同的域名指向同一个IP地址，也非同源  

   **概念**  

   <img src="/assets/img/crossDomain.jpg" width="500" height="auto" align="middle" />  

   **利用jsonp解决跨域**  
   HTML中有一些标签是可以跨域访问资源的,如link、img、src以及iframe等，jsonp就是利用了src的这一特性 

   在JS中提前定义好回调处理函数，后端将回调函数的调用，携带请求结果返回，我们就可以做相应的处理了。  

   利用jquery解决jsonp跨域非常的方便 
   <img src="/assets/img/jsonp.jpg" width="500" height="auto" align="middle" />  

   **缺点**：

   - 需要服务的支持
   - 只能发起GET请求

   ---

   **利用CORS解决跨域**  
   是后端人员在服务中设置允许跨域请求，前端人员不用做其他处理，如果需要携带cookie的话，则前后端都需要设置。是一种规范化的跨域请求解决方案，安全可靠。

   **优势**   
   - 在服务端进行控制是否允许跨域，可自定义规则
   - 支持各种请求方式  

   **缺点**  
   - 会产生额外的请求


   **proxy代理解决跨域**  
   通过中间件来实现,浏览器之间有跨域限制，但服务器之间没有，所以中间件就是服务器  

   **缺点**
   - 只能在生产环境中使用




## JS
### 1.	节流和防抖以及使用场景
   [节流](https://www.bilibili.com/video/BV17b4y1X7yp/?spm_id_from=333.788.recommend_more_video.-1) ：事件触发一次之后设置时间间隔，这段时间内，不会开始下一次触发(在设置时间内，只会触发一次效果)。  
   [防抖](https://www.bilibili.com/video/BV17b4y1X7yp)：一段时间内点击多次，只执行最后一次。  （本质上就是以最后的操作为标准）  
```
    <button id="fangdou">防抖按钮</button>
    <button id="jieliu">节流按钮</button>

    <script>

        //防抖
        function cons() { console.log(this) }

        function antiShake(fn, time) {
            //利用闭包使得return出去的函数处理的都是同一个setTimeOut
            let setTime;
            return function () {
               //保存this指向和参数
               let context = this;
               let arg = arguments;

               clearTimeout(setTime)

               setTime = setTimeout(function () {
                  fn.apply(context, arg)
               }, time) 
            }
        }


        fangdou.addEventListener('click', antiShake(cons, 2000))
        //节流
        function throttle(fn, time) {
            let setTime;

            return function () {
                let context = this;
                let arg = arguments;
                if (setTime) {
                    return
                }
                setTime = setTimeout(function () {
                    fn.call(context,arg);
                    setTime = null
                }, time)
            }
        }

        jieliu.addEventListener('click', throttle(cons, 2000))
```

### 2.	箭头函数和普通函数的差别
<font color=#0099ff style='fontSize:25px' face="正楷">箭头函数</font> 
箭头函数是匿名函数，不能作为构造函数，单个表达式的时候可以省略大括号。    
箭头函数没有arguments属性，取而代之用rest参数...解决。   
箭头函数的 this 永远指向其上下文的  this ，任何方法都改变不了其指向，如 call、bind、apply，注意：this一旦被捕获，就不再发生变化       
箭头函数没有原型属性  
<font color=#0099ff style='fontSize:25px' face="正楷">普通函数</font>   
普通函数  
this指向调用它的那个对象，可以修改  
可以用作构造函数，有原型   
有arguments属性   


### 3.	var let const的区别
（let，const不存在变量提升）
if语句和for循环中用var声明的变量，可以在外部访问的到，因为他们是块级作用域，不是函数作用域。
1. var、let、const都不能跨函数作用域访问   
2. var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。  
3. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。   
let 关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的  
4. const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。  
 const定义的并非不可变，他是定义了一个常量，如果赋值为对象或者数组，则保存的是对象、数组的引用地址，可以对对象数组的内容修改，但不能重新给这个常量赋值。  
5. 在相同的作用域或块级作用域中，不能使用 其他 关键字来重置 var、let、const 关键字声明的变量:  


### 4.	ES6数组新方法
   Array.find(),Array.findIndex()传入一个回调，返回以第一个匹配到的值或者下标  
   Array.fill(value,start,end)） 填充或者替换指定位置的元素  
   Array.form()                  将类数组对象转为真正的数组  
   Array.of()                    将一组值转为数组  
   Array.includes()              判断数组中是否包含某元素  
   Array.keys()                  返回键值对的key（下标）  
   Array.values()                返回键值对的value  
   Array.entries()               返回键值对  
   Array.copyWithin()            选择数组的某个下标，从该位置开始复制数组元素  




### 5.	高阶函数  
高阶函数是对其他函数进行操作的函数，操作可以是将它们作为参数，或者是返回它们。

高阶函数是一个接收函数作为参数或将函数作为输出返回的函数。  
例如Array.map，Array.filter 和 Array.reduce  

### 6.	图片上传

### 7.	map和forEach的区别
（map返回的是一个新的数组，forEach改变的是原数组。 相同点：都是数组方法，都是循环遍历，三个参数相同，this指向window）

### 8.	for in和for of的区别  
1. for in会遍历数组所有的可枚举属性，包括原型，主要是为了遍历对象而生，不适用于遍历数组  
   for of遍历的只是数组内的元素，不包括原型属性和索引。可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象等拥有迭代器对象（iterator）的集合，但是不能遍历对象，因为没有迭代器对象    
2. for of遍历我们直接`let obj = {name：'auv'}`生成的对象会报错，所以不能便利属性  
3. forEach不能使用return跳出循环,for of可以  
4. 都不能遍历键名为symbol类型的  

::: details 参考
   [参考链接](https://www.cnblogs.com/rogerwu/p/10738776.html)  
   >   for in适用于遍历对象,for  of适用于遍历数组

   ```
     

   ```
:::

### 9.	Promise  
   ```
   //基本使用
   let promise = new Promise((resolve,reject)=>{
      if(true){
         resolve('promise成功啦')
      }else{
         reject('promise失败啦')
      }
   })

   promise.then(res=>{
      console.log(res)
   }).catch(err=>{
      console.log(err)
   })
   ```
   [简单易懂的Promise教程](https://www.bilibili.com/video/BV1U34y1m7a6)  
   - Promise在new的时候，里面的程序会被立即执行，then catch里的才会异步    
   - Promise.all（）全部成功返回成功，一个失败就返回失败。获得的结果顺序跟接受的数组顺序是一致的  
   - Promise.any（）有一个成功就返回该成功的结果，如果全部失败则返回失败   
   - Promise.race（）哪个结果返回成功的快用哪个 
   - Promise的三种状态（1、pending[待定]初始状态 2、fulfilled(resloved)操作成功 3、rejected操作失败）  
      默认是pending状态，调用了resolve\reject方法之后状态才会相应的改变。  
      无论是 then 还是 catch,只要没有抛出异常，返回都是一个resloved状态的Promise    
   - 当promise的then中有触发catch的操作时，会立即执行，而不是放到微任务队列中  
   - await接收的函数会立即执行，但是await下面的代码会等待本轮事件循环执行完毕之后才开始执行

### 10.	对模块化和组件化的理解

::: details 详情
<font color=#0099ff style='fontSize:25px' face="正楷">模块化</font>
 就是封装细节、提供使用借口而不能随意更改模块内容、每个模块都是一个特定的功能  

将一些功能化、可复用性较强的代码分类、归总，在业务代码中就可以用最精简的部分，有利于维护
<font color=#0099ff style='fontSize:25px' face="正楷">组件化</font>

1. 将一些常用的功能封装起来，可复用性提高  
2. 组件间的耦合度降低，维护起来也更方便  

:::


### 11.	cookie，localStorage, sessionStorage

::: details 详情
[参考链接](https://blog.csdn.net/weixin_42614080/article/details/90706499?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=2)

| 方法 | 生命期 | 存放大小 | 与服务器的通信 | 作用域 |
|--	|--	|--	|--	|
| cookie|可设置失效时间，默认浏览器关闭后实效 | 4KB | 每次都会携带在http头中，如果数据过多会有性能问题 | 在所有同源窗口中共享 | 
| localStorage | 除非主动清除，否则永久有效 | 5MB | 只保存在浏览器，不参与请求 | 在所有同源窗口中共享  | 
| sessionStorage | 页面或者浏览器关闭失效 | 5MB | 只保存在浏览器，不参与请求  | 只在当前窗口有效  | 
:::

### 12.	对象的继承有哪几种方式

### 13.	数组的扁平化处理

### 14.	树形结构的数据处理

### 16.	那些常见操作会造成内存泄漏
1. setTimeout 的第一个参数使用字符串而非函数的话,会引发内存泄露
2. 全局变量未及时清除
3. 闭包
4. 事件监听未及时解绑
5. 控制台日志
6. 循环未终止

### 17.   null和undefined的区别
 - 一些神奇的现象
   ```
   null == undefined
   12 + null = null
   12 + undefined = NaN
   Number('12')         //12
   Number(undefined)    //NaN
   Number(null)         //0

   //给一个变量赋值为undefined相当于没赋值
   function show(a,b=5){
      console.log(a,b)
   }

   show(4,undefined)       //4,5
   show(4,null)            //4,null
   //解构赋值也是如此
   const [a,b=88] = [11,undefined]
   console.log(a,b)        //11,88

   const [a,b=88] = [11,null]
   console.log(a,b)        //11,null

   ```

   **undefined:**  
   理解(当系统找不到你想到得到的那个值的时候，被动的抛出undefined)  
   1. 被迫的替代性方案
   2. 本质是特殊对象
   3. JS特有的关键词
   4. 作用非常类似于没写(函数传参如果传undefined等同于什么都没写)


   **null:**  
   
   1. 主动选择(只有当手动赋值为null，才可能为null) 
   2. 本质是0,至于typeof null等于'object'仅仅是因为JS作者这么设计了
   3. 接近于其他语言的NULL
   4. 显式的空(函数传参传null就代表是传了值的)

   注意: typeof(null) = 'object'
        typeof(undefined) = 'undefined'
        Number(null) = 0  但是要注意！ null == 0为false，无语了
        Number(undefined) = NaN
        null是对象，undefined是基本类型


### 18.   **this指向**  

1：this永远指向一个对象；this的指向完全取决于函数调用的位置；第一准则是：this永远指向函数运行时所在的对象，而不是函数被创建时所在的对象。  

2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。   
```
o = {
   a : 1,
   b : function show(){
            console.log(this)
       }
}
o.b()   //o

```
3. 当图2中的b被赋值给另外一个变量，由另一个变量执行的时候，this就指向该变量所属的对象
```
var i = o.b;      //只是赋值

i();              //这才是真正调用，所以指向window


var j = o.b();      //如果是这样则依然指向o
```




```
function show(){
   console.log(this)
}

//1.直接调用-----指向window||undefined 
show()；
原本这个show不属于任何对象，按理说this应该没有指向才对，这是JS作者设计的一个失误，他就是这么设计了。
后来他想了一个弥补的办法，那就是严格模式'use strict'
在JS代码顶部加入这个字符串  那么上面的代码输出结果即为undefined 


//2.挂载到对象，然后执行对象方法-----指向对象本身
const arr = [1,2,3]
arr.fn = show
arr.fn()          

//3.定时器-----指向window（这个跟严格模式无关了，因为定时器就是window的属性，由window执行）
setTimeOut(show,1000)

//4.构造函数-----指向new出来的实例||如果构造函数return了一个对象，则指向return的对象
let a = new show()

//5.工具函数-----写什么指向什么
show.call(2);           //2
show.call([a:1]);       //[a:1]

//6.forEach-----指向第二个参数，没写就是window(非严格)||undefined(严格)
let arr = [1,2,3]
arr.forEach(function(item){
   console.log(this)
},888)                  //888

//7.  严格模式汇总
1. 全局作用域下，this指向window
2. 全局函数中，this指向undefined
3. 对象函数中，指向对象实例




```

### 19.   数组sort排序的原理
```

```
它会拿出数组的每一项出来比较，x是后一项，y是前一项，返回值是正值则正序，负值则倒序

### 20.   instanceof和typeOf的区别
   instanceof: 检测构造函数在不在实例对象的原型链上,返回的是布尔值  
      1. 左侧的操作值一定要是一个引用类型的值，如果是基础类型一定会返回false

      ```
         'a' instanceof String               //false
         new String('a') instanceof String   //true
      ```
   typeof: 只适用于检测除null之外的基础数据类型和函数类型，返回的是字符串  
      1. typeof {} = 'object'  
      2. typeof [] = 'object'  
      3. typeof undefined = 'undefined'  
      4. typeof null = 'object'  //只是因为作者这么设计了  
      5. typeof Symbol() = 'symbol'  
      6. typeof Symbol = 'function'  

### 21.   arguments参数

### 22.   call  apply bind的区别
::: details 详情
三者都是改变this指向的。  
call和apply的区别是传参形式的不同，call的参数是一个一个写的，apply的参数需要写在一个数组里。 
call和apply在改变完this指向后会立即执行,bind会返回一个新的函数，然后等待执行。  
bind返回的函数this指向就固定了，无法再继续通过 call  apply bind的方式修改this指向。  

```
let fn = function(a,b){
   console.log(this,a,b);
}

const obj = {name:'哎呦喂'}

fn.call(obj,1,2)           //obj,1,2
fn.apply(obj,[1,2])        //obj,1,2
```


小知识：
call在严格模式下，this传谁就指向谁，不传指向undefined;  
在非严格模式下，传null、undefined或者不传，this都指向window;
:::



### 23.   创建对象的几种方式
   - 直接new Object()然后往实例对象上添加属性
   - 工厂模式(在函数中构建对象并返回)
   ```
      function people(name,age,sex){
         let obj = new Object();
         obj.name = name;
         obj.age = age;
         obj.sex = sex;
         return obj;
      }

      const people1 = people('fengfeng',25,'boy');
      const people2 = people('lele',22,'girl');

      但是输出一下 people1 instanceOf people会看到false,可见工厂模式还是有一定的问题
   ```
   - 构造函数(首字母大写，并且不需要创建对象返回对象，因为new的时候会隐式的做这些)
   ```
   function People(name,age,sex){
      this.name = name;
      this.age = age;
      this.sex = sex;
   }

   const people1 = new People('fengfeng',25,'boy');
   const people2 = new People('lele',22,'girl');
   ```

   - ES6的class(外面用class包裹，里面就是将构造函数换成了construcor)
   ```   
   class People {
      constructor(name, age, sex) {
         this.name = name;
         this.age = age;
         this.sex = sex;
      }
   }

   const people1 = new People("fengfeng", 25, "boy");
   const people2 = new People("lele", 22, "girl");
   ```

### 24.  原型&&原型链&&原型继承原理&&实例、构造函数和原型的关系
#### 自己的理解
      1. 每一个实例都是由构造函数通过new创建出来的，原理是将构造函数的this指向自身。  
      2. 实例的__proto__属性指向构造函数的原型对象。  
      3. 构造函数的prototype也指向它的原型对象。  
      4. 原型的constructor指向构造函数。

#### 原型链：  
当我们访问一个对象属性的时候，如果对象本身没有，就去对象原型上面找，原型上面没有就去原型的原型上找，直到原型为null为止。  

#### 总结
1. __proto__（隐式原型）与prototype（显式原型）   也可以说 实例对象的__proto__等于构造函数的原型prototype
2. 实例对象的隐式原型 等于 实例构造函数的显示原型
   ```
   const aiyouwei = new Person();
   aiyouwei.__proto__ === Person.prototype
   ```

3. 只有函数对象身上才会有prototype属性，new出来的实例对象都是普通对象，没有这个属性，只有__proto__（函数通过prototype来追溯原型对象，对象通过_proto_来追溯原型对象。）  

### 25.  类的继承

### 26.  super关键字

### 27.  Eventloop事件循环机制的执行顺序
[一次弄懂Event Loop（彻底解决此类面试问题](https://juejin.cn/post/6844903764202094606) 
[技术蛋老师解析](https://www.bilibili.com/video/BV1eQ4y1d7mE)   

JS是一门单线程语言，异步任务都是放在异步任务队列中，等待主线程执行的，并没有专门的异步执行线程。 
JS有一个主线程和一个调用栈，所有任务都被放在调用栈等待主线程执行。执行一个清空一个，等待下一个进来。        
执行顺序：同步代码 -> 微任务 -> DOM渲染 -> 宏任务  

1. 遇到同步代码，就放到主线程中，一步一步执行。
2. 遇到异步代码，先放到任务队列中，等待主线程的操作执行完毕。
3. 查看异步队列，先执行微任务，再执行宏任务。
   每次【单个】宏任务执行完毕，都会去查看微任务列表，有就优先执行，所以插入微任务会阻塞宏任务的执行！
4. 微任务（promise.then\catch、async/await）  
5. 宏任务（setTimeOut，setInterval、script（整体代码）、回调函数（点击事件等）、ajax请求、UI 渲染等）要注意他们的延迟时间

### 28.  JS预编译预解析
   1. 定义阶段：(代码还没有执行。预览页面之前，写完之后)
        寻找var关键字，如果找到了提前给var定义的变量赋值undefined
        寻找的普通函数，如果找到了，函数提升，将整个函数赋值给函数名。
        如果找的var的名字和函数名字相同，函数优先。       
   2. 执行阶段：逐行解析代码。按照上下顺序。如果碰到函数定义，忽略。


### 29.  想要得到异步请求的结果
1. callback回调函数
2. promise+async/await

### 30.  创建一个长度为n，元素为指定内容的数组
//fill内可以填任意元素
`const array = new Array(9).fill('')`
//创建一个数组，里面的元素是元素对应的下标
`var arr = Array.from({length:100}, (v,k) => k);`

### 31.  事件流、事件捕获和事件冒泡
事件流分为三个阶段：事件捕获阶段 ->  处于目标阶段 -> 事件冒泡阶段

addEventListener接受三个参数：事件名、方法、布尔值。第三个参数是为了区分事件在冒泡阶段触发还是捕获阶段触发。默认为false，事件冒泡阶段触发。改为true即为事件捕获阶段触发。  

<img src="/assets/img/interview/interview2.jpg" width="600" height="auto" align="middle" />
如图所示，在事件触发的过程中，addEnentListener的第三个参数规定了事件在事件流的哪个阶段触发，所以先触发捕获阶段的两个方法，从外到内。




### 32.  堆栈内存
   1. JS中的内存空间分为栈(stack)、堆(heap)、池(一般会归类为栈中)。  
      栈内存有序排列，并且大小固定。堆内存无需排列，大小不固定。  

   2. 基本数据类型的值比较简单，数据大小是确定的，保存在栈区中，基本类型变量的复制，会在栈区中创建一个新值，然后把值赋值给新的变量  
   3. 引用数据类型的值保存在堆区中，在栈区中保存的只是一个引用地址。操作时，需要先从栈区中找到引用地址，在沿着指针找到堆区中的值进行操作。引用类型变量的复制，会将两个变量指向同一个引 用地址，一个变都变。

### 33.  深拷贝浅拷贝
> 深拷贝是指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。

[深拷贝的实现方式](https://juejin.cn/post/7013603488315736072)
1. 利用递归遍历深拷贝
```
    function deepClone(obj) {
        let objClone = Array.isArray(obj) ? [] : {}; 
        if (obj && typeof obj === "object") {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {                
                    //判断ojb子元素是否为对象，如果是，递归复制
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = deepClone(obj[key]);
                    } else {                    //如果不是，简单复制
                        objClone[key] = obj[key];
                    }
                }
            }
        } 
        return objClone;
    }
```
2. JSON.stringfy将对象变为字符串，再利用JSON.parse将字符串变为新的对象  
   [其他方式实现深拷贝有什么问题](https://coffe1891.gitbook.io/frontend-hard-mode-interview/1/1.3.1) 
   问题：  
   1. 对象中的值为方法、undefined、Symbol值时会被忽略  
   2. NaN 和 Infinity 格式的数值及 null 都会被当做 null  
   3. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误  
3. Object.assign()实现的是浅拷贝。
   问题：  
   对最外层的对象实现深拷贝，如果对象中还有对象，则为浅拷贝。...、slice、concat方法同理 

### 34.  js属性对象的hasOwnProperty方法
[讲得太好了，直接看吧](https://www.cnblogs.com/weiqinl/p/8683207.html)

### 35.  get和post的区别
1. get的数据在url中明文发送，不安全，post用户一般看不到
2. get可以发送的数据有限，因为url的长度有限，post默认是不受限制的
3. GET产生一个TCP数据包；POST产生两个TCP数据包。
::: tip 提示
对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

[详解](https://www.cnblogs.com/logsharing/p/8448446.html)
:::

### 36.  arguments对象
是一个保存了我们传入函数的全部实参的类数组对象，有length和callee属性。  
callee属性返回的是函数本身，我们可以利用它实现一些递归函数。  

### 37.  new操作符做了什么
::: details 详情
`let aiyouwei = new Aiyouwei()`
1. 先创建一个空对象
`let obj = {}`
2. 将空对象的__proto__指向构造函数的原型
`obj.__proto__ = Aiyouwei.prototype`
3. 将构造函数的this指向空对象
`let result = Aiyouwei.call(obj,arg)`
4. 对函数返回值进行判断
`result instaceOf Object?result:obj`

在new的时候，会对**构造函数的返回值**做一些判断：

1、如果返回值是基础数据类型，则忽略返回值；

2、如果返回值是引用数据类型，则使用return 的返回，也就是new操作符无效；

示例：
```
function Person(name){
  this.name = name;
  return 1; // return undefined/NaN/'string'/null
}
let me = new Person('快乐每一天');
console.log(me); // { name:'快乐每一天' }


function Person(name){
  this.name = name;
  return { age:12 };
}
let me = new Person('快乐每一天');
console.log(me); // { age:12 }
```
:::

### 38.  ES6新特性

### 39.  闭包

      理解：
      1、   闭包就是能够读取其他函数内部变量的函数。  
      2、   定义在一个函数内部的函数。  
      3、   一个函数和他周围状态的引用捆绑在一起的组合。当函数内部引用了一个变量，而他自身没有定义时，会在【定义函数】的地方向上一级查找。
      ```
         //举例1
         const a = 2;
         function son(){
            console.log(a)
         };

         function test(fn){
            const a = 4;
            return fn();
         }
         test(son);      //2

         //举例2
         function son(){
            const a = 2;
            return function(){
               console.log(a)
            }
         };

         const a = 4;

         const result = son()();
      ```


### 40.  作用域和作用域链
::: details 详情
1. 作用域分为全局作用域和函数作用域。  
2. 访问一个变量的时候，会在当前作用域先查找，找不到会去上级作用域，直到找到全局作用域。这个过程形成的链条就叫作用域链。  
3. 所有末定义直接赋值的变量自动声明为拥有全局作用域  
4. 当前作用域没有定义的变量，称为 自由变量 。自由变量的值如何得到 ？要到创建这个函数的域中查找，无论函数在哪里调用。
:::

### 41.  获取url参数

### 42.  数组去重  多维转一维
```
let arr = [[1, 2], 3, 4, [5, 6, 7], 8, [9]]
let newArr = arr.reduce((acc, cur) => {
  return acc.concat(cur)
}, [])
console.log(newArr) // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 43.  Symbol类型
[理解JavaScript基本数据类型symbol](https://blog.csdn.net/xcg132566/article/details/108109837)
1. 创建一个 symbol 的值需要使用 Symbol() 函数，而不能使用 new 命令  
2. 由于生成的 symbol 是一个值而不是对象，所以不能为其添加属性  
3. Symbol 的本质是表示一个唯一标识
4. 理论上 Symbol 的存在只有一个意义：用于必须使用唯一值的场景。


### 44.  Map和Set
   [JS基础：Map和Set对象](https://cloud.tencent.com/developer/article/1499648)
   1. Set
      1. 里面的数据都是不重复的
      2. 基础方法有set、delete、has、size、clear。遍历方法有forEach、keys()、values()、entries()
      3. 使用：数组去重、获取交集
      4. 添加值得时候不会自动进行数据转换，所以5和'5'是两个不同的值 `let b = new Set().add(5).add('5')`
      5. 同一个值多次添加，后面添加的会被排除
   2. Map
      1. 普通对象是key:value;Map对象是key=>value
      2. 同一个键多次赋值，后面的结果会覆盖前面的
    

## CSS
### 1.	重绘和重排（回流）
浏览器渲染过程

1. 解析HTML生成DOM树。
2. 解析CSS生成CSSOM规则树。
3. 将DOM树与CSSOM规则树合并在一起生成渲染树。
4. 遍历渲染树开始布局，计算每个节点的位置大小信息。
5. 将渲染树每个节点绘制到屏幕。

::: details 详情
<font color=#0099ff style='fontSize:25px' face="正楷">重绘</font> 

重绘就是当元素的样式发生变化，但不影响几何属性的时候，浏览器只会重新绘制该元素的样式。比方只改变元素的背景颜色，就只会发生重绘。

<font color=#0099ff style='fontSize:25px' face="正楷">回流</font> 

回流就是当元素的几何属性发生变化的时候，浏览器需要重新计算元素的大小位置(其他元素也会受到影响)，然后重新绘制出来的过程。比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变   


回流必将重绘，重回不一定回流。页面第一次渲染的时候，必将触发一次回流。

offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop���clientLeft、clientWidth、clientHeight 获取这些浏览器尺寸的时候，因为都是通过计算得到，所以也会触发回流
:::

### 2.	css实现两边固定 中间自适应

### 3.	css3圆角属性如何兼容ie低版本浏览器

### 4.	display:none和visibility：hidden有什么区别
1. visibility，即使隐藏以后也会占据空间，且子元素继承属性，可以单独显示
2. display设置为none，会从文档流中消失，其他元素会顶上来

### 5.	对盒模型的理解
::: details 详情
一个盒子所占空间的大小由内容+内边距+边框+外边距来决定���

<font color=#0099ff style='fontSize:25px' face="正楷">标准盒模型（W3C标准模型）</font> 
`box-sizing:content-box`  
顾名思义，盒子的大小等于内容的大小


<font color=#0099ff style='fontSize:25px' face="正楷">怪异盒模型（IE模型）</font> 
`box-sizing:border-box`  
盒子的大小等于内容的大小+padding+border
:::

### 6.	页面引入了多个css的情况下，如何处理才能减少请求
（新建一个css文件，利用@important 引入其余的所有css文件，主页面只引入我们新建的css即可）

### 7.   响应式布局和自适应布局

### 8.   元素水平垂直居中
::: details 详情
1. 已知元素宽高的情况下  
定位元素  左50% 上50%  margin-left和margin-top各为宽高的一半  
2. 元素宽高未知  
定位元素  左50% 上50%  translateX(-50%) translateY(-50%)或者transform:translate(-50%,-50%);  
3. 定位元素 上50% 下50% 左50% 右50% margin:auto
2. vertical-align:middle和margin:0 auto
:::


样式旋转
放大  阴影

### 9.   渐进增强和优雅降级
<font color=#0099ff style='fontSize:25px' face="正楷">优雅降级</font> 
在保证功能和效果完整的情况下，再针对低版本浏览器做一些兼容。  
<font color=#0099ff style='fontSize:25px' face="正楷">渐进增强</font> 
一开始就针对低版本浏览器进行构建，完成基本功能。再针对高版本浏览器追加效果、交互体验
<font color=#0099ff style='fontSize:25px' face="正楷">如何选择</font>
分析客户端的浏览器使用占比。大公司基本上采用渐进增强，优先保证基本功能。

### 10.  清除浮动
   ::: details 参考
   [参考链接](https://zhuanlan.zhihu.com/p/94697222) 

   > 一个容器内部的元素设置了float属性，导致容器高度塌陷，内部元素跑到了容器外部，影响了整体布局的现象。
   ```
      <div>
         <span></span>
         <p></p>
      </div>

      div{
         height: auto;
      }
      span{
         float: right;
      }
      p{
         float: left;
      }
   ``` 
   1. 给子元素末尾添加一个隐藏元素，给隐藏元素设置 clear:both 属性。  
   2. 给父元素添加一个伪元素，给伪元素设置 clear:both 属性。  
   3. 给父元素设置浮动，但是会影响别的布局，不推荐。  
   4. 给父元素设置 overflow: auto/hidden 清除浮动。
:::

### 11.  圣杯布局和双飞翼布局(左右固定，中间自适应)
双飞翼布局比圣杯布局多创建了一个div，但不用相对布局了  
<font color=#0099ff style='fontSize:25px' face="正楷">圣杯</font> 
::: details 详情  
```
<header></header>
   <div class="box">
      <div class="middle">中间区域</div>
      <div class="left">左</div>
      <div class="right">右</div>
   </div>
<footer></footer>
```

1. box中的元素全部浮动float:left;（不要忘记footer的清除浮动）
2. box加左右padding将中间区域压缩  
3. 左右块通过position:relative调整位置到左右两边
:::

<font color=#0099ff style='fontSize:25px' face="正楷">双飞翼</font> 
::: details 详情  
```
<header></header>
   <div id="middle">
      <div id="inside">中间区域</div>
   </div>
   <div id="left">左</div>
   <div id="right">右</div>
<footer></footer>
```

1. middle,left,right全部浮动；
2. middle宽度设置100%；inside设置margin:0 200px
3. 通过margin-left移动left,right到指定位置

:::

### 12.  行内元素和块级元素的具体区别是什么？inline-block是什么？
   1. 行内元素水平排列，不能设置宽高，padding,margin的上下都无效；块级元素垂直排列，单独占一行，可设置宽高，上下边距。  
   2. 块级元素可以包含行内元素，反之则不行。  
   3. 常见行内元素：span \ i \ img \ input 
      常见块级元素：div \ form\ ol \ ul \ li \ p \ table

### 13.  BFC
   [请说说什么是BFC？大白话讲清楚](https://juejin.cn/post/6950082193632788493)
   1. 全程Block Formatting Contexts 块级格式化上下文  
   2. 具有BFC特性的元素可以看作一个大箱子，无论内部的元素如何变化，都不会影响到外部||BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。  
   3. 满足以下任一条件即可触发BFC：
      1. body标签的根元素
      2. 有overflow属性，visible除外  
      3. 有float属性，none除外  
      4. display:inlink-block\flex\table-cells  
      5. 绝对定位position:absolute\fixed  
   4. 解决了哪些问题：
      1. 高度塌陷  
      2. 外边距重合  
      3. 两栏布局  




### 14.  新特性IE兼容以及移动端自适应  
[移动端完美flex布局，自适应布局](https://www.bilibili.com/video/BV1cY411E7z6)  
   1. HTML5语义化标签不识别：需要引入一个转换的JS文件，但是为了防止别的浏览器加载不必要的文件，要添加条件注释（针对IE9以下） 
   2. 

### 15.  flex布局
   1. 父元素-容器，子元素-项目
   2. 容器的属性：
      1. flex-direction: row\column；               主轴方向
      2. flex-wrap: nowrap\wrap;                    项目默认是不换行的，该属性就是控制是否允许换行
      3. flex-flow: row nowrap\column wrap;         flex-direction和flex-wrap的集合
      4. justify: flex-start\flex-end\center;       项目在主轴上的排列方式
      5. align-items: flex-start\flex-end\center;   项目在交叉轴上的排列方式
   3. 项目的属性：
      1. flex-grow:0；                              项目的放大比例。默认0不放大
      2. flex-shrink:1;                             项目的缩小比例。默认1按比例缩小
      3. flex-basis: px;                            项目在占用剩余空间之前的大小，跟width类似
      4. flex

## webpack
[Webpack面试题](https://zhuanlan.zhihu.com/p/113661886)
###   有哪些常用的loader
本质上是一个函数，对接受的内容进行转换
1. image-loader：加载并且压缩图片文件
2. babel-loader：把 ES6 转换成 ES5
3. sass-loader：将 CSS 代码注入 JavaScript 中，通过 DOM 操作去加载 CSS
4. css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
5. style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
6. postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀 
7. vue-loader：加载 Vue.js 单文件组件

###   有哪些常见的Plugin
本质上是一个插件，对内容功能进行拓展
1. define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
2. ignore-plugin：忽略部分文件
3. html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)


## 网络安全
1. 如何防止token被恶意获取
2. 状态码302是什么
3. xss攻击






## 还没咋搞懂得
1.  移动端适配
2.  webpack和vue.config.js的配置
3.  重构项目的时候要考虑哪些方面


## 其他面试题

### 项目开发流程
需求获取->需求分析(技术研讨)->设计->开发->测试->打包部署->上线

### 开发过程中遇到的最大难题是什么，怎么解决的

### 你还有什么要问面试官的
   1. 人员组织架构  前后端配比  
   2. 需求周期  
   3. 面试中没有回答好的问题  
   4. 工作流程  
   5. 福利待遇、新员工培训

### 对未来的职业规划

### 离职原因