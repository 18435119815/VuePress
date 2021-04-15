# 项目实践

## vue.config.js
```
module.exports = {
    baseUrl:'',                 //从 Vue CLI 3.3 起已弃用，请使用publicPath。
    publicPath:'/',             //项目前置路径,用法和 webpack 本身的 output.publicPath 一致
    lintOnSave:'',              //每次保存代码是否要通过lint检测  boolean | 'warning' | 'default' | 'error'

    <!-- 打包相关 -->
    outputDir:'dist',           //打包文件输出目录,用法和 webpack 的 output.path一致
    assetsDir:'',               //打包文件中放置静态资源的目录css、img、font等
    indexPath:'index.html',     //制定生成的index.html生成路径
    filenameHashing:true,       //文件名hash，改为false即关闭


    devServer:{
        port:8088,              //默认端口
        proxy: {                //接口代理服务
            [process.env.VUE_APP_BASE_API]: {,
                target: ``,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
    },

    <!-- webpack相关 -->
    configureWebpack:{},        //因为vuecli3中已经不能直接修改webpack配置，所以需要通过这个属性
    chainWebpack：{             //链式操作，可以更细粒度控制webpack内部配置。
        name: '项目名称',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },           
}

```

### 小知识
1. 查看webpack默认配置  `vue inspect`  只查看规则配置`vue inspect --rules` 查看某一项具体规则`vue inspect --rule 名称(例如svg)`  
<img src="/assets/img/vueConfig1.jpg" width="350" height="200" align="middle" />
<img src="/assets/img/vueConfig2.jpg" width="350" height="200" align="middle" /> 

2.  lodash插值语法
```
//在根目录的index.html中使用configureWebpack的name属性
<title><%= webpackConfig.name %></title>
```
3.  chainWebpack范例:svg icon引入  
- 下载图标，存入src/icons/svg中
- 安装依赖：svg-sprite-loader  
`npm i svg-sprite-loader -D`

- 修改规则和新增规则 

```
//vue.config.js中
// resolve定义一个绝对路径获取函数 
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
//... 
chainWebpack(config) {
    // 配置svg规则排除icons目录中svg文件处理 
    // 目标给svg规则增加一个排除选项exclude: ['path/to/icon']
    config.module.rule("svg").exclude.add(resolve("src/icons"))
    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg 
    config.module.rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('./src/icons')).end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({ symbolId: 'icon-[name]' })
}
```
- 组件中使用
```
<template>
  <svg>
    <use xlink:href="#icon-wx" />
  </svg>
</template> 
<script> 
  import '@/icons/svg/wx.svg' 
  export default {}
</script>
```
- 由于项目中的icon可能过多，我们不能每一个都单独引入，因此需要工程化配置
```
//新建src/icons/index.js
//webpack创建一个以svg目录为上下文的require函数
const req = require.context('./svg', false, /\.svg$/) 
//keys会获取所有的svg文件
req.keys().map(req);
//在main.js中引入该文件 @import '@/icons' 
```