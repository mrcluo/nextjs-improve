## 运行
 - npm run dev 开发环境构建启动页面: 这个测试SSR SSG的效果等于手动更新了, 因为每次刷新会重新构建

 - npm run start 启动build的页面: 测试SSR SSG的效果一定要npm run start运行build包 模拟上服务器后的页面渲染的效果

## SSG 写法

/pages/pages/[id].tsx
## SSR 写法

/pages/pages/[id]-ssr.tsx

## build后(服务器里的东西)
- 打包后的目录: .next/server
- 一个路径一个组件
- ssg打包后会有个html, ssr没有, csr内容是空的


## SSG更新
 - 手动更新: 再build
 - 自动更新: 
getStaticProps revalidate: 30 // 秒  更新的是node中间层返回页面里的内容的时间

 - 场景:
淘宝抢购页面每秒十万个用户请求,SSR 每秒渲染十万次, SSG每秒渲染一次(revalidate: 1 // 秒对服务器性能很友好)



## css引入
- 全局

// _app.tsx

import "@/styles/globals.css";
- 局部
  
// 对应模块

import style from "./xx.module.css";

<div className={style.textred}></div>

## 路由
- index路由 pages/blog/index.js  =>   /blog (文件路径对应页面路径)
- 嵌套路由 pages/blog/first-post.js => /blog/first-post  (文件路径对应页面路径)
- 动态路由
  - [id] 也可 pages/post/[...all].js => /post/*(/post/2020/id/title)
  - id?xx=22 
    -  客户端获取 const route = useRouter()  route.query
    -  服务端获取 context.query  (ssr阶段获取, ssg不可)
- 路由跳转
  - a标签: 刷新页面
  - link: 单页面, 局部刷新
  - onClink={()=> rouer.push('/xxx')}  useRouter  单页面, 局部刷新
- API路由(接口)
  - 和页面路径的index路由类似,  pages/api/article.ts   就有一个接口 /api/article