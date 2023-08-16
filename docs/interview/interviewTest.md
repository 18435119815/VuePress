## 理论面试题自检

### JS
    1.  说说对eventloop的理解  
    2.  实例、构造函数和原型的关系  
    3.  严格模式下的this指向  
    4.  new一个对象的时候发生了什么
    5.  内存泄漏的场景有哪些
    
### VUE
    1.  组件传值 
    2.  history和hash模式的区别  

### 数组的方法
1.  数组末尾删除元素
2.  数组开头删除元素
3.  数组末尾添加元素
4.  数组开头添加元素
5.  数组的截取
6.  查找某个值在数组中第一次出现的下标
7.  多个数组的链接
8.  数组的排序、过滤、映射
9.  数组元素的条件判断
10. 检测某个元素是否存在
11. 将类数组转为真正的数组   将一组值转为数组
12. 使用分隔符将数组隔开变为字符串
13. 数组任意位置元素的添加和删除

## 实操面试题自检
1.  
```
    var a = {n:1};
    var b = a;            
    a.x = a = {n:2};

    console.log(a.x);       
    console.log(b.x); 
```

2.  
```
使用sort对数组[2,56,38,77,5]进行排序并输出结果
```
3.  
```
使用async/await promise实现一个sleep()函数，使得sleep(1000)就是等待1s的效果
```

4.  
```
arr = [[1,2,2],3,[[4,4,6,7,[8]]],[9,10,11],12,[13]]
编写一个程序对数组进行扁平化、去重、升序处理
```

5.  
选取一个 0.4~0.8的随机数

6.  执行顺序
```
        //1.
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



        //2.  Promise的连续执行 
        Promise.resolve()
        .then(()=>{
            console.log(1);
            throw Error('err')
        }).catch(()=>{
            console.log(2)
        }).then(()=>{
            console.log(3)
        })


        //3
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

        new Promise((resolve)=>{             
            console.log('promise1');
            resolve();
        }).then(()=>{
            console.log('promise2')
        })

        console.log('script end')   

        //4
        setTimeout(() => {
            console.log(2)
        },2000)

        setTimeout(() => {
            console.log(1)
            Promise.resolve().then(() => {
                setTimeout(() => {
                    console.log(3)
                },0)
            })
        },1000)         
```

7.  JS预解析
```
    //1.    
    var x = 5;
    a();
    function a(){
        alert(x);
        var x = 10;
    }
    alert(x);

    //2.    
    a();
    function a(){
        alert(x);
        var x = 10;
    }
    alert(x);

    //3.
    var a = 10;
    alert(a);
    a();
    function a(){
        alert(20)
    }

```
8.  数组的扁平化、升降序处理
```Javascript
//将下列数组变成一维数组，并作降序处理
let arr = [[1, 2, 2], 3, [[4, 4, 6, 7, [8]]], [11, 10, 9], 12, [13]]

//先扁平化+去重
let newArr = [];
function one(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] instanceof Array){
            one(arr[i])
        }else{
            if(newArr.indexOf(arr[i])==-1){
                newArr.push(arr[i])
            }
        }
    }

}
one(arr);
//排序

```

9.  
```Javascript
    let a = [1,2,3,4,5],
        b = [2,3,4]
    //求交集
```