const http = require('http');
//处理参数的一个api
const querystring = require('querystring');



//node处理get,post请求
const serve = http.createServer((req,res) => {
    //请求方法和url都在req中
    const {method,url} = req;
    res.setHeader('Content-Type'='application/json');
    res.writeHead(404,'Content-Type','text/plain');
    res.write('404 Not Fonud');

    //get请求
    if(method === 'GET'){
        req.query = querystring.parse(url.split('?')[1]);
        res.end(JSON.stringify(req.query))
    }
    

    //post请求
    if(method === 'POST'){
        let postData = '';
        //数据是以流的方式分批返回的  所以定义一个字符串依次接收
        req.on('data',(chunk)=>{
            postData += chunk.toString();
        });
        req.on('end',()=>{
            console.log(postData);
            res.end('数据接收完毕')
        });
    }
})

serve.listen(5000,()=>{
    console.log('启动成功');
})


setTimeout(() => {
    console.log(2)
},2000)

setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
        setTimeout(() => {
            console.log(3)
        },0)
    })
},1000)