const Koa = require('koa');
const fs = require('fs');

const app = new Koa(); 

const main = ctx => {
    ctx.response.body = "hello world";
};

app.use(main);
app.listen(3002);

console.log('HOST runing in port: 3002');
