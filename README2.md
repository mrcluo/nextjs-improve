## build后(服务器里的东西)
- 打包后的目录: .next/server
- 一个路径一个组件
- ssg打包后会有个html, ssr没有, csr内容是空的


## SSG 写法

## SSR 写法

## SSG更新
 - 手动更新: 再build
 - 自动更新: 
getStaticProps revalidate: 30 // 秒  更新的是node中间层返回页面里的内容的时间

 - 场景:
淘宝抢购页面每秒十万个用户请求,SSR 每秒渲染十万次, SSG每秒渲染一次(revalidate: 1 // 秒对服务器性能很友好)

## 运行
npm run dev 开发环境构建启动页面: 这个测试SSR SSG的效果等于手动更新了, 因为每次刷新会重新构建

npm run start 启动build的页面: 测试SSR SSG的效果一定要npm run start运动build包 模拟上服务器后的页面渲染的效果