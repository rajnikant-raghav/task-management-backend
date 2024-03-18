const express = require("express");
const app = express();

app.get('/',async(req,res)=>{
res.send("Hello World!");
})

app.listen(4000,()=>console.log('Server started at localhost:4000'));
