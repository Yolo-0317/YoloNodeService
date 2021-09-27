import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.logger.info('info foo ctx');
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
