##简阅读书Book版块

## Preview

![bookread](https://raw.githubusercontent.com/junglehunter96/imgStorage/note/img/20190808171313.gif)

## 技术栈:

    电子书插件: epubjs,
    框架: vue,
    国际化: vue-i18n,
    路由管理: vue-router,
    状态管理和持久化: vuex,web-storage-cache


在静态资源服务器(我使用的nginx)下增加如下配置:

```nginx

http {
  server {
    listen  8081;
    server_name  localhost;
    root  /Users/sam/upload;
    autoindex  on;
    location / {
      add_header  Access-Control-Allow-Origin *;
      index  index.html index.htm;
    }
  }
}
```

同时将resource文件夹下的epub和主题等文件加入你静态资源服务器中的 upload下

`.env.development`配置文件内容如下：

```shell
VUE_APP_EPUB_URL=http://192.168.31.243/epub
VUE_APP_EPUB_OPF_URL=http://192.168.31.243/epub2
VUE_APP_RES_URL=http://192.168.31.243/book/res
```

其中地址为你资源服务器对应的地址,也可以添加到本地

## 安装包
```
npm install
```

### 运行项目
通过如下指令运行项目
```
npm run dev
```

此时我们就可以通过本机地址访问了
