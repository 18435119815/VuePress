# webpack

- webpack is a module bundler(模块打包⼯工具)
- Webpack是一个打包模块化JavaScript的⼯工具，它会从⼊⼝模块出发，识别出源码中的模块化导入语句，递归地找出⼊口文件的所有依赖，将入口和其所有的依赖打包到⼀个单独的⽂件中
- 是工程化、⾃动化思想在前端开发中的体现

## 小知识

- -D 开发依赖   信息会被记录到devDependencies中  在开发过程中需要，线上环境不需要的。比如格式校验，编码转换这一类的，webpack、jquery

- -S 生产依赖   信息会被记录到dependencies中  在线上环境仍然需要的。比如vue,element-ui,node-sass (运行完就会转译，所以不需要，一个典型的开发依赖)

- 示例
    - npm install md5 --save               把md5设置为当前项目的运行依赖
    - npm install node-sass --save-dev     把node-sass设置为当前项目的开发依赖
    - npm install node-sass  -g            全局安装  安装到电脑上的某个固定位置 这个位置所处的位置会在node.js被安装的时候自动添加到电脑的全局变量中的path->就可以直接在命令行中执行这个命令了

- 运行webpack打包 npx webpack

- webpack执行构建的时候,会先在目录中寻找webpack.config.js的配置文件,没找的话就会按照webpack默认配置构建


### 默认配置
```
    const path = require("path");
    module.exports = {
        // 必填 webpack执⾏行行构建⼊入⼝口
        entry: "./src/index.js",
        output: {
            // 将所有依赖的模块合并输出到main.js
            filename: "main.js",
            // 输出⽂文件的存放路路径，必须是绝对路路径
            path: path.resolve(__dirname, "./dist")
        }
    };
```

### entry入口文件

>指定webpack打包⼊⼝文件:Webpack 执行构建的第⼀步将从Entry 开始，可抽象成输⼊

```
//单⼊入⼝口 SPA，本质是个字符串串
entry:{
    main: './src/index.js'
}
==相当于简写===
entry:"./src/index.js"

//多⼊⼝ entry是个对象
entry:{
    index:"./src/index.js",
    login:"./src/login.js"
}

```

### output出口文件

>打包转换后的⽂件输出到磁盘位置:输出结果，在 Webpack 经过⼀系列处理并得出最终想要的代码后输出结果

```
output: {
    filename: "bundle.js",//输出⽂件的名称
    path: path.resolve(__dirname, "dist")//输出⽂件到磁盘的⽬录，必须是绝对路径
},
//多⼊⼝的处理
output: {
    filename: "[name][chunkhash:8].js",//利⽤占位符，⽂件名称不不要重复
    path: path.resolve(__dirname, "dist")//输出⽂件到磁盘的⽬录，必须是绝对路径
}

```

### 占位符

- output设置出口文件的名称时，可以使用占位符

- 占位符有4个  [name]  [hash]  [chunkhash] [id] 

- [name]： 表示entry创建对象的时候，前面的那个key，生成的名字就是key，如index.js的index

- [hash]：是每次打包时，生成的整个项目的唯一hash

- [chunkhash]:就是每次打包时，每个chunk 对应的hash值

- id: 模块标识符
