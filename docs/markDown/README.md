# markdown基础用法演示 
> 引用描述


<font color=#0099ff style='fontSize:25px' face="正楷">hash</font> 

``` 单行代码 ```

``` javascript 
		var a = document
```
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>               重启电脑
<kbd>src</kbd>-><kbd> wxcomponents</kbd>-><kbd>vant</kbd>   目录结构

[百度](www.baidu.com)

|姓名|年龄|血型|性别|
|--	|--	|--	|--	|
|哎呦喂|25|AB|男|
|周杰伦|38|O|男|
|林俊杰|35|O|男|

<img src="/assets/img/hero.png" width="100" height="auto" align="middle" />


![vuepress](/assets/img/hero.png) 


[去百度](https://www.baidu.com)  

&nbsp; 增加空白行

&emsp; 增加空格

自定义容器
::: tip 提示
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 详情
这是一个详情块，在 IE / Edge 中不生效
:::


语法高亮

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```