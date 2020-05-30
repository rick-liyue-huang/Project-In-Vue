```
npm i @vue/cli -g
vue create project-in-vue
--registry=https://registry.npm.taobao.org
npm i vue-cli -g --registry=https://registry.npm.taobao.org
vue init webpack project-in-vue
```

安装 fastclick 用来解决 移动端 click 点击事件 有 300ms 延迟

将分支合并到 master

```
git checkout master
git merge origin/index-swiper
git push origin master
```

真机联调 可以在手机上做测试

```
ifconfig
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",

npm i babel-polyfill --save --registry=https://registry.npm.taobao.org
```

打包上线

```
npm run build
assetsPublicPath: "/project1"
```

异步加载 处理 router/index.js
根据文件大小 需要平衡
`component: () => import("@/pages/home/Home")`

这个项目使用 stylus
所以需要下载 stylus stylus-loader
另外需要在 settings.json 中配置 stylus

```
    "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",

```

使得可以通过 ip 地址来访问，这样手机也可以使用该 ip 地址

在 config/index.js 打包后的文件放入到 mamp 的 project1 中

```
// 将打包文件放入到 project1文件夹里面
    assetsPublicPath: "/project1",
```
