const router = require('koa-route');
const SIGN = require('./sign');

module.exports = function(app) {
    app.use(router.get('/', async ctx => {
        await ctx.render('index.pug', {
            title: '微信测试页面'
        });
    }));

    app.use(router.get('/send_msg', ctx => { 
        ctx.response.body = ctx.request.query.echostr;
    }));

    app.use(router.get('/get_token', async ctx => {
        await SIGN.getToken(data => {
            ctx.response.body = data;
        }); 
    }));
};