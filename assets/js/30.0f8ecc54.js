(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{670:function(s,n,r){"use strict";r.r(n);var e=r(88),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,r=s._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"前端相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端相关"}},[s._v("#")]),s._v(" 前端相关")]),s._v(" "),r("h2",{attrs:{id:"冷门小知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#冷门小知识"}},[s._v("#")]),s._v(" 冷门小知识")]),s._v(" "),r("ol",[r("li",[s._v("arr.forEach()有第二个参数，是用来改变this指向的")])]),s._v(" "),r("h2",{attrs:{id:"错误捕获"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误捕获"}},[s._v("#")]),s._v(" 错误捕获")]),s._v(" "),r("ol",[r("li",[r("strong",[s._v("try-catch 语句")]),r("br"),s._v("\nJavaScript 中处理异常的一种标准方式")])]),s._v(" "),r("ul",[r("li",[s._v("基础使用")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("try {\n  // 可能会导致错误的代码\n} catch (error) {\n  // 在错误发生时怎么处理\n}\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("ul",[r("li",[r("p",[s._v("如果 try 块中的任何代码发生了错误，就会立即退出代码执行过程，然后执行 catch 块。此时 catch 块会接收到一个包含错误信息的对象，这个对象中包含的信息因浏览器而异，但共同的是有一个保存着错误信息的 message 属性。")])]),s._v(" "),r("li",[r("p",[s._v("finally 子句在 try-catch 语句中是可选的，但是 finally 子句一经使用，其代码无论如何都会执行。只要代码中包含 finally 子句，则无论 try 或 catch 语句中包含什么代码——甚至是 return 语句，都不会阻止 finally 子句执行。")])])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('function testFinally {\n  try {\n    return "出去玩";\n  } catch (error) {\n    return "看电视";\n  } finally {\n    return "做作业";\n  }\n  return "睡觉";\n}\n\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br")])]),r("p",[s._v('表面上调用这个函数会返回 "出去玩"，因为返回 "出去玩" 的语句位于 try 语句块中，而执行此语句又不会出错。'),r("br"),s._v('\n实际上返回 "做作业"，因为最后还有 finally 子句，结果就会导致 try 块里的 return 语句被忽略，也就是说调用的结果只能返回 "做作业"。'),r("br"),s._v('\n如果把 finally 语句拿掉，这个函数将返回 "出去玩"。'),r("br"),s._v("\n因此，在使用 finally 子句之前，一定要非常清楚你想让代码怎么样。（思考一下如果 catch 块和 finally 块都抛出异常，catch 块的异常是否能抛出）")]),s._v(" "),r("ul",[r("li",[s._v("try-catch 无法处理异步代码和一些其他场景")])]),s._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("strong",[s._v("window.onerror")])])]),s._v(" "),r("ul",[r("li",[s._v("当 JS 运行时错误发生时，window 会触发一个 ErrorEvent 接口的 error 事件，并执行window.onerror()。")]),s._v(" "),r("li",[s._v("在JS代码前面加入这个函数，即可捕捉到JS执行错误的详细信息")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('window.onerror = function (message, source, lineno, colno, error) {\n  console.log("捕获到异常：", { message, source, lineno, colno, error });\n};\n\n/*\nmessage 错误提示信息   \nsource 错误文件在硬盘的位置    \nlineno 错误代码所在行数     \nerror 错误信息+位置 \n*/\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])]),r("p",[r("strong",[s._v("同步错误可以捕获到，但是，window.error 无法捕获静态资源异常和 JS 代码错误")])]),s._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("strong",[s._v("静态资源加载异常")])])]),s._v(" "),r("ul",[r("li",[s._v("onerror 来捕获")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('<script>  \nfunction errorHandler(error) {\n    console.log("捕获到静态资源加载异常", error);\n  }\n<\/script>\n\n<script src="http://cdn.xxx.com/js/test.js" onerror="errorHandler(this)"><\/script>\n<link rel="stylesheet" href="http://cdn.xxx.com/styles/test.css" onerror="errorHandler(this)">\n\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br")])]),r("p",[s._v("这样可以拿到静态资源的错误，但缺点很明显，代码的侵入性太强了，每一个静态资源标签都要加上 onerror 方法。")]),s._v(" "),r("ul",[r("li",[s._v('addEventListener("error")')])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("<script> \nwindow.addEventListener('error', (error) => {\n    console.log('捕获到异常：', error);\n}, true)\n<\/script>\n\n<img src=\"https://itemcdn.zcycdn.com/15af41ec-e6cb-4478-8fad-1a47402f0f25.png\">\n\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])]),r("p",[s._v("由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 的状态是 404 还是其他比如 500 等等，所以还需要配合服务端日志才进行排查分析才可以。")]),s._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("strong",[s._v("promise异常")])])]),s._v(" "),r("blockquote",[r("p",[s._v("Promise 中的异常不能被 try-catch 和 window.onerror 捕获，这时候我们就需要监听 unhandledrejection 来帮我们捕获这部分错误。")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('    window.addEventListener("unhandledrejection", function (e) {\n        e.preventDefault();\n        console.log("捕获到 promise 错误了");\n        console.log("错误的原因是", e.reason);\n        console.log("Promise 对象是", e.promise);\n        return true;\n    });\n\n\n    Promise.reject("promise error");\n    new Promise((resolve, reject) => {\n        reject("promise error");\n    });\n    new Promise((resolve) => {\n        resolve();\n    }).then(() => {\n        throw "promise error";\n    });\n\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br")])]),r("ol",{attrs:{start:"5"}},[r("li",[s._v("Vue 异常")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('Vue.config.errorHandler = (err, vm, info) => {\n  console.error("通过vue errorHandler捕获的错误");\n  console.error(err);\n  console.error(vm);\n  console.error(info);\n};\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])]),r("ol",{attrs:{start:"6"}},[r("li",[s._v("axios请求异常"),r("br"),s._v("\n就需要我们常用的请求拦截来统一处理错误码了")])]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('axios.interceptors.response.use(\n  function (response) {\n    //任何超出2xx范围的状态代码都会触发此功能\n    //处理响应错误\n  },\n  function (error) {\n    if (error.response.status === 401) {\n      goLogin(); // 跳转登录页\n    } else if (error.response.status === 502) {\n      alert(error.response.data.message || "系统升级中，请稍后重试");\n    }\n    return Promise.reject(error.response);\n  }\n);\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br")])]),r("ol",{attrs:{start:"7"}},[r("li",[s._v("小结")])]),s._v(" "),r("blockquote",[r("p",[s._v("异常一共七大类，处理时需分清是致命错误还是非致命错误。")])]),s._v(" "),r("ul",[r("li",[s._v("可疑区域增加 try-catch")]),s._v(" "),r("li",[s._v("全局监控 JS 异常 window.onerror")]),s._v(" "),r("li",[s._v("全局监控静态资源异常 window.addEventListener")]),s._v(" "),r("li",[s._v("捕获没有 catch 的 Promise 异常用 unhandledrejection")]),s._v(" "),r("li",[s._v("Vue errorHandler 和 React componentDidCatch")]),s._v(" "),r("li",[s._v("Axios 请求统一异常处理用拦截器 interceptors")]),s._v(" "),r("li",[s._v("使用日志监控服务收集用户错误信息")])])])}),[],!1,null,null,null);n.default=a.exports}}]);