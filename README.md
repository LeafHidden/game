# 小游戏平台

![](https://raw.githubusercontent.com/LeafHidden/game/master/image/fm.png)

声明1：本项目仅供学习，如有侵权请联系本人进行删除。

声明2：纯web实现项目，无任何接口,json数据调用本地，只需要配置mock.js或mock.json就可以渲染数据，pc端移动端都做了响应式处理



## 本项目包括：

主要框架:

- [💚 Nuxt 3](https://nuxt.com/) +⚡️ Vite +🎨 [UnoCSS](https://github.com/antfu/unocss) +🔥 The `<script setup>` syntax.+🍍 Pinia+📥VueUse 

其他:

- Crypto-js 路由参数加密
- fuse.js模糊搜索游戏
- pnpm 依赖管理



## 运行环境

```
pnpm i
pnpm run dev
```



## 额外说明

- composables文件下用于引入json文件,创建store,共享页面状态,后期可拓展调用接口
- constants 页面title
- directives 指令 loading
- layouts 自定义布局
- page index首页 details 详情
- public 静态资源文件夹
- types 类型文件
- utils 公共方法





