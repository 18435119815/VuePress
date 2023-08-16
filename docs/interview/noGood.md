## 还没掌握好的知识点

### VUE
1.  组件传值中的$attrs\$listerners，$root
2.  .sync修饰符
3.  vuex中的getter也可以写get和set嘛？

### JS
1.  手写call\apply\bind

### webpack


## 容易遗漏的知识点

### VUE
1.  在created这里更改数据不会触发updated函数。非要想在这里访问dom，可以通过vm.$nextTick来访问。

### JS
1.  bind属于硬绑定，返回的 boundFunction 的 this 指向无法再次通过bind、apply或 call 修改；call与apply的绑定只适用当前调用，调用完就没了，下次要用还得再次绑。
2.  sessionStorage不能设置过期时间