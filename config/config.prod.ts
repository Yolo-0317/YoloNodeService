import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.logger = {
    level: 'DEBUG',
    allowDebugAtProd: true,
  };
  config.yolo = {
    pythonCmd: '/usr/bin/python',
    pythonShellPwd: '/root/JueJinColToPdf',
  };
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      // ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      enable: false,
    },
  };

  return config;
};
