# Object对象

1. Object.assign(obj1,obj2,obj3,......)
> 可用于对象的拼接，将obj2，obj3......拼接到对象obj1上，并将obj1返回，obj1改变，其他对象不变。

```
var obj1={name:'张三'};
var obj2={age:18};
var obj3={say:function(){
  console.log('说话');
}}
console.log(Object.assign(obj1,obj2,obj3));     //{name: "张三", age: 18, say: ƒ}
console.log(obj1,obj2);                         //{name: "张三", age: 18, say: ƒ}   {age: 18}
```