ts版的egg的部署: https://blog.tcs-y.com/2018/10/05/egg-ts-deploy/

服务器log位置：/root/logs/juejin-export/

#### TypeScript版 npm start 报错：eggjs please set config.keys first
```
先 执行 npm run ci
然后 npm start
```

#### EggJS 生产环境 /项目目录/logs/ 中没有日志
查询 run/application_config.json 中的
```
"logger": {
    "dir": "/Users/***/huan.yu/dev/demo***/juejin-export/logs/juejin-export", // 确认这个路径来查看日志
    ...
}
```

#### CORS配置
##### 1、安装egg-cors
```
npm i egg-cors -S
```

##### 2、在config/plugin.js声明
```
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
```

##### 3、在config/config.**.js配置 
```
//跨域配置
config.security = {
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
      ignoreJSON: true
    },
    domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080'], //配置白名单
};
  
config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
```
