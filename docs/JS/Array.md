# Arrayz数组对象

## 方法

### Array.reduce()
::: tip 作用
累加
:::

```
const arr = [1,2,3]
arr.reduce((a,b)=>{
    return a+b
},0)

```
### Array.includes()
::: tip 作用
用于检测数组中是否包含某元素，包含返回true。  注意：不能检测数组
:::

```
const arr = [1,2,{name:'哎呦喂'}]
arr.includes(1)                 //true 
arr.includes(6)                 //false 
arr.includes({name:'哎呦喂'})    //false

```
### Array.map()
::: tip 作用
将数组中的所有数据按照条件改变，返回新数组
:::

```
const arr = [1,2,3,4,5]
const newArr = arr.map((val,index)=>{
    return val*2
})
newArr = [2,4,6,8,10]
```