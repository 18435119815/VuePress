# 赣州分项目

## 离职原因
1.  项目需要长期驻场开发
2.  类型单一，不利用未来的发展
3.  sz相对来说互联网氛围更好，朋友也都在这边。

## 项目描述
通过分析市民的基本信息以及诚实守信行为计算出来的个人信用分，以此来提供不同的便民服务，建设信用城市。  
web端做的是后台管理，使用vue+elementui搭建前端项目，管理员可以在次分配不同的机构、角色、用户、资源、应用场景，进行一些日志、信用记录的查询，查看机构、用户的统计报表。

vue版本： 2.6.10  
vue/cli版本: 3.6.0

<img src="/assets/img/project/project1.jpg" width="100" height="auto" align="middle" />

H5是客户端，使用的是vue+vantui搭建，用来给客户提供信用分查询、授权、修复等功能。

## 通用知识
###  身份安全验证
1.  登录之后，后端会生成一个token并存入浏览器scookie中，需要前端设置每次请求的时候，在请求头中加入token，后端自行读取
2.  登录之后，后端会生成一个token并返回前端，由前端保存，每次发送请求的时候在请求头中携带token给后端

## web

### 路由权限
1.  在前端先定义好所有的路由信息AllRoutes，由后端返回包含只name和children字段的权限数组partRoutes，前端拿到之后进行递归遍历，将匹配到的数组push进一个新的数组并映射到界面中。  
```
    function newRoutes(partRoutes=[],AllRoutes=[]){
        //定义新数组来接收用户对应的路由权限
        const realRoutes = []
        AllRoutes.forEach((v,i)=>{
            partRoutes.forEach((item,index)=>{
                if(v.meta.name==item.name){
                    //递归判断子路由的权限
                    if(item.children&&item.children.length>0){
                        v.children = newRoutes(item.children,v.children)
                    }

                    realRoutes.push(v)
                }
            })
        })

        return realRoutes
    }
```
2.  如果路由是根据角色进行划分的话，在设置路由的时候，在meta信息中加入路由对应的角色名，拿到后端返回的角色后，再对路由进行筛选。
```
//router.js中
routes: [
  {
    path: '/login',
    name: 'login',
    meta: {
      roles: ['admin', 'user']
    },
    component: () => import('../components/Login.vue')
  },
  {
    path: 'home',
    name: 'home',
    meta: {
      roles: ['admin']
    },
    component: () => import('../views/Home.vue')
  },
]
//路由导航中
//从后台获取的用户角色
const role = 'user'
//当进入一个页面是会触发导航守卫 router.beforeEach 事件
router.beforeEach((to,from,next)=>{
 if(to.meta.roles.includes(role)){
 next() //放行
 }esle{
 next({path:"/404"}) //跳到404页面
 }
})
```

3.  后端返回全部路由，需要注意一个问题就是后端返回的不可以直接使用，因为component项不识别，需要自己处理
```
export function traverseRoutes(menus) {
  const routes = menus.filter(item => item.path).map(menu => {
    if (menu.component) {
      const name = menu.component;
      menu.component = (resolve) => require([`@/${name}`], resolve);
    }

    menu.meta = { title: menu.name, icon: menu.icon };

    if (menu.children && menu.children.length) {
      menu.children = traverseRoutes(menu.children);
    }
    return menu;
  });

  return routes;
}
```

## H5


### app.vue
```
<template>
  <!-- 修改应用组件的模板 -->
  <div id="app">
    <keep-alive>
        <!-- 需要缓存的视图组件 --> 
        <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
      <!-- 不需要缓存的视图组件 -->
     <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 并放置非路由组件 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
```

### 分享给微信好友
1.  weixin-js-sdk
`import wx from "weixin-js-sdk";`
2.  定义分享内容以及必要信息

```
// 控制分享标题，图片
    wxShare(encodeURIComponent(location.href.split("#")[0]))
      .then((res) => {
        wx.config({
          appId: res.config.appId, // 必填，公众号的唯一标识
          timestamp: res.config.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.config.nonceStr, // 必填，生成签名的随机串
          signature: res.config.signature, // 必填，签名
          jsApiList: [
            "updateAppMessageShareData", //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
            "updateTimelineShareData", //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
          ], // 必填，需要使用的JS接口列表
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //通过ready接口处理成功验证
    wx.ready(function () {
      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      wx.updateAppMessageShareData({
        title: "快来看看你的信用值多少钱叭~", // 分享标题
        desc: "快来看看你的信用值多少钱叭~", // 分享描述
        link: `http://sukura.nat300.top/#/gradeExtension?userId=${link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://sukura.nat300.top/images/logo.jpg", // 分享图标
        success: () => {},
      });
      //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      wx.updateTimelineShareData(内容同上);
    });

    wx.error(function (res) {});
```
3.  禁止分享
```
// 禁止微信分享
banWxShare() {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '123123', // 必填，公众号的唯一标识
        timestamp: '123123123', // 必填，生成签名的时间戳
        nonceStr: '123123', // 必填，生成签名的随机串
        signature: '123123123', // 必填，签名，见附录1  
        jsApiList: [
                'hideOptionMenu'//hideOptionMenu  禁用
        ]
            
    })
    wx.ready(function() {
        wx.hideOptionMenu();
    })
}
```