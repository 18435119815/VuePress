#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:18435119815/18435119815.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:18435119815/VuePress.git master:gh-pages

cd -


# SSH配置
# 1.   检查有没有ssh                                            `cd ~/.ssh`
# 2.   看看有没有id_rsa和id_rsa_pub文件,么有说明没有公钥            `ls`
# 3.   生成密钥，一路回车即可                                     `ssh-keygen -t rsa -C '自己的邮箱地址'`
# 4.    添加密钥到ssh-agent，先确保ssh-agent是有用的                `eval "$(ssh-agent -s)"` 
# 5.    添加生成的SSH key到ssh-agent                              `ssh-add ~/.ssh/id_rsa`
# 6.    github->settings->SSH and GPGkeys->new SSH key->把id_rsa_pub的内容复制进去
# 7.    测试，如果看到Hi后面是github的用户名，就成功了                 `ssh -T git@github.com`

# 推送成功后,去github的项目分支gh-pages上的setting

# 线上地址：https://18435119815.github.io/VuePress/
# 更改内容推送成功后，去gitHub->VuePress->gh-pages分支上可以查看是否更新成功
# 无法推送成功多半是因为依赖错误导致的，删除nodemodules文件夹，通过npm重新更新即可