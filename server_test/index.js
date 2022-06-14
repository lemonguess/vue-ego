const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req, res)=>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
//利用require自带的核心模块querystring，解析参数
    const query = querystring.parse(url.split('?')[1])

//响应数据
    const responseData = {
        method,
        url,
        path,
        query
    }

    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET'){
        res.end(
            JSON.stringify(responseData))
    }

    if (method === 'POST'){
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', ()=>{
            responseData.postData = postData;

            res.end(
                JSON.stringify(responseData)
            )
        })
    }
});

//监听端口5000，如果监听成功，则打印相关信息
server.listen(5000, ()=>{
    console.log('server running at port 5000')
});