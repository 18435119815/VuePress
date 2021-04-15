# ES6  
全称 ECMAScript 6.0     是JavaScript的最新版本标准，2015.06 正式对外发布。


### 1. let 块级作用域，ES6 推荐在函数中使用 let 定义变量，而非 var： 

一般我们将一个大括号内的区域成为块级作用域，用let 声明的变量只会在块级作用域内部起作用，不会影响外面的变量
1.  let 声明的变量只在块级作用域内有效
2.  不存在变量提升，而是“绑定”在暂时性死区
3.  不能重复声明

### 2. ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构.
数组的解构赋值
对象的解构赋值
字符串的解构赋值
数值和布尔值的解构赋值
函数参数的解构赋值


1. 数组的解构赋值 
  本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

2. 对象的解构与数组有一个重要的不同。
  数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

### 3.多行字符串/模版变量

    JS
    var name = 'zhangsan',age = 20 , html = ''
    html += '<div>';
    html += '<p>' + name + '</p>';
    html += '<p>' + age + '</p>';
    html += '</div>';
    
    ES6
    var name = 'zhangsan', age = 20;
    var html = `
        <div>
            <p>${name}</p>
            <p>${age}</p>
        </div>
    `;
  总结：反引号多行字符串，${}变量

### 4.类
  //传统的javascript中只有对象，没有类的概念。它是基于原型的面向对象语言。原型对象特点就是将自身的属性共享给新对象。

  1.JS构造函数
    三部分组成，构造函数，原型拓展，实例化

    function MathHandle(x, y) {
        this.x = x
        this.y = y
    }
    
    MathHandle.prototype.add = function () {
        return this.x + this.y
    }
    
    var m = new MathHandle(1, 2)
    
     

    //ES6引入了Class（类）这个概念，通过class关键字可以定义类。
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
    }
上面代码定义了一个“类”，可以看到里面有一个constructor方法，一个类中必须有constructor方法，没有会被自动定义。/这就是构造方法，而this关键字则指向实例对象。

定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。




### 5. 箭头函数

ES6 中，箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体：
箭头函数不仅仅是让代码变得简洁，函数中 this 总是绑定指向对象自身。





## 牛刀小试
```
<script>
        // 第1个例子  

        // {
        //     var a = 2;
        //     let b = 6;         
        // }
        // console.log(a);
        // console.log(b);

        // 第2个例子   内外层作用域互不干扰

        // function fn() {
        //     let b = 1;
        //     if (true) {
        //         let b = 2;
        //         console.log(b);
        //     }
        //     console.log(b);
        // }
        // fn();

        // 第3个例子
        // let [a,b,c]=[1,2,[3]];
        // console.log(a,b,c);

        // let [a,b,[c]]=[1,2,[3]];     //值的格式必须和变量的格式相同
        // console.log(a);
        // console.log(b);
        // console.log(c);

        // let [a,...b] = [1,6,6,6,6];
        // console.log(a);
        // console.log(b);

        // let [a,b=5]=[1];               //可以给变量设置默认值
        // console.log(a,b);


        //第4个例子
        //默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
        // let [x = 1, y = x] = [];     // x=1; y=1
        // let [x = 1, y = x] = [2];    // x=2; y=2
        // let [x = 1, y = x] = [1, 2]; // x=1; y=2
        // let [x = y, y = 1] = [];     
        // console.log(x,y);

        //第5个例子
        //对象的解构赋值
        // let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
        // console.log(bar, foo);

        // let { baz } = { foo: 'aaa', bar: 'bbb' };
        // console.log(baz);

        // let { log } = console;
        // log('hello')
                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        // let obj = { first: 'hello', last: 'world' };
        // let { first: f, last: l } = obj;
        // // console.log(first,last);
        // console.log(f,l);

        // 实际上说明，对象的解构赋值是下面形式的简写。
        // let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
        // 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。


        //第6个例子   对象的解构赋值也可以设置默认值
        // var {x, y = 5} = {x: 1};
        // console.log(x,y)

        // 第7个例子   字符串的解构赋值
        // let [a,b,c,d,e]="hello";
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
        // console.log(e);

        // 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

        //第8个例子    函数参数的解构赋值

        // function add([x, y]) {
        //     return x + y;
        // }

        // add([1, 2]); // 3

        // class Point {
        //     constructor(x, y) {
        //         this.x = x;
        //         this.y = y;
        //     }

        //     toString() {
        //         return '(' + this.x + ', ' + this.y + ')';
        //     }
        //     log(){
        //         return "嘿"
        //     }
        // }

        // console.log(typeof(Point));

        // var point = new Point();
        // console.log(point.log());




        //JS
        var arr4 = [1, 2, 3];
        arr4.map(function (item) {
            return item + 1;
        })

        //es6
        var arr5 = [1, 2, 3];
        arr5.map(item => item + 1)


        // arr5.map((item, index) => {
        //     console.log(item)
        //     return item + 1;
        // })
    </script>

```