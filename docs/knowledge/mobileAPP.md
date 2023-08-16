# 移动端开发

## 分类
<img src="/assets/img/mobileaAPP.jpg" width="500" height="auto" align="middle" />

类似于uniapp、微信小程序这种的称为webview,通过Javascript bridge与后台进行交互

#### 优点
- 一套代码就够了，而且用的是web前端语言
#### 缺点
- 中间有Javascript bridge桥梁，性能大大的受到影响


## 微信小程序

### 目录结构

<img src="/assets/img/smallRoutine.jpg" width="550" height="auto" align="middle" />  

- .json  json配置文件  
- .wxml  模板文件(相当于html)
- .wxss  样式文件(相当于css)
- .js    json配置文件

### 标签对照

|备注|HTML|vue|微信|
|--	|--	|--	|--	|
|基础标签|div|div|view|
|点击事件|onclick|@click|bindtap|
|事件函数的位置|js标签内|事件写在methods中|所有事件与data,生命周期函数平级|
|数据修改|获取dom并修改|this.msg='' |this.setData({msg:''})|
|数据循环遍历||v-for='(item,index)in list' :key='index'|wx:for='{{list}'   wx:key='id'|
|||||

### 牛刀小试

>小程序的API很丰富，可以很轻易的实现一些复杂的功能，下面来演示几个

```
//⾮非常简单就可以实现微信客服的功能  但是需要在小程序后台配置页面提前绑定好客服人员的微信
<view>
    <text> hello world</text>
    <button type="primary" open-type="contact">客服</button>
</view>
```

```
//照相功能
// html
<camera device-position="back" style="width: 100%; height: 300px;"></camera>
    <button type="primary" bindtap="takePhoto">拍照</button>
<image mode="widthFix" src="{{src}}"></image>

//js
Page({
    data: {
        src: "",
    }
    takePhoto() {
        let ctx = wx.createCameraContext();
        ctx.takePhoto({
            success: res => {
                console.log(res);
                //有点像react setState
                this.setData({
                src: res.tempImagePath
                })
            }
        })
    }
})
//保存之后点击拍照按钮就能看到自己的帅照了哈哈哈哈
```

### 云开发

- 简单点说就是一个人即可完成前后端的工作
- 开发者可以使⽤用云开发开发微信小程序、小游戏，无需搭建服务器器，即可使用云端能力（Serverless 服
务）。
- Serverless = server + less (“少服务器的，或是⽆服务器的”)
- 云开发为开发者提供完整的原生云端⽀支持和微信服务支持，弱化后端和运维概念，⽆需搭建服务器，使
⽤平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能⼒，同开发者已经使用的
云服务相互兼容，并不互斥。

#### 开通

>在创建小程序时，后端服务处选择 云开发 选项即可(必须要填写AppID，不可使用测试号)。接着点击编辑器上的云开发按钮，编写一个自己的环境名称，开通一下云开发功能~

<img src="/assets/img/cloudDevelopment.jpg" width="500" height="auto" align="middle" />

#### 小知识

- 云函数就是一个node应用
- 云函数一旦部署到云端，即可在自己的个人项目中随意调用，不同项目也可，因为云函数名称唯一  

#### 牛刀小试

1.  在cloudfunctions文件上单击右键，选择新建Node.js云函数，填写名称(此处假设文件名为test)，会得到一个有着如下目录的文件夹
    -  config.json
    -  index.js
    -  package.json
2.  打开index.js 这里就是我们写逻辑的地方
```
    // 云函数入口文件
    const cloud = require('wx-server-sdk')

    cloud.init()

    // 云函数入口函数
    exports.main = async (event, context) => { //event就是接收前端传过来的参数对象
        const wxContext = cloud.getWXContext()
        let {a,b} = event;
        return {
            sum:a+b
        }
    }
```
3.  在test文件夹上单击右键，选择 上传并部署，云端安装依赖，然后等待几秒...  
    
    页面中出现 '更新云函数test的调用权限' 以及  '上传云函数test'之后，即为上传成功
4.  在前端页面的任意一个事件中调用
```
    wx.cloud.callFunction({ //调用云函数的API
        name:'book',        //云函数名称
        data:{              //要传递的参数
            a:521,
            b:1314
        },
        success:res=>{      //成功的回调函数
            console.log(res)
        }
    })
```
5.  成功后控制台输出如下,result就是我们拿到的后台返回数据
    
<img src="/assets/img/cloudFucTest.jpg" width="700" height="auto" align="middle" />

#### 提枪上阵

有了上面那些知识，我们就可以开始为所欲为了,别忘了去补充一下数据库操作的知识，[点击查看](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/capabilities.html#%E6%95%B0%E6%8D%AE%E5%BA%93)  
接下来实现一个微信扫码图书二维码的爬虫案例

1.  新建node.js云函数
2.  在云函数目录的index.js中写入以下代码

```
// 云函数入口文件
const cloud = require('wx-server-sdk')
//需要安装以下两个依赖 npm i  名称 --save 并导入
const axios = require('axios')
const doubanbook = require('doubanbook')

cloud.init()
// 自定义函数  获取书籍信息
async function getDoubanBookInfo(isbn) {
  // 豆瓣读书获取书籍信息的地址
  let url = 'https://search.douban.com/book/subject_search?search_text=' + isbn
  // 截取信息的正则表达
  let reg = /window\.__DATA__ = "(.*)"/
  let res =await axios.get(url);

  if (reg.test(res.data)) {
    // 得到装有书籍信息的对象并返回
    let bookData = doubanbook(RegExp.$1)[0]
    return bookData
  }
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let { isbn } = event;
  let bookInfo = await getDoubanBookInfo(isbn);
  //s发送给前端
  return {
    title:bookInfo.title,
    url:bookInfo.url,
    cover_url:bookInfo.cover_url
  }
}
```
3.  前端页面中定义按钮，点击调用微信扫码API
```
    <button type="primary" bindtap="scanCode">扫描二维码</button>

    <text>题目：{{title}}</text>

    <text>网址：{{url}}</text>

    <image mode="widthFix" src="{{src}}"></image>
```
4.  前端js文件中加入data数据以及事件函数，并将结果存入数据库中
```
  //顶部
  //获取数据库引用
  const db = wx.cloud.database()


  //Page中
  data: {
    title: '',
    url: '',
    src: ''
  },
  scanCode() {
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        const isbn = 9787010009186;
        wx.cloud.callFunction({
          name: 'book',//云函数名称
          data: {
            isbn
          },
          success: res => {
            res = res.result;
            that.setData({
              title: res.title,
              url: res.url,
              src: res.cover_url
            })
            //数据库操作  添加
            db.collection('book').add({
              data:res
            }).then(()=>{
              wx.showModal({
                title: res.title+'添加成功',
              })
            })
          },
          error: err => {
            console.log(err)
          }
        })
      }
    })
  },
```



## 移动端布局

### vw/vh布局
转换：px/设计稿的宽度*100 = vw  
插件：px-to-vw  
使用：打开设置 -> 搜索px-to-vw -> 修改设计稿宽度和保留小数点 -> 框选住需要转换的代码，Alt+z即可  

### 优化策略
1.  分包策略。先展示重要的，剩下的按需加载。  
2.  压缩图片。或者减少图片数量。  
3.  精简代码，减少不必要的资源。  
4.  压缩代码。  
5.  数据缓存，在onLoad的时候请求数据。  
6.  使用骨架屏，避免白屏。  
7.  合并this.setData()，避免过多调用

