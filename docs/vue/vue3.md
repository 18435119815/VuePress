
## vue3新特性  

-  采用渐进式开发，向下兼容（Vue3 支持大多数 Vue2 的特性）
-  各方面性能的提升
    1.  打包体积缩小41%
    2.  初次渲染快55%
    3.  更新快133%
    4.  内存使用减少54%
-   Composition API（解决复杂组件的阅读和复用问题）
-   Teleport(瞬移组件)、Suspense(解决异步加载组件问题)和全局 API 的修改和优化
-   更好TypeScript支持

## 项目搭建
1.  vue create 项目名称(或者vue ui打开图形构建工具，依次操作)
2.  选择配置项->手动选择->根据需求空格选中
3.  选择项目所使用的vue版本(3.x) 
4.  是否需要使用class-style
5.  是否需要使用TypeScript和Babel的形式编译 JSX
6.  ESLint配置（选第一项就好）
7.  选择增加lint的特性功能
```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save         //保存的时候进行Lint
 ( ) Lint and fix on commit   //需要帮你进行fix（修理），这项我们不进行选择

```
8.  选择这些配置文件时单独存放，还是直接存放在package.json文件里。这里选择放在单独的文件里
```
Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files

```
9.  是否需要将此次配置保存下来，方便下次使用
```
Save this as a preset for future projects? (y/N)
```
10. 如果你同时安装了npm和yarn来个包管理软件，它还会作最后一次询问，让你选择使用什么进行下载。
```
? Pick the package manager to use when installing dependencies:
> Use Yarn
  Use NPM
```

## 基础知识
### ref和setup函数
- 项目中需要在template中使用的变量，都需要使用ref函数处理
```
const name = ref('哎呦喂')
const arr =  ref(["乐乐", "菁菁", "菲菲"]);
```
- data和methods属性中的变量方法全都写在setup函数中
- return出去的数据和方法，在模板中才可以使用，这样可以精准的控制暴漏的变量和方法  
下面实现一个简单的功能，初步感受一下（点击按钮选择一个女孩成为自己的妻子）
```
<template>
  <div>
    <p>请选择一个女孩成为你的妻子</p>
    <button
      v-for="(item, index) in girls"
      :key="index"
      @click="selectGirlFun(index)"
    >
      {{ item }}
    </button>

    <p>现在{{ selectGirl }}已经是你的妻子了，希望你们可以一直幸福的走下去</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["乐乐", "菁菁", "菲菲"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];    //被ref处理过的值，赋值和取值都需要.value，暂时理解为之前的this.变成了.value
    };
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },
});
</script>
```

### reactive和toRefs
如果感觉上面的那种方式麻烦又陌生的话，可以试试reactive函数，会有vue2的感觉  
直接上实例
```
//引入reactive
import { defineComponent, ref, reactive } from "vue";

//setup中
 setup() {
    const data = reactive({       //用reactive包裹要用到的变量和方法,类似于之前vue2的data了
      girls: ref(["乐乐", "菁菁", "菲菲"]),
      selectGirl: ref(""),
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];  //此处不再需要.value，而是data.  html中的引用也需要变成data.
      },
    });

    return{data}                  //直接return一个data就好了
  },

//html中的引用加上data.前缀
<button
  v-for="(item, index) in data.girls"
  :key="index"
  @click="data.selectGirlFun(index)"
>
  {{ item }}
</button>

<p>现在{{ data.selectGirl }}已经是你的妻子了，希望你们可以一直幸福的走下去</p>
```
上面这个示例还有一个严重的缺陷就是html中变量的引用不再像之前那么方便了，其实也有解决办法，那就是toRefs
```
//导入
import {  ref, reactive, toRefs } from "vue";

//将data用toRefs处理
const dataRefs = toRefs(data)
//结构导出
return{...dataRefs}
//这样html模版中就不需要加变量前缀了，可以直接使用girls  selectGirl  selectGirlFun
```

### 如何选择 Ref()和 reactive()
网络上对这两个方法的争论还是不少的，但到目前为止，还没有什么实质性的理论到底是用Ref()好，还是reactive()好，也就是两种方法都可以。他们的作用都是生成响应式对象，目前来看只是编写上有所不同。

### 生命周期和钩子函数

- setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
- onBeforeMount() : 组件挂载到节点上之前执行的函数。
- onMounted() : 组件挂载完成后执行的函数。
- onBeforeUpdate(): 组件更新之前执行的函数。
- onUpdated(): 组件更新完成之后执行的函数。
- onBeforeUnmount(): 组件卸载之前执行的函数。
- onUnmounted(): 组件卸载完成后执行的函数
- onActivated(): 被包含在keep-alive中的组件，会多出两个生命周期钩子函数。被激活时执行。
- onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
- onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数

**注意**
- vue3中依旧可以使用vue2中的钩子函数，而且不必单独引入，也不必写在setup函数中，vue3自己的钩子函数必须单独引入
- vue3中的钩子函数会比与之相对应的vue2钩子函数先调用(比如onCreated会比created先调用)
- setup 这个函数是在beforeCreate和created之前运行的,所以你可以用它来代替这两个钩子函数。
- vue2和vue3的钩子函数可以混用，但是最好不要


#### onRenderTracked()和 onRenderTriggered()
1.  onRenderTracked 状态跟踪  
它会跟踪页面上所有响应式变量和方法的状态，也就是我们用return返回去的值，他都会跟踪。只要页面有update的情况，他就会跟踪，然后生成一个event对象
2.  onRenderTriggered状态触发  
它不会跟踪每一个值，而是给你变化值的信息，并且新值和旧值都会给你明确的展示出来。

3.  对 event 对象属性的详细介绍：
  - key 哪个变量发生了变化
  - newValue 更新后变量的值
  - oldValue 更新前变量的值
  - target 目前页面中的响应变量和函数

```
import { onRenderTracked ,onRenderTriggered,} from "vue";

setup(){
  onRenderTracked((event) => {
    console.log("状态跟踪组件----------->");
    console.log(event);
  })

  onRenderTriggered((event) => {
    console.log("状态触发组件--------------->");
    console.log(event);
  });
}
```

### 功能独立模块化
有些功能我们可能很多地方都会用到，类似于之前的组件，在vue3中我们是这样使用的（示例：点击显示当前时间功能）
- 在src/hooks文件夹下新建useNowTime文件夹

```
//引入ref
import {  ref } from "vue";

//功能逻辑
const nowTime = ref('00:00:00')
const getNowTime = ()=>{
  const time = new Date();
  const hour = time.getHours()<10?`0+${time.getHours()}`:time.getHours();
  const min = time.getMinutes()<10?`0+${time.getMinutes()}`:time.getMinutes();
  const sec = time.getSeconds()<10?`0+${time.getSeconds()}`:time.getSeconds();
  nowTime.value = hour+':'+min+':'+sec;
  setTimeout(getNowTime,1000)
}

//导出
export {
    nowTime,
    getNowTime
}

```
- 在需要用到的vue文件中
```
//引入变量和方法
import {nowTime,getNowTime} from './hooks/useNowTime'

export default {
  name: "App",
  setup() {
    //一定记得return出去
    return{
      nowTime,
      getNowTime
    }
  },
};

//然后就可以在template中使用啦
```

- 