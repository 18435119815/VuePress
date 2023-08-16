# Object对象

## 1. Object.assign(obj1,obj2,obj3,......)
> 可用于对象的拼接，将obj2，obj3......拼接到对象obj1上，并将obj1返回，obj1改变，其他对象不变。

> 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。即obj1中的同名键的值会被obj2,obj3中的依次覆盖

>  Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。

```
var obj1={name:'张三',num:1};
var obj2={age:18,num:2};
var obj3={
  say:function(){
    console.log('说话');
  },
  num:3
}
console.log(Object.assign(obj1,obj2,obj3));     //{name: "张三", num: 3, age: 18, say: ƒ}
console.log(obj1,obj2);                         //{name: "张三", num: 3, age: 18, say: ƒ}   {age: 18}
```


## 2. Object.defineProperty(obj,key,{options})
> 可用于自定义对象属性，细节化的控制每个可配置项，一般用于自己搭建框架。

```
var obj = new Object();

var name = '任俊峰';

Object.defineProperty(obj, 'name', {
    configurable: false,        //该属性是否可删除，默认false
    writable: true,             //该属性是否可被修改，默认false
    enumerable: true,           //该属性是否可枚举，默认false
    value: '张三',               //属性默认值 
    //上面四个属性与下面的get、set不可同时存在
    get(){
      return name;
    },
    set(value){
      name = value;
    }
})
```


## 3. Object.prototype.hasOwnProperty()
> 返回一个布尔值。用来判断对象自身是否包含某个属性，不包括原型属性。

```
  const obj = {name:"aiyouwei"};
  obj.hasOwnProperty("name");       //true
```

## 4. Object.keys(obj)
> 返回一个由自身可枚举属性组成的数组

```
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
```