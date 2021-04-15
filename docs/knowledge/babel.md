1. 是什么？   Jacascript编译器，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
2. 读取的三种方法 
    1. 直接在PowerShell中输入 npx babel 需要编译的文件名
    2. 直接在PowerShell中输入 ./node_modules/.bin/babel 
    3. 在package.json的scripts中   写入 "build": "nex babel 需要编译的文件名"
3. 插件编译
    npx babel 需要编译的文件名 -o 编译到的文件夹  --plugins=@babel/plugin-transform-block-scoping    //安装时@以后的内容
    这种编译每次只能编译一种类型的js（例如块级作用域、箭头函数）
4. 同时编译
    根目录下面创建  .babelrc文件  配置
    {
    "plugins": ["@babel/plugin-transform-block-scoping","@babel/plugin-transform-arrow-functions"]
    }

5. 一个预设
   npx babel 文件名 -o 文件名 --presets=@babel/preset-env

6. n个预设
     根目录下面创建  .babelrc文件  配置
    {
    "presets": ["",""]
    }

7. 常用命令