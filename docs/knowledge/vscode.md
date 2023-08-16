# vscode

## 快捷键

1.	ctrl+R  
打开所有的项目列表，快捷选择  

## 自定义代码片段
>在vscode中，新建html文件，输入英文'!'按回车即可生成html默认代码  
    我们也可以自定义代码片段，步骤如下

1.  文件->首选项->用户片段->新建全局代码片段文件
2.  输入自定义片段名称，回车
3.  按照以下格式添加即可(示例vue3)

```
{
    "vue3": {
        "prefix": "vue3",               //唤醒代码块的命令
        "body": [                       //body里就是生成的代码块，每一行都要用双引号包起来
            "<template>",
			"	<div>",
			"		$0",                //$0定义的是鼠标悬停的位置
			"	</div>",
			"</template>",
			"	",
			"<script lang='ts'>",
			"	export default {",
			"		name: '',",
			"		setup() {",
			"			",
			"			return{",
			"			}",
			"		},",
			"	};",
			"</script>"
        ],                              //代码块的主体
        "description": "vue3基础代码块"   //代码块的描述
    }
}

```
有报错的话不影响使用

## 实用插件
###	CSS

#### CSS tree  
::: tip 作用
将选定的HTML/JSX 转化为 scss, less or css  
默认为scss
:::


用法：

1.	选中对应的 HTML/JSX  
2.	Ctrl + shift + p  
3.	选择 Generate CSS tree  

示例：  
```
//html	
<div class="wrapper">
    <div class="box">
    </div>
</div>

//会生成以下内容
div.wrapper {
  div.box {

  }
}
```

###	字体
[Monaco](http://www.diyiziti.com/download/373/)  
下载完毕可直接安装  
或者控制面板->外观->字体  手动复制进去  
接着打开vscode的字体设置 	Monaco,'Fira Code', Consolas, 'Microsoft Yahei'   
<img src="/assets/img/vscode/vscode2.png" width="500" height="auto" align="middle" />

settings.json中此处改为true  
<img src="/assets/img/vscode/vscode1.png" width="500" height="auto" align="middle" />

### vue

#### 1.	vetur  

#### 2.	vue vscode snppets
::: tip 作用
快捷生成VUE通用代码   
vbase(快速生成vue通用模版),vdata,vmethods,vmounted等等
:::
<img src="/assets/img/vscode/vscode3.png" width="300" height="auto" align="middle" />


#### 3.	Project Manager(蓝色文件夹图标)
::: tip 作用
管理vscode中的多个项目    
可以给项目分类、打标签，显示隐藏，管理项目数量较多时十分有用  
:::

#### 4.	vue-helper
::: tip 作用
快速定义变量和方法位置 
:::

#### 5.TabNine(不止于vue)
::: tip 作用
一款利用机器学习补全代码的编辑器插件
:::