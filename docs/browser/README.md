# 浏览器

## 那些你可能不知道的神奇操作！

> 我是在搜索看伴娘的过程中发现这个网站的，太神奇了我的天!原来还有这么多神奇的操作我都没见过，快来看看~虽说没什么实际作用，但还是挺好玩的
---
<br><br>

### 谷歌调试工具

**打开命令菜单**：Ctrl + Shift + P(windows)  Command + Shift + P(Mac))  

**截屏**：打开命令菜单，输入"screenshot"，下方会出现四个选择项，第一个是手动截屏；第二个是截整个网页的屏幕，包括需要滑动浏览的部分；第三个是节点截屏，先用调试台箭头选择需要截屏的节点，再输入命令，即可。

#### css调试

#####   快速查找节点
1.  Elements界面 ctr+F 输入查找
2.  Console界面  inspect(document.getElementById('')) 快速定位

### 在浏览器地址直接运行JS代码
```
javascript:alert('hello from address bar :)')
```  
将上面的代码贴到浏览器地址栏回车后alert正常执行，一个弹窗神现。

BUT!!!!  注意这里:  
如果是通过 复制粘贴代码到浏览器地址栏的话，IE及Chrome会自动去掉代码开头的javascript:，所以需要自己手动添加起来才能正确执行(自己试一下效果就能看到啦~)而Firefox中虽然不会自动去掉，但它根本就不支持在地址栏运行JS代码  


![vuepress](/assets/img/addressRunJS.jpg) 

---
<br><br>



### 在浏览器地址栏运行HTML代码
```
data:text/html,<h1>Hello, world!</h1>
```  
地址栏输入以上代码然后回车，会出现指定的页面内容。


![vuepress](/assets/img/addressRunHTML.jpg) 

---
<br><br>



### 把浏览器当编辑器
```
data:text/html, <html contenteditable>
```  

地址栏输入以上代码然后回车，浏览器变成了一个原始而简单的编辑器，与Windows自带的notepad一样

归根结底是因为HTML5中新加的contenteditable属性，当元素指定了该属性后，元素的内容成为可编辑状态

所以！

当我们将以下代码放到F12控制台执行后，整个页面将变得可编辑，随意践踏吧~
```
document.body.contentEditable='true';
```
<br>

![vuepress](/assets/img/browserAsEdit.jpg) 
<br><br><br>




## JavaScript那些你可能不知道的神奇操作！ 
  
### 不声明第三个变量的值交换
我们都知道交换两个变量值的常规做法，那就是声明一个中间变量来暂存.(下面这种方法真的万万没想到，牛的)
```
var a=1,b=2;
a=[b,b=a][0];  

console.log(a,b);   //2,1
```

### 利用a标签解析URL中的各项参数

很多时候我们会从一个URL中提取域名，查询关键字，变量参数值等，而万万没想到可以让浏览器方便地帮我们完成这一任务而不用我们写正则去抓取。方法就在JS代码里先创建一个a标签然后将需要解析的URL赋值给a的href属性，然后就得到了一切我们想要的了。

```
var a = document.createElement('a');
a.href = 'http://www.cnblogs.com/wayou/p/';
console.log(a.host);  //www.cnblogs.com
```

可以利用这个封装一个函数出来，下面是代码和示例(转子一个外国博主)

  >方法
  ```
  function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(//([^/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^/])/,'/$1'),
        relative: (a.href.match(/tps?://[^/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^//,'').split('/')
    };
}
```
>示例
  ```
    var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
 
    myURL.file;     // = 'index.html'
    myURL.hash;     // = 'top'
    myURL.host;     // = 'abc.com'
    myURL.query;    // = '?id=255&m=hello'
    myURL.params;   // = Object = { id: 255, m: hello }
    myURL.path;     // = '/dir/index.html'
    myURL.segments; // = Array = ['dir', 'index.html']
    myURL.port;     // = '8080'
    myURL.protocol; // = 'http'
    myURL.source;   // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'

  ```

---
<br><br>

###  页面拥有ID的元素会创建全局变量
在一张HTML页面中，所有设置了ID属性的元素会在JavaScript的执行环境中创建对应的全局变量，这意味着document.getElementById像人的阑尾一样显得多余了。但实际项目中最好老老实实该怎么写就怎么写，毕竟常规代码出乱子的机会要小得多。
```
<div id="sample"></div>
<script type="text/javascript">
    console.log(sample); //<div id="sample"></div>
</script>
```

---
<br><br>



### 加载CDN文件时，可以省掉HTTP标识
现在很流行的CDN即从专门的服务器加载一些通用的JS和CSS文件，出于安全考虑有的CDN服务器使用HTTPS方式连接，而有的是传统的HTTP，其实我们在使用时可以忽略掉这个，将它从URL中省去。
```
<script src="//domain.com/../path/to/script.js"></script>
```
---
<br><br>



### 利用script标签保存任意信息
将script标签设置为type='text'然后可以在里面保存任意信息，之后可以在JavaScript代码中很方便地获取。

```
<script type="text" id="template">
	<h1>This won't display</h1>
</script>
 

var text = document.getElementById('template').innerHTML
```
---
<br><br>



### console.table
Chrome专属，IE绕道的console方法。可以将JavaScript关联数组以表格形式输出到浏览器console，效果很惊赞，界面很美观。

![vuepress](/assets/img/consoleTable.jpg)

<br><br><br>




## CSS那些你可能不知道的神奇操作！ 



### 简单的文字模糊效果
以下两行简单的CSS3代码可达到将文字模糊化处理的目的，出来的效果有点像使用PS的滤镜，so cool!
```
p {
    color: transparent;
    text-shadow: #111 0 0 5px;
  } 
```
<!-- ![vuepress](/assets/img/textVague.jpg) -->
<img src="/assets/img/textVague.jpg" width="200" height="auto" align="middle" />

<br><br>

### 禁止鼠标显示 
```
*{
    cursor: none!important;
 }
```

<br><br>

### 实时编辑CSS
<br>
通过设置style标签的display:block样式可以让页面的style标签显示出来，并且加上contentEditable属性后可以让样式成为可编辑状态，更改后的样式效果也是实时更新呈现的。此技巧在IE下无效。

```
<body>

    <style  contentEditable style="display: block;">
        body { color: blue; }
        p{display: block; width: 20px;text-align: center;}
    </style>

    <p>哎呦喂</p>
    
</body>
```
![vuepress](/assets/img/cssWatch.jpg)