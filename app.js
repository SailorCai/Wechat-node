const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');

const app = new Koa(); 

const main = ctx => {
    ctx.response.body = "hello world";
};

app.use(views(path.join(__dirname, 'app/views/pages'), {
    default: 'pug',
    map: {pug: 'pug'},
    extension: {html: 'pug'}
}));

//app.use(main);
app.use(serve(path.join(__dirname, 'public')));

require('./config/routes')(app);
app.listen(3002); 

console.log('HOST runing in port: 3002');
