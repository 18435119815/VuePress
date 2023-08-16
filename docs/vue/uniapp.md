# 使用uniapp开发微信小程序



## 初始流程

### 创建项目
1.  全局安装vue脚手架  
`npm install -g @vue/cli`
2.  使用uni-app创建项目  
`vue create -p dcloudio/uni-preset-vue my-project`
3.  运行  
`npm run dev:mp-weixin`
4.  在小程序开发工具中导入项目
打开开发者工具->导入项目->dist->dev->mp-weixin

### 样式
1.  sass
安装`npm install sass-loader node-sass`  
使用`<style lang='scss'>`即可  
uni-app内置sass配置  
2.  单位
rpx和vw/vh都支持  

### 全局数据
1.  vue全局挂载`vue.prototype.XX = ''`
2.  小程序全局数据
```
APP.vue中的globalData:{}

赋值 getApp().globalData.text = 'test'
```

### 生命周期
1.  uni-app结合了vue和小程序的生命周期
2.  全局APP中使用onLaunch表示应用启动时 onshow、onHide当用户切换外部应用时生效 
3.  页面中 onLoad表示页面加载完毕时  onshow表示页面显示时
4.  组件中依然使用vue生命周期，使用onLoad是无效的


### 布局
1.  **[底部导航](https://uniapp.dcloud.io/collocation/pages?id=tabbar)**
```
pages.json中

    "tabBar": {
	    "color": "#7A7E83",					//默认文字颜色
	    "selectedColor": "#3cc51f",			//选中文字颜色
	    "borderStyle": "black",				//tabbar 上边框的颜色
	    "backgroundColor": "#ffffff",		//底部导航背景颜色
	    "list": [{							//导航对应的文件地址，icon地址，文字
	        "pagePath": "pages/demo/index",
	        "iconPath": "static/image/time.jpg",
	        "selectedIconPath": "static/image/time.jpg",
	        "text": "组件"
	    }, {
	        "pagePath": "pages/index/index",
	        "iconPath": "static/image/time.jpg",
	        "selectedIconPath": "static/image/time.jpg",
	        "text": "接口"
	    }]
	}

```
2.  **引入字体图标和默认样式清除**
- 创建目录  
<kbd>根目录</kbd>-><kbd>src</kbd>-><kbd>styles</kbd>-><kbd>iconfont.wxss</kbd>

- 复制iconfont生成的在线代码到<kbd>iconfont.wxss</kbd>中  
<img src="/assets/img/uni-app/uni-app1.jpg" width="500" height="auto" align="middle" />

- 在app.vue中引入样式
```
<style>
	@import "./styles/iconfont.wxss";
</style>
```

- 使用  
`<text class="iconfont icon-tab"></text>`

- 默认样式清除  
小程序不支持*通配符，所以需要手写每个标签
<kbd>根目录</kbd>-><kbd>src</kbd>-><kbd>styles</kbd>-><kbd>base.wxss</kbd>

```
view,
text,
navigator,
input,
image,
swiper,
swiper-item,
scroll-view,
page {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

page{
	font-size: 28rpx;
	color: #666;
}
image{
	width: 100%;
	display: block;
}
```


3.	**uni-ui的使用**

[文档地址](https://uniapp.dcloud.io/component/README?id=uniui)  
组件->拓展组件->[npm安装参考](https://ext.dcloud.net.cn/plugin?id=55)->[详细文档](https://www.npmjs.com/package/@dcloudio/uni-ui)  


4.	**请求封装**
封装原因：
1.	原生wx请求不支持promise
2.	uni-api的请求不方便添加loading效果
3.	uni-api的请求返回的是一个数组，不方便

<kbd>src</kbd>-><kbd>utils</kbd>-><kbd>request.js</kbd>

```
export default (params)=>{
	return new Promise((reslove,reject)=>{
		uni.showLoading({
			title:"加载中..."
		})
		
		wx.request({
			...params,
			success(res){
				reslove(res)
			},
			fail(err){
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})	
	})
}

```
 



### 标签功能改动
1.	跳转
**navigator**
::: tip 跳转
该组件类似HTML中的`<a></a>`标签，但只能跳转本地页面。目标页面必须在pages.json中注册。
通过url属性来跳转

动态跳转
```
//路径为根目录的具体路径  参数使用?拼接
uni.navigateTo({
	url: '/packagePages/pages/ApplicationDetail/index?depType=code' 
});

//接收参数  在目标页面的onLoad函数中通过options接收
onLoad: function(option) { 	//option为object类型，会序列化上个页面传递的参数
	console.log(option); 	//打印出上个页面传递的参数。
}

//返回上一页
uni.navigateBack({
    delta: 1
});
```

:::
2.	请求
**uni.request**
```
uni.request({
    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
    data: {},
    header: {
        'custom-header': 'hello' //自定义请求头信息
    },
    success: (res) => {
        console.log(res.data);
    }
});
```

### 引入外部组件
以vant-weapp为例
1.	创建目录  
<kbd>src</kbd>-><kbd> wxcomponents</kbd>-><kbd>vant</kbd>  
<img src="/assets/img/uni-app/uni-app2.jpg" width="300" height="auto" align="middle" />

2.	项目中引入vant-weapp组件  
在[vant-weapp](https://github.com/youzan/vant-weapp)的GitHub [Releases](https://github.com/youzan/vant-weapp/releases)版块下载最新的zip包  
解压下载文件,将dist目录拷贝到刚才创建vant目录中  
<img src="/assets/img/uni-app/uni-app3.jpg" width="500" height="auto" align="middle" />

3.	在配置中注册组件
- 将需要频繁使用的组件在pages.json的globalStyle的usingComponents中引入，如下图
<img src="/assets/img/uni-app/uni-app4.jpg" width="500" height="auto" align="middle" />

- 需要单独引入的则写入pages.json的pages中对应页面的style->usingComponents即可（注意加入对应小程序的模块名称）  
<img src="/assets/img/uni-app/uni-app5.jpg" width="500" height="auto" align="middle" />
- 如果不生效，试着在App.Vue文件中style部分引入UI组件库的 样式文件  
`@import "/wxcomponents/vant/dist/common/index.wxss";`  
- 接着就可以随意使用啦~  
`<van-button type="default">默认按钮</van-button>`  

### 分包
>小程序打包体积有大小限制，超过2M的就不能在线预览和真机调试了。

所以我们要做的除了对图片进行压缩处理之外，还可以对页面进行分包处理。简单来讲就是主要页面放在主目录的pages里面，次要页面放在分包目录中，需要的时候在加载进来。

::: details 详细步骤
1.	在pages同级创建分包目录packagePages
2.	<kbd>packagePages</kbd>下创建<kbd> pages</kbd>文件夹（放置页面文件）和<kbd>static</kbd>文件夹（放置静态资源）
3.	<kbd>pages.json</kbd>中增加分包配置
```
//分包配置
"subPackages":[{
		"root": "packagePages", // 当前分包的根目录文件
		"pages":[{  			// 当前分包的页面配置
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "分包测试页面"
			}
		}]
}],

```
 
4.	<kbd>manifest.json</kbd>-><kbd> 源码视图</kbd>-><kbd>mp-weixin</kbd>对象中增加分包优化配置  
`"optimization":{"subPackages":true}`
:::

## 小知识
1.  微信小程序不支持css的*通配符
2.	图片视频等静态文件只能放在static目录下
3.	css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下。
4.	uni-app内置了vuex，所以可以直接使用，不用安装
5.	跳转Tabbar页面时，不能使用uni.navigateTo()，需要用uni.switchTab();
4.	常用api
```
//本地缓存
uni.setStorageSync('key', res.result.id);
uni.getStorageSync('key')

[自定义分享内容](https://uniapp.dcloud.io/api/plugins/share?id=onshareappmessage)
  //先打开分享按钮（onLoad或者mounted中）
  wx.showShareMenu({
	withShareTicket: true,
	menus: ['shareAppMessage', 'shareTimeline']
  })
  
  //自定义内容(跟onLoad或者mounted同级)
  onShareAppMessage(res) {
    if (res.from === 'button') {// 来自页面内分享按钮
      console.log(res.target)
    }
    return {
      title: '自定义分享标题',
      path: '/pages/test/test?id=123'
    }
  }

注意onShareAppMessage已经没有成功失败的回调了，是因为官方为了防止诱导分享

//动态修改页面标题
uni.setNavigationBarTitle({
	title:"改了  有什么好说的"
})

//动态跳转
uni.navigateTo({
	url:"../index/index"
})

//返回上一页
uni.navigateBack({
    delta: 1
});

//下载图片和视频
uni.downloadFile({
	url:""
})
then可以接收到一个数组，第二项为图片或者视频在小程序中的临时路径，需要将它下载到本地
uni.saveImageToPhotosAlbum({	//图片保存到本地
	filePath:""					//此处传入上面得到的临时地址
})
uni.saveVideoToPhotosAlbum({	//视频保存到本地
	filePath:""
})
```
5.	常用事件
- 手指按下屏幕 touchstart
- 手指离开屏幕 touchend
- 手指在屏幕上的坐标 event.changedTouches[0].clientX和clientY 
```
@touchstart='touchStart'

touchStart(event){
	//手指按下时的横纵坐标
	console.log(event.changedTouches[0].clientX);
	console.log(event.changedTouches[0].clientY);
}
```

## 排坑
1.	未找到 van-toast 节点，请确认 selector 及 context 是否正确
::: tip 问题描述
在uni-app开发的小程序中使用toast组件，先在全局globalStyle中注册了van-toast,结果发现报错  
查阅文档才发现，还需要在当前页面单独引入  
`import Toast from '@/wxcomponents/vant/dist/toast/toast'`  
结果引入之后就报了上面的错误   百思不得其解  
最后百度了一下，发现居然还要在template中加入van-toast标签才可以  
`<van-toast id="van-toast" />`  
就离谱
:::



2.	跳转失效
登录之后想要跳转到首页，但是怎么都没反应，控制台还报了警告,也看不懂
```
Content Security Policy of your site blocks the use of 'eval' in JavaScript
Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute
```
最后查阅得知，想要跳转到Tabbar中注册的页面时，不能使用uni.navigateTo()，需要用uni.switchTab();

3.	input框初次输入一直会出现[object object]
<img src="/assets/img/uni-app/uni-app6.jpg" width="300" height="auto" align="middle" />

表单组件使用的是uni-ui的forms组件，但是输入框用的是vant-weapp的，按照uni-forms的用法执行后就出现这种情况，排查了各种问题  
初始值，传入的值，都没什么问题，最后突然想起来是不是绑定的值出了问题，查阅了vant-weapp的filed组件的用法，发现了问题所在  
`<van-field v-model="formData.captcha">`  
应该按照vant的用法，使用:value绑定值，而不是v-model  
呼~累  

4.	本地资源图片无法通过 WXSS 获取，可以使用...
::: tip 问题描述
报错原因是因为在css中使用了背景图片
`background-image: url("../../static/images/bg/manage_bg_fxq750.jpg");`

最简单的解决办法是将样式写在HTML中（行内样式）即可。  
转成base64会导致代码量大大增加，不太合理。  
:::

10.	scss语法报错
::: tip 问题描述
明明安装了node-sass和sass-loader，但是编译完之后，小程序开发者工具始终会报错。  

位置就是使用了sass语法的地方。   

百思不得其解+1。  

重装了HBuilderX的sass编译器，`<style>`标签里也加了lang='scss'，仍然没有解决

最后百度得知原来是引入方式错误了
:::

```
//错误写法
<style lang="scss">
	@import url("@/styles/common.scss");
	@import url("@/styles/vant.scss");
</style>

//正确写法
<style lang="scss">
	@import "@/styles/common.scss";
	@import "@/styles/vant.scss";
</style>

```

11.	图片不显示
::: tip 问题描述
同一个页面，上面是大的轮播图，下面是一些小图标，用的都是van-image标签  
奇怪的是，图标可以显示，轮播图不行  
各种排除，src路经是没错的，因为打印出来的路径用网页可以打开，写法也没什么错误，引入图片的方式也跟图标一样，怎么就出不来了呢  
最后的结果是  

没！给！宽！高！
我想shi
:::

## uni-ui的使用

### uni-forms
1.	手动提交
::: details 详情
```
<button @click="submitForm">Submit</button>


submitForm(form) {
    // 手动提交表单 示例中的submit()方法即将废弃,所以使用validate方法
    this.$refs.form.validate()
	.then(res => {
		console.log('表单的值：', res)
	})
	.catch(errors => {
		console.error('验证失败：', errors)
	})
}
```


:::