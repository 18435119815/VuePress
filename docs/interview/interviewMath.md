# 实战面试题


## 格式

```
   有三个判断数组的方法，请说出他们的区别和优劣      
```  

**解析：**






## 连等号的应用

```
    var a = {n:1};
    var b = a;              //此时a,b都指向了同一个地址的引用
    a.x = a = {n:2};

    console.log(a.x);       
    console.log(b.x);      
```
1. 连等开始前程序会把所有的引用都保存下来  
2. 连等的过程中这些值是不变的  
3. 等到连等结束了，这些值同时变    

**解析：**
 - a一开始指向了{n:1}这个对象的引用地址，b=a，所以b也指向了同一个对象；

 - 连等从右往左执行，a指向了新的对象{n:2}，
 - 连等开始前会先保存引用，所以a.x改变的是{n:1}这个对象的值，此时这个对象变成了{n:1，x:{n:2}},所以b现在等于这个值

 ## 判断数组的方法

```
   有三个判断数组的方法，请说出他们的区别和优劣   
   1.   Object.prototype.toString.call()
   2.   Array.isArray()
   3.   instanceof   
```  

**解析：**
 - 方法一出来的结果是个字符串[object Array],而且写起来很麻烦
 - 方法二三都可以用于判断继承子类，写起来也相对方便


## async/await和promise的使用

```
//使用async/await promise实现一个sleep()函数，使得sleep(1000)就是等待1s的效果      
```  

**解析：**
```
function sleep(ms){
    return new Promise(reslove=>{
        setTimeout(()=>{reslove()},ms)
    })
}
async function num(){
    console.log(1)

    await sleep(2000);

    console.log(2)
}
num()
```

## 多维数组的处理

```
arr = [[1,2,2],3,[[4,4,6,7,[8]]],[9,10,11],12,[13]]
编写一个程序对数组进行扁平化、去重、升序处理    
```  

**解析：**
1.  扁平化处理即变成一维数组，可以利用for循环和递归对数组中的每个元素进行判断，非数组则push到新数组中
2.  去重可以利用instanceOf，新数组中没有再push进去
3.  排序则是利用双重for循环来处理，内层每循环一次，都会将一个最大数字放置到数组末尾，以此类推
```
const newArr = []
function oneArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            oneArr(arr[i])
        } else {
            if (newArr.indexOf(arr[i]) == -1) {
                newArr.push(arr[i])
            }
        }
    }
}
oneArr(arr)

for(let i=0;i<newArr.length-1;i++){
    for(let j=0;j<newArr.length-1-i;j++){
        if(newArr[j]>newArr[j+1]){
            let newA  = newArr[j];
            newArr[j]  = newArr[j+1];
            newArr[j+1] = newA;
        }
    }
}
```


## 执行顺序

```
        //第一题
        async function test1(){
            console.log('test1 begin');
            let result = await test2();
            console.log('result',result);
            console.log('tes1 end')
        }

        async function test2(){
            console.log('test2')
        }


        console.log('开始执行')
        test1().then(res=>{
            console.log('then')
        })

        setTimeout(()=>{
            console.log('setTimeOut')
        },1000)
        
        console.log('结束执行')    

        //第二题
        async function async1(){            
            console.log('async1 start');
            await async2();
            console.log('async1 end')
        }

        async function async2(){            
            console.log('async2')
        }

        console.log('script start');         

        async1();

        new Promise((resolve)=>{             //promise初始化传入的函数会立即执行
            console.log('promise1');
            resolve();
        }).then(()=>{
            console.log('promise2')
        })

        console.log('script end')            //同步任务

        // 'script start'  'async1 start'  'async2' 'promise1' 'script end' 'async1 end' 'promise2'

```  

**解析：**
- 第一题
    1.  考点在于await  .then   setTimeOut的执行顺序
    2.  test1和test2虽然是异步函数，但仍然会立即执行，但是await之后的代码都会被放倒异步执行队列中去，效果相当于把它们全都放在了setTomeOut中
    3.  '开始执行'  'test begin'   'test2'   '结束执行'  'result undefined' 'test1 end'  'then'  'setTimeOut'

- 第二题
    1.  难点在于await后面部分的代码的执行顺序，这部分代码会被作为微任务执行
    2.  即async1中的`console.log('async1 end')`

## Promise的连续调用

```
    Promise.resolve()
        .then(()=>{
            console.log(1);
            throw Error('err');
        }).catch(()=>{
            console.log(2);
        }).then(()=>{
            console.log(3);
        })
```  

**解析：**
1.  resolve是成功的回调，所以会进入then输出1
2.  接着抛出了错误会被catch捕获，输出2
3.  catch执行成功之后会返回一个成功的回调，所以进入then。输出3


## JS预解析

```
    //1.
    alert(a);
    var a = 10;
    alert(a);
    function a(){
        alert(20)
    }
    alert(a);
    var a = 30;
    alert(a);
    function a(){
        alert(40)
    }
    alert(a);
```  

**解析：**
- 预解析的题可以分为两步，第一步定义，先从全局中找出var和函数声明，变量名相同的情况下，函数会优先，覆盖掉var。第二步就是执行了。

- 第一题
    1. 定义。又有var又有函数，函数优先，最后alert40的函数a被置于顶层。所以第一个结果是function a(){alert(40)}
    2. 执行。var a = 10改变了变量值，所以第二个结果为10。
    3. function a(){alert(30)} 虽然定义但未被执行，所以不会影响a的值，第三个结果还是10。
    4. 后面同理。



## 堆栈内存的理解

```
   let a = 0;
   b = a;
   b++;
   alert(a);

```  

**解析：**
1.  a指向内存空间中的0；
2.  b = a;所以b也指向了0；
3.  b++就是b = b+1;所以b又指向了内存空间中的1，与0的关联断开；
4.  a还是之前的0；
5.  alert的值都经过toString()处理，所以结果是字符串'0';

这个题里有两个考点，一个是对于堆栈内存的理解，另外一个是alert的值会被toString()处理。

JS中所有变量赋值都会经过三个阶段（例如 let a = 0）：
1.  在VO中开辟一块区域创建变量 a
2.  在VO中开辟一块区域创建值 0
3.  将值和变量关联



## this指向

```
    function Fn() {};

    Fn.prototype.name = '时间跳跃';

    function fn() {
        console.log(this.name);
    };

    let obj = new Fn();

    obj.func = fn;

    let obj1 = {
        name: '听风是风',
        o: obj
    };

    obj1.o.func()    
    输出什么？ 
```  

**解析：**

1.  obj1.o.func()  最终调用fn函数的是obj对象，所以this指向obj  
2.  obj自身没有name属性，顺着原型链找到了Fn的原型属性  
3.  所以答案是时间跳跃

