# typeScript

## 概念

### JavaScript 与 TypeScript 的区别
- TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。
<img src="/assets/img/ts1.jpg" width="200" height="auto" align="middle" />
<img src="/assets/img/ts2.jpg" width="200" height="auto" align="middle" />


## 调试环境
- 安装  
`npm install typeScript -g`
- 配置文件  
`tsc --init`   输入完成后，就会出现tsconfig.json文件( typescript 的编译配置文件)，想要此文件生效的话编译时直接运行`tsc`命令  
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
>typeScript的静态类型分为两种：基础静态类型和对象静态类型
```
//基础静态类型 null undefined boolean void symbol
const num:number = 2;
const str:string = 'aiyouwei';

//对象静态类型 对象 数组 类 函数
const obj:{
    name:string,
    age:number
} = {
    name:'lele',
    age:20
}

const arr:string[] = ['lele','jingjing','feifei']

class duixiang{}
const lele:duixiang = new duixiang()

const wife:()=>string = ()=>{return 'lele'}

```

### 1.  类型注解  
声明的时候直接写好变量类型
```
var a:String;
a = ''
```
### 2.  类型推论  
声明的时候直接赋值，会自动以该值的类型为准

```
var b = true;
b = 2;(报错)

```

### 3.  多种类型  
可以设置两个类型  
`var c : String | undefined;`

### 4.  任意类型

```
var d : any;
d = 1;
d = 'tom';

```

### 5.  类型数组  
声明数组中的元素类型

```
var arr : String[]
arr = ['Tom','Jerry']
//当然也可以用any类型
var arr1 : any[]
arr1 = [1,'Tom',true]

//两种类型的写法
const arr1 : (number|string)[] = [1,2,'lele']
```


### 6.  函数返回类型约束
```
//有返回值的
function add(val : String) : String{
    return "hey"+val
}

//没有返回值的  使用void类型
function reduce(val : String) : void{
    console.log('无返回值用void类型')
}

```
### 7.  对象参数属性值约束

```
function test1(obj:{person:String}){}
test1({person:'string'})


//使用type声明一个类型
//上面的例子也可以这么写  
type Person = {person:String}
function test2(obj:Person){}
test2({person:'string'})
//再来一个
type lady = {name:string,age:number}
const arr : lady[] = [
    {name:'乐乐',age:19},
    {name:'静静',age:25}
]




function add({one,two}:{one:number,two:number}){
    return one + two 
}
const a = add({one:1,two:2})

```

### 8.  类型断言 
某些情况下用户会比编译器更确定某个变量的具体类型，可用类型断言as

```
const someValue: any = "this is a string"; 
const strLength = (someValue as string).length;
```

### 9.  联合类型  
希望某个变量或参数的类型是多种类型其中之一
```
let union: string | number; 
union = '1'; // ok 
union = 1; // ok
```


### 10. 交叉类型  
想要定义某种由多种类型合并而成的类型使用交叉类型
```
type First = {first: number}; 
type Second = {second: number}; 
type FirstAndSecond = First & Second; 
function fn3(param: FirstAndSecond): FirstAndSecond { 
    return {first:1, second:2} 
}
```

### 11. 函数
- 必填参：参数一旦声明，就要求传递，且类型需符合
- 可选参：用？来标识参数可选填(没有默认值)
- 参数可以用=添加默认值

### 12. 函数重载  
以参数数量或类型区分多个同名函数(多用于写源码或者框架)
```
// 重载1 
function watch(cb1: () => void): void; 
// 重载2 
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void; 
// 实现 
function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void) { 
    if (cb1 && cb2) { c
    onsole.log('执行watch重载2'); 
    } else { 
        console.log('执行watch重载1'); 
    } 
}
```

### 13. class类的特性  
- ts中的类和es6中大体相同
```
class Parent { 
    public  head = 'head';      // 公共属性，可以在 当前类 的内部外部访问
    private _foo = "foo";       // 私有属性(一般以下划线开头)，不能在类的外部访问，包括 new出来的对象和继承的子类
    protected bar = "bar";      // 保护属性，可以在 当前类的内部 和 继承子类 中访问，new出来的不可以
    public readonly _eyes = 2;   // 只读属性(一般以下划线开头)，修改会直接报错
    
    // 参数属性：构造函数参数加修饰符，能够定义为成员属性  跟写在上面的三个属性的效果相同
    constructor(public tua = "tua") {} 
    
    // 方法也有修饰符 private someMethod() {} 
    
    // 存取器：访问私有属性，可添加额外逻辑，控制读写性 
    get foo() { return this._foo; }
    set foo(val) { this._foo = val; } 
}
```
- 类的继承及super的使用
```
class people{
    eyes = 2;
    mouth = 1;
    nose = 1;
    eyebrow = 2;
    say(){
        return '父类'
    }
    static sayLove(){           //如果想要不new对象而直接使用类的属性和方法   则需要用static，这样可以通过people.sayLove()直接访问
        return 'i love you'
    }
}

class man extends people{
    constructor(){              //子类中如果要写构造函数，则必须用super()调用父类的构造函数，否则报错(父类中不写constructor也是有默认有的)
        super()
    }               
    say(){
        return 'Im man!I can use'+ super.say() + 'methods'   //super可以调用父类中的方法
    }
}

const man1 = new man()
man1.say()
```

- 抽象类
    - 抽象类的关键词是abstract,里边的抽象方法也是abstract开头的
```
abstract class Girl{
 abstract skill()   
}

//继承子类会被要求必须要有skill这个方法
class Waiter extends Girl{
    skill(){
        console.log('您好 我是服务员')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('您好 我是初级技师')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('您好 我是高级技师')
    }
}

const senior = new seniorTeacher()
console.log(senior.skill())
```

### 14. interface接口  
接口仅约束结构，不要求实现，使用更简单

```
// Person接口定义了解构 
interface Person {
    firstName: string; 
    lastName: string;
    lele ?: string;             //可选参数?:
    [propname:string]:any       //任意键值对propname
 }

// greeting函数通过Person接口约束参数解构 
function greeting(person: Person) { 
    return 'Hello, ' + person.firstName + ' ' + person.lastName; 
}

greeting({firstName: 'Jane', lastName: 'User'}); // 正确 
greeting({firstName: 'Jane'}); // 错误
```
//利用接口来约束类
```
class girl2 implements Person {
    firstName= '范'; 
    lastName= '彩乐';
    lele = '乐乐';     
}
```

//接口间的继承
```
interface people extends Person {
  say(): string;        
}

此时的people不仅有Person的全部属性  还多了一个say方法
```



### 15. 泛型  
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。以此增加代码通用性。  
泛型的定义使用<>（尖角号）进行定义的。

    1.    比如现在给aiyouwei方法一个泛型，名字就叫做T(大多数情况都用T，自定义语义化也可以)
    ```
    function aiyouwei<T>(first:T,second:T){
        return `${first}${second}`
    }
    //调用函数的时候指定泛型类型
    const name1= aiyouwei<number>(1,1)
    ```
    2.  多个泛型的使用
    ```
    function aiyouhei<T,P>(first:T,second:P){
        return `${first}${second}`
    }

    const name2= aiyouhei<number,string>(1,'hey')
    //此处这么写也是可以的，反省也有类型推断
    //const name2= aiyouhei(1,'hey')
    ```

    3.  在类中使用泛型
    ```
    //不使用泛型的
    class Girl{
        constructor(private girl:string[]){}
        getName(index:number):string{
            return this.girl[index]
        }
    }

    const girl = new Girl(['乐乐','菁菁','琪琪'])

    console.log(girl.getName(2))
    //使用泛型的
    class Girl1<T>{
        constructor(private girl:T[]){}
        getName(index:number):T{
            return this.girl[index]
        }
    }

    const girl1 = new Girl1<string>(['乐乐','菁菁','琪琪'])

    console.log(girl1.getName(2))
    ```

    4.  泛型的继承
    ```
    interface geshi{
        name:string
    }

    class Girl1<T extends geshi>{
        constructor(private girl:T[]){}
        getName(index:number):string{
            return this.girl[index].name
        }
    }

    const girl1 = new Girl1([
        {name:'乐乐'},
        {name:'菁菁'},
        {name:'琪琪'}
    ])

    console.log(girl1.getName(2))
    ```

    5.  泛型的约束
    ```
    class SelectGirl<T extends number | string> {
        //.....
    }
    ```

    **泛型优点：**
    - 函数和类可以支持多种类型，更加通用
    - 不必编写多条重载，冗长联合类型，可读性好
    - 灵活控制类型约束
    - 不仅通用且能灵活控制，泛型被广泛用于通用库的编写。


### 16. 枚举 (Enum)
>枚举是基于 0 的，也就是说第一个值是 0，后面的值依次递增。不要担心，当中的每一个值都可以显式指定，只要不出现重复即可，没有被显式指定的值，都会在前一个值的基础上递增。

```
// enum Color { 
//     Red,
//     Green, 
//     Blue 
// }
// let c: Color = Color.Green;  // 1

enum Color {
    Red = 1, 
    Green, 
    Blue = 4
}
let c: Color = Color.Green;  // 2

枚举有一个很方便的特性，也可以向枚举传递一个数值，然后获取它对应的名称值。(即通过下标获取key值)

let colorName: string = Color[2];  // 'Green'
```


### namespace命名空间

有时候为了防止全局变量污染，我们需要用到namaspace命名空间。需要使用的可以用export导出，被导出的才会变成全局变量。
```
namespace Home{
    class Header{
        constructor(){
        }
    }
    
    class Content{
        constructor(){
        }
    }
    
    class Footer{
        constructor(){
        }
    }
    
    export class Page{   
        constructor() {
            new Header();
            new Content();
            new Footer();      
        }   
    }
}

//调用  Home.Page()
```
**子命名空间**
```
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }

  //someting ...
}
```


## tsconfig.json
新建文件夹，进入vscode服务台，运行`tsc --init`就会发现多了一个`tsconfig.json`的文件，这是ts的编译配置文件，用来配置如何对ts文件进行编译的。 

**详情查阅**     
[编译选项详解](https://www.tslang.cn/docs/handbook/compiler-options.html)


**注意事项**  
1.  配置文件不支持单引号，所以里边都要使用双引号
2.  `ts-node`命令也遵循`tsconfig.json`配置


**编译单个ts文件**  
`tsc demo.ts`
需要注意的是使用这个命令tsconfig.json配置是不生效的,此时需要运行`tsc`才可以。但是这么做会将所有的ts文件都进行编译。如果我们只想编译单个ts文件该怎么做呢(假设此时目录中有demo.ts、other.ts，我们想编译的是demo.ts)

1.  include(包含)  
```
    "include":["demo.ts"]`
    "compilerOptions": {
        //........
    }
```

2.  exclude(不包含)  
```
    "exclude":["other.ts"]`
    "compilerOptions": {
        //........
    }
```

3.  files(同include)  
```
    "files":["demo.ts"]`
    "compilerOptions": {
        //........
    }
```

### compilerOptions  
它是告诉TypeScript具体如何编译成js文件的，里边的配置项非常多

**removeComments**  
告诉TypeScript编译出来的文件是否显示注。true为不显示。

**strict**  
我们的编译和书写规范，是否要按照TypeScript最严格的规范来写。true就是要。

**noImplicitAny**  
当注解类型为any，是否需要注明。true就是需要写清楚。
```
function jspang(name) {
  return name;
}
//true报错，false不报错
```

**strictNullChecks**   
是否强制检查null类型。true就是检查。
`const jspang: string = null;   //true报错，false不报错`

**rootDir & outDir**  
出入口文件配置。比如我们把所有的 ts 文件都放到 src 下,编译出来 js 文件我们希望放在 build 下。那我们就得这么写： 
```
    "outDir": "./build" ,
    "rootDir": "./src" 
```

**noUnusedLocals & noUnusedParameters**  
对于没有使用却声明了的变量和方法的限制。设置为true，有未使用的编译时就会报错

**sourceMap**  
如果把sourceMap的注释去掉，在打包的过程中就会给我们生成sourceMap文件.
>sourceMap 简单说，Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。
