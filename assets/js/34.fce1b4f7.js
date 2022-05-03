(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{675:function(t,s,a){"use strict";a.r(s);var e=a(88),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[t._v("#")]),t._v(" vscode")]),t._v(" "),a("h2",{attrs:{id:"快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),a("ol",[a("li",[t._v("ctrl+R"),a("br"),t._v("\n打开所有的项目列表，快捷选择")])]),t._v(" "),a("h2",{attrs:{id:"自定义代码片段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义代码片段"}},[t._v("#")]),t._v(" 自定义代码片段")]),t._v(" "),a("blockquote",[a("p",[t._v("在vscode中，新建html文件，输入英文'!'按回车即可生成html默认代码"),a("br"),t._v("\n我们也可以自定义代码片段，步骤如下")])]),t._v(" "),a("ol",[a("li",[t._v("文件->首选项->用户片段->新建全局代码片段文件")]),t._v(" "),a("li",[t._v("输入自定义片段名称，回车")]),t._v(" "),a("li",[t._v("按照以下格式添加即可(示例vue3)")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "vue3": {\n        "prefix": "vue3",               //唤醒代码块的命令\n        "body": [                       //body里就是生成的代码块，每一行都要用双引号包起来\n            "<template>",\n\t\t\t"\t<div>",\n\t\t\t"\t\t$0",                //$0定义的是鼠标悬停的位置\n\t\t\t"\t</div>",\n\t\t\t"</template>",\n\t\t\t"\t",\n\t\t\t"<script lang=\'ts\'>",\n\t\t\t"\texport default {",\n\t\t\t"\t\tname: \'\',",\n\t\t\t"\t\tsetup() {",\n\t\t\t"\t\t\t",\n\t\t\t"\t\t\treturn{",\n\t\t\t"\t\t\t}",\n\t\t\t"\t\t},",\n\t\t\t"\t};",\n\t\t\t"<\/script>"\n        ],                              //代码块的主体\n        "description": "vue3基础代码块"   //代码块的描述\n    }\n}\n\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("有报错的话不影响使用")]),t._v(" "),a("h2",{attrs:{id:"实用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用插件"}},[t._v("#")]),t._v(" 实用插件")]),t._v(" "),a("h3",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("h4",{attrs:{id:"css-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-tree"}},[t._v("#")]),t._v(" CSS tree")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("作用")]),t._v(" "),a("p",[t._v("将选定的HTML/JSX 转化为 scss, less or css"),a("br"),t._v("\n默认为scss")])]),t._v(" "),a("p",[t._v("用法：")]),t._v(" "),a("ol",[a("li",[t._v("选中对应的 HTML/JSX")]),t._v(" "),a("li",[t._v("Ctrl + shift + p")]),t._v(" "),a("li",[t._v("选择 Generate CSS tree")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//html\t\n<div class="wrapper">\n    <div class="box">\n    </div>\n</div>\n\n//会生成以下内容\ndiv.wrapper {\n  div.box {\n\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.diyiziti.com/download/373/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monaco"),a("OutboundLink")],1),a("br"),t._v("\n下载完毕可直接安装"),a("br"),t._v("\n或者控制面板->外观->字体  手动复制进去"),a("br"),t._v("\n接着打开vscode的字体设置 \tMonaco,'Fira Code', Consolas, 'Microsoft Yahei'"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/img/vscode/vscode2.png",width:"500",height:"auto",align:"middle"}})]),t._v(" "),a("p",[t._v("settings.json中此处改为true"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/img/vscode/vscode1.png",width:"500",height:"auto",align:"middle"}})]),t._v(" "),a("h3",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("h4",{attrs:{id:"_1-vetur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vetur"}},[t._v("#")]),t._v(" 1.\tvetur")]),t._v(" "),a("h4",{attrs:{id:"_2-vue-vscode-snppets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-vscode-snppets"}},[t._v("#")]),t._v(" 2.\tvue vscode snppets")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("作用")]),t._v(" "),a("p",[t._v("快捷生成VUE通用代码"),a("br"),t._v("\nvbase(快速生成vue通用模版),vdata,vmethods,vmounted等等")])]),t._v(" "),a("img",{attrs:{src:"/assets/img/vscode/vscode3.png",width:"300",height:"auto",align:"middle"}}),t._v(" "),a("h4",{attrs:{id:"_3-project-manager-蓝色文件夹图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-project-manager-蓝色文件夹图标"}},[t._v("#")]),t._v(" 3.\tProject Manager(蓝色文件夹图标)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("作用")]),t._v(" "),a("p",[t._v("管理vscode中的多个项目"),a("br"),t._v("\n可以给项目分类、打标签，显示隐藏，管理项目数量较多时十分有用")])])])}),[],!1,null,null,null);s.default=n.exports}}]);