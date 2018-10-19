# react-ts-template
#通过create-react-app脚手架生成项目基本机构
#1、安装create-react-app：npm install -g create-react-app
#2、创建新项目：create-react-app react-ts-template --scripts-version = react-scripts-ts
#3、如果想要调出配置文件进行修改，请执行npm run eject（执行此命令的前提是所有文件都进行git commit）
#如果弹出失败，可以新建一个项目文件夹，把项目内容拷贝进去，执行
#git init
#git add .
#git commit -m “初始提交。”
#4、配置文件弹出后，通过修改webpack的配置文件，实现支持多页面应用（主要思想是修改entry和HtmlWebpackPlugin等，网上实现方案很多，这里不再赘述）
#5、执行npm install安装所需依赖包
#6、执行npm start运行项目，看效果
#7、执行npm run build创建生产构建，会生成一个build文件夹，里面是编译后的资源文件
#8、项目采用的是sass书写样式
#9、采用axios进行http请求
#10、自定义环境变量在.env.development和.env.production文件中进行配置
#11、跨域proxy在package.json中进行配置
#12、单向数据流转
