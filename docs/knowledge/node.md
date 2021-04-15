#  node.js

## 小知识
1. json文件中不能写注释
2. scripts 配置属性  
3. npm 安装包 发布包
4. npm/cnpm   install/i md5  安装
5. npm install   依据package.json的dependencies这个文件进行依赖包的安装  node_modules 
6. dependencies     运行依赖    项目在最终运行时需要的依赖文件  比如jquery
   devDependencies  开发依赖    项目在开发阶段需要的依赖文件    比如node-sass (运行完就会转译，所以不需要，一个典型的开发依赖)
7. npm install md5 --save               把md5设置为当前项目的依赖
   npm install node-sass --save-dev     把node-sass设置为当前项目的开发依赖
   npm install node-sass  -g            全局安装  安装到电脑上的某个固定位置 这个位置所处的位置会在node.js被安装的时候自动添加到 电脑的全局变量中的path->就可以直接在命令行中执行这个命令了
   npm uninstall jquery                 卸载 jquery
   npm install  jquery@1.11.3  --save   安装指定版本
   npm install  jquery@latest  --save   安装最新版本
   npm update jquery  --save            更新某个包   例如版本号为   ^x,y,z    保持x不动的情况下，将y更新最后一个版本
                                                                ~x,y,z    保持x,y不动的情况下，将z更新为最后一个版本
                                                                *x,y,z    直接更新到最新版
                                                                X  不同  版本不兼容 
                                                                y  不同  功能不同
                                                                z  不同  只是内部的修改    
8. package.json             当前包的配置的文件和直接依赖的包
   package-lock.json        锁定我们安装的某个包的时候，这个包自身以及它所依赖的包的配置 
   目的就是为了在进行移动或者上线的时候 只需要npm install命令就可以正确的安装我们所需要的包

9.  fs.readFileSync   同步读取内容
    fs.readFile       异步读取内容       异步操作会在同步操作中完成之后进行
10. fs.writeFile
    fs.writeFileSync 
11. fs.appendFile   内容追加
12. fs.unlink       文件删除
    fs.unlink("文件名",err=>{
        
    })
    
13. 文件夹，目录
    fs.mkdir()  创建文件夹
    fs.mkdir("aa/bb/cc","{recursive:true},err=>{}")   创建多级目录
    
14. 判断文件是否存在
    fs.exists(path, callback)   path：判断的文件夹、文件的路径  callback：回调函数
    
15. 删除文件夹
    fs.rmdir('要删除的文件夹',回调函数)
16. 读取文件夹
    fs.readdir("",callback)    

## 牛刀小试
```
// let fs = require("fs");
// fs.readFile("./practive.js","utf8",(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })
//
// fs.exists("node.md",(exists)=>{
//     console.log(exists?"存在":"不存在")
// })

//删除包含文件的文件夹

let fs = require("fs");
let path = require("path");
function fn(p) {
    let children = fs.readdirSync(p);           //读取文件
    if(children.length>0){                      //如果文件里面有内容
        for(let i=0;i<children.length;i++){     //循环遍历
            let a = path.join(p,children[i]);   //拼接子文件
            let type = fs.statSync(a);          //判断文件类型
            console.log(type.isFile());
            if(type.isFile()){                    //如果是一个文件
                fs.unlinkSync(a);
            }else if(type.isDirectory()){         //如果是一个文件夹，则执行回调函数
                fn(a);
            }
        }
    }
    fs.rmdirSync(p);                                //最后删除最外面的文件
}
fn("aa");


//处理excel中的数据
// let fs = require("fs");
// let xlsx = require("node-xlsx");
// let data = readFileSync("文件名");
// let res = xlsx.parse(data);                         //转换类型
// let students =  res[0].data;                        //删除不用的
// students.shift();
// students = students.reduce((a,b)=>a.concat(b));     //连接所有的数组
// students = students.map(ele=>[ele]);                //将每个数据转为数组
// let buffer = xlsx.build([[{name:"名单",data:students}]]);
// fs.writeFileSync("名单.xlsx",buffer);
```