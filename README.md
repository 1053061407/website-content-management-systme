# 一个网站内容管理系统 #



## 开发
```bash
    # 安装依赖
    npm install

    # 本地开发 开启服务
    npm run dev
```

## 发布
```bash
    # 打包
    npm run build
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```
## 功能

### 1.图片裁剪及预览功能
![裁剪并预览](https://upload-images.jianshu.io/upload_images/3185709-2ac721e7b00bf781.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 2.新建(编辑)文章
![image.png](https://upload-images.jianshu.io/upload_images/3185709-ca66caa9442a04a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.管理文章
![image.png](https://upload-images.jianshu.io/upload_images/3185709-9bd06a01c45d830d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
