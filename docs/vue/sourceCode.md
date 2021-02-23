# 源码

vue2数据响应式原理利用的是<kbd> Object.defineproperty(obj,key,{}) </kbd> vue在得到我们传进来的data之后，需要对data对象进行遍历，然后给每一个属性都去进行defineproperty的监听 
```
Object.defineProperty(obj, key, {
    get() {
        return value
    },
    set(newValue) {
        if (value != newValue) {
            value = newValue
        }
    }
})
```

在熟悉了defineProperty的基础用法之后，我们需要考虑以下几个问题：
1.  如何对data对象的每一个属性进行监听
2.  属性的值还是一个对象的话如何处理
3.  给属性赋的新值是对象的话如何处理
 
以下是一个对这些问题处理的基本代码  

```
function defineReactive(obj, key, value) {
    //如果对象的属性值仍然是一个对象，则需要递归处理
    observe(value)

    Object.defineProperty(obj, key, {
        get() {
            console.log('get'+key)
            return value
        },
        set(newValue) {
            if (value != newValue) {
                // 为了防止用户的赋值仍是一个对象，在此处也需要observe处理
                observe(newValue)
                value = newValue
            }
            console.log('set'+key+ ' ' +newValue)
        },
    })
}

function observe(obj) {
    if (typeof obj != 'object' || obj == null) {
        return false
    } else {
        Object.keys(obj).forEach(key=> {
            defineReactive(obj,key,obj[key])
        })
    }
}

const obj = {name:'AUV',info:{age:'25'}};
observe(obj)


obj.info.age = 18
obj.info = {high:180}
obj.info.high = 182

```