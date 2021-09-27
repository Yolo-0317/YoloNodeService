import { Service } from 'egg';
import { exec } from 'child_process';

/**
 * ExecPromise Service
 */
export default class ExecPromise extends Service {
  public async index(command) {
    const { ctx } = this;
    return new Promise(function(resolve, reject) {
      exec(command, (error, stdout, stderr) => {
        ctx.logger.info(stderr);
        if (error) {
          reject(error);
          return;
        }

        resolve(stdout);
      });
    });
  }
}
