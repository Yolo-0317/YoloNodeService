import { Controller } from 'egg';

export default class exportArticlePdfController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.logger.info('--- exportArticlePdfController ---');
    const { articleUrl } = this.ctx.request.body;
    ctx.logger.info(articleUrl);
    const articleId = articleUrl.split('/').pop().split('#')
      .shift();
    ctx.logger.info(articleId);
    const { pythonShellPwd, pythonCmd } = this.config.yolo;
    const req = await ctx.service.execPromise.index(`cd ${pythonShellPwd}; ${pythonCmd} main.py ${articleId} a`).then(stdout => {
      ctx.logger.info(stdout);
      const matchedPdfTitleInfo = (stdout as string).match(/\/pdfs.*\.pdf/);
      if (matchedPdfTitleInfo) {
        ctx.logger.info(matchedPdfTitleInfo);
        return matchedPdfTitleInfo;
      }
    });
    ctx.body = req;
  }
}
