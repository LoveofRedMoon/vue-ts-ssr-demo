# vue-ts-ssr-demo
基于Vue+typescript+ssr的基础模板

## 目录结构介绍
+ `model`: 类型参数, 涉及到前后端公用
+ `public`: 原`vue-cli3`的前端`public`目录
+ `src`: 原`vue-cli3`的前端`src`目录, 其中新增`entry-client.ts`为客户端入口, `entry-server.ts`为服务端入口
+ `serve`: 服务器端目录, 目前仅
    - 挂载了静态目录`dist`
    - 挂载了服务器端渲染操作
    - 基于`express`

#