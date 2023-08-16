# 常见报错

1.  Syntax Error: Error: PostCSS received undefined instead of CSS string

::: tip 解决方法
卸载当前版本的node-sass和sass-loader,因为版本和当前的不兼容,安装对应版本的包即可。
:::

```

#卸载node-sas和sass-loader
npm uninstall node-sass
npm uninstall sass-loader

#安装node-sas和sass-loader
npm install node-sass@4.14.1
npm install sass-loader@8.0.0
```

2.  this.getOptions is not a function

::: warning 错误
sass-loader版本过高，不兼容 getOptions 函数方法，所以需要对 less-loader 进行降级处理
:::

::: tip 解决方法
通过 npm uninstall sass-loader 命令卸载原版本的 sass-loader，然后 通过 npm install sass-loader@10.1.0 命令下载降级版本的 sass-loader
:::

3.  Avoid using non-primitive value as key, use string/number value instead.

::: warning 错误
v-for绑定的key值重复
:::

::: tip 解决方法
保证key值是唯一的
:::

4.  Error in render: "TypeError: Cannot read property 'length' of null"
::: warning 错误
render中出错：“TypeError:无法读取null的属性'length'”  
初始值赋值错误，在template中使用了length属性，但是初始赋值为null，应该为[]
:::

::: tip 解决方法
初始值赋值为[]
:::