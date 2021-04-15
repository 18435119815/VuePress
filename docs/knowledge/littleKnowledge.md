# 前端相关

## 错误捕获

1.  **try-catch 语句**  
JavaScript 中处理异常的一种标准方式
- 基础使用
```
try {
  // 可能会导致错误的代码
} catch (error) {
  // 在错误发生时怎么处理
}
```

- 如果 try 块中的任何代码发生了错误，就会立即退出代码执行过程，然后执行 catch 块。此时 catch 块会接收到一个包含错误信息的对象，这个对象中包含的信息因浏览器而异，但共同的是有一个保存着错误信息的 message 属性。

- finally 子句在 try-catch 语句中是可选的，但是 finally 子句一经使用，其代码无论如何都会执行。只要代码中包含 finally 子句，则无论 try 或 catch 语句中包含什么代码——甚至是 return 语句，都不会阻止 finally 子句执行。
```
function testFinally {
  try {
    return "出去玩";
  } catch (error) {
    return "看电视";
  } finally {
    return "做作业";
  }
  return "睡觉";
}

```
表面上调用这个函数会返回 "出去玩"，因为返回 "出去玩" 的语句位于 try 语句块中，而执行此语句又不会出错。  
实际上返回 "做作业"，因为最后还有 finally 子句，结果就会导致 try 块里的 return 语句被忽略，也就是说调用的结果只能返回 "做作业"。  
如果把 finally 语句拿掉，这个函数将返回 "出去玩"。  
因此，在使用 finally 子句之前，一定要非常清楚你想让代码怎么样。（思考一下如果 catch 块和 finally 块都抛出异常，catch 块的异常是否能抛出）  
- try-catch 无法处理异步代码和一些其他场景

2.  **window.onerror**  
- 当 JS 运行时错误发生时，window 会触发一个 ErrorEvent 接口的 error 事件，并执行window.onerror()。
- 在JS代码前面加入这个函数，即可捕捉到JS执行错误的详细信息
```
window.onerror = function (message, source, lineno, colno, error) {
  console.log("捕获到异常：", { message, source, lineno, colno, error });
};

/*
message 错误提示信息   
source 错误文件在硬盘的位置    
lineno 错误代码所在行数     
error 错误信息+位置 
*/
```

**同步错误可以捕获到，但是，window.error 无法捕获静态资源异常和 JS 代码错误**

3.  **静态资源加载异常**  
- onerror 来捕获
```
<script>  
function errorHandler(error) {
    console.log("捕获到静态资源加载异常", error);
  }
</script>

<script src="http://cdn.xxx.com/js/test.js" onerror="errorHandler(this)"></script>
<link rel="stylesheet" href="http://cdn.xxx.com/styles/test.css" onerror="errorHandler(this)">

```
这样可以拿到静态资源的错误，但缺点很明显，代码的侵入性太强了，每一个静态资源标签都要加上 onerror 方法。

-  addEventListener("error")
```
<script> 
window.addEventListener('error', (error) => {
    console.log('捕获到异常：', error);
}, true)
</script>

<img src="https://itemcdn.zcycdn.com/15af41ec-e6cb-4478-8fad-1a47402f0f25.png">

```
由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 的状态是 404 还是其他比如 500 等等，所以还需要配合服务端日志才进行排查分析才可以。

4.  **promise异常**
>Promise 中的异常不能被 try-catch 和 window.onerror 捕获，这时候我们就需要监听 unhandledrejection 来帮我们捕获这部分错误。  

```
    window.addEventListener("unhandledrejection", function (e) {
        e.preventDefault();
        console.log("捕获到 promise 错误了");
        console.log("错误的原因是", e.reason);
        console.log("Promise 对象是", e.promise);
        return true;
    });


    Promise.reject("promise error");
    new Promise((resolve, reject) => {
        reject("promise error");
    });
    new Promise((resolve) => {
        resolve();
    }).then(() => {
        throw "promise error";
    });

```

5.  Vue 异常
```
Vue.config.errorHandler = (err, vm, info) => {
  console.error("通过vue errorHandler捕获的错误");
  console.error(err);
  console.error(vm);
  console.error(info);
};
```

6.  axios请求异常  
就需要我们常用的请求拦截来统一处理错误码了
```
axios.interceptors.response.use(
  function (response) {
    //任何超出2xx范围的状态代码都会触发此功能
    //处理响应错误
  },
  function (error) {
    if (error.response.status === 401) {
      goLogin(); // 跳转登录页
    } else if (error.response.status === 502) {
      alert(error.response.data.message || "系统升级中，请稍后重试");
    }
    return Promise.reject(error.response);
  }
);
```

7.  小结    
>异常一共七大类，处理时需分清是致命错误还是非致命错误。

- 可疑区域增加 try-catch
- 全局监控 JS 异常 window.onerror
- 全局监控静态资源异常 window.addEventListener
- 捕获没有 catch 的 Promise 异常用 unhandledrejection
- Vue errorHandler 和 React componentDidCatch
- Axios 请求统一异常处理用拦截器 interceptors
- 使用日志监控服务收集用户错误信息