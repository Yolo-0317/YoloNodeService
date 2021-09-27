import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.logger = {
    level: 'DEBUG',
  };
  config.cors = {
    credentials: true,
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.yolo = {
    pythonCmd: '/usr/local/Frameworks/Python.framework/Versions/3.9/bin/python3.9',
    pythonShellPwd: '/Users/huan.yu/dev/demo/JueJinColToPdf',
  };
  config.security = {
    // domainWhiteList: [ 'http://localhost:3000' ],
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      // ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求

    },
  };
  return config;
};
