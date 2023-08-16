# Git的基础使用

## 基础命令
1.  git status                  查看文件状态
2.  git add 文件名               增加单个文件到暂存区
3.  git reset <文件名>           将某个文件退出暂存区
4.  git reset <'commit id'>     将版本回退到某次提交前
5.  git log                     提交日志
6.  git reflog                  所有的操作日志
7.  git checkout -b<'name'><'template'>  创建新的分支
8.  git check <'name'>          切换分支

## 文件状态
1.  Untracked    
新建文件时的状态

2.  Unmodified  
文件刚刚git commit后的状态，未修改之前

3.  Modified 
有过commit记录的文件

4.  Staged  
git add 之后的状态


## reset的三种模式
使用git reset后面的后缀
1.  --hard 不保存所有变更
2.  --soft 保留变更且变更内容处于Stged
3.  --mixed 保留变更且变更内容处于Modified