const http =require('http');
const app=http.createServer();
app.on('request',(req,res)=>{
    res.end('呵呵')
})
app.listen(80, () => {
    console.log('请打开 http://localhost')
})