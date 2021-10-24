##
> cli工具 
## 1.暴露出命令

>demo文件目录下执行 npm run build 打包
##  1. demo 目录下执行 npm init; 在 package.json 添加打包命令 "build": "tool".
##  2. 进入到 tool 目录 执行 npm link 将命令挂载到全局.
##  3. 进入到 demo 目录 执行 npm link tool 关联 tool 命令，这样就可以在 demo 执行命令.
##  4. 执行成功后会在 demo 目录下生成打包好的dist文件夹.

##  进入到 demo 目录 执行 npm unlink tool 取消关联 tool 

