(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{654:function(s,e,a){"use strict";a.r(e);var n=a(88),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"object对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object对象"}},[s._v("#")]),s._v(" Object对象")]),s._v(" "),a("h2",{attrs:{id:"_1-object-assign-obj1-obj2-obj3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-object-assign-obj1-obj2-obj3"}},[s._v("#")]),s._v(" 1. Object.assign(obj1,obj2,obj3,......)")]),s._v(" "),a("blockquote",[a("p",[s._v("可用于对象的拼接，将obj2，obj3......拼接到对象obj1上，并将obj1返回，obj1改变，其他对象不变。")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。即obj1中的同名键的值会被obj2,obj3中的依次覆盖")])]),s._v(" "),a("blockquote",[a("p",[s._v("Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var obj1={name:'张三',num:1};\nvar obj2={age:18,num:2};\nvar obj3={\n  say:function(){\n    console.log('说话');\n  },\n  num:3\n}\nconsole.log(Object.assign(obj1,obj2,obj3));     //{name: \"张三\", num: 3, age: 18, say: ƒ}\nconsole.log(obj1,obj2);                         //{name: \"张三\", num: 3, age: 18, say: ƒ}   {age: 18}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_2-object-defineproperty-obj-key-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-object-defineproperty-obj-key-options"}},[s._v("#")]),s._v(" 2. Object.defineProperty(obj,key,{options})")]),s._v(" "),a("blockquote",[a("p",[s._v("可用于自定义对象属性，细节化的控制每个可配置项，一般用于自己搭建框架。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var obj = new Object();\n\nvar name = '任俊峰';\n\nObject.defineProperty(obj, 'name', {\n    configurable: false,        //该属性是否可删除，默认false\n    writable: true,             //该属性是否可被修改，默认false\n    enumerable: true,           //该属性是否可枚举，默认false\n    value: '张三',               //属性默认值 \n    //上面四个属性与下面的get、set不可同时存在\n    get(){\n      return name;\n    },\n    set(value){\n      name = value;\n    }\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"_3-object-prototype-hasownproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-object-prototype-hasownproperty"}},[s._v("#")]),s._v(" 3. Object.prototype.hasOwnProperty()")]),s._v(" "),a("blockquote",[a("p",[s._v("返回一个布尔值。用来判断对象自身是否包含某个属性，不包括原型属性。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  const obj = {name:"aiyouwei"};\n  obj.hasOwnProperty("name");       //true\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-object-keys-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-object-keys-obj"}},[s._v("#")]),s._v(" 4. Object.keys(obj)")]),s._v(" "),a("blockquote",[a("p",[s._v("返回一个由自身可枚举属性组成的数组")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var arr = ['a', 'b', 'c'];\nconsole.log(Object.keys(arr)); // console: ['0', '1', '2']\n\nvar obj = { 0: 'a', 1: 'b', 2: 'c' };\nconsole.log(Object.keys(obj)); // console: ['0', '1', '2']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);