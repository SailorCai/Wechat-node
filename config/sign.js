// 该模块用于获取微信网页签名
const https = require('https');
const appID = 'wx63dac842f9a12329', appsecret = '1ce75543999c18a3c4d3fe3410767583';
const urlStr = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET';

var token_str = urlStr.replace('APPID', appID).replace('APPSECRET', appsecret);

var getToken = function (cb) {
    let chunks = [];
    https.get(token_str, res => {
        res.on('data', (d) => {
            chunks.push(d);
            // console.log(JSON.parse(d.toString()).access_token);
        });
        res.on('end', () => {
            let buffer = Buffer.concat(chunks);
            let result = JSON.parse(buffer);
            cb(result);
        });
    }).on('error', err => {
        console.error(err);
    });
};

module.exports = {
    getToken: getToken
};
