# 从零开始创建一个vue项目

## 环境搭建
1. 从官网上安装<kbd>node.js</kbd>   在本地cmd中通过<kbd>node -v</kbd>,<kbd>npm -v</kbd>查看是否安装成功  
    注意：
    1. 最好不要下载最新版，10-12就可以，不要低于10的
2. 安装cnpm淘宝镜像
    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

    如果出现cnpm不是本地命令的话，先在我的电脑中搜索 cnpm.cmd  
    锁定位置之后，将该位置添加到系统环境变量中即可：我的电脑->高级系统设置->环境变量->双击Path->新建（将cnpm.cmd的目录写进去即可）。

3. 安装webpack
    ```
    cnpm install webpack -g
    ```
    如果报以下错误，则执行下列操作  
    <img src="/assets/img/webpackError.png" width="600" height="auto" align="middle" />  
    ```
    cnpm install  webpack-cli -g
    ```

4. 安装vue-cli
    ```
    cnpm install -g vue-cli
    ```
    版本查看：vue -V（注意这里v是大写）

5.  安装依赖
    只想用于开发依赖的后面加 --save-dev或者-S-D
    用于生产依赖的后面加    --save 或者 -S
