# typeScript

## 调试环境
- 安装  
`npm install typeScript -g`
- 配置文件  
`ts --init`  
`npm init`

- 在现有的vue项目中加入ts     
`vue add @vue/typescript`  
之后会出现一些选项，第一项yes，其余No即可
安装完成之后会发现文件夹里多了一些文件，  
打开`main.ts`会发现多了一些红色波浪线
<img src="/assets/img/tsError.jpg" width="700" height="auto" align="middle" />
打开`ts.config.json`  
加入`"noImplicitAny":false`即可  
<img src="/assets/img/tsError1.jpg" width="300" height="auto" align="middle" />

## 基本语法
```
//类型注解  声明的时候直接写好变量类型
var a:String;
a = ''

//类型推论  声明的时候直接赋值，以该值的类型为准
var b = true;
b = 2;(报错)

//多种类型  可以设置两个类型
var c : String | undefined;

// 任意类型
var d : any;
d = 1;
d = 'tom';

//类型数组  声明数组中的元素类型
var arr : String[]
arr = ['Tom','Jerry']
//当然也可以用any类型
var arr1 : any[]
arr1 = [1,'Tom',true]



//函数类型约束
//有返回值的
function add(val : String) : String{
    return "hey"+val
}
//没有返回值的  使用void类型
function reduce(val : String) : void{
    console.log('无返回值用void类型')
}

//对象参数属性值约束
function test1(obj:{person:String}){}
test1({person:'string'})

//上面的也可以这么写  使用type声明一个类型
type Person = {person:String}
function test2(obj:Person){}
test2({person:'string'})



```

