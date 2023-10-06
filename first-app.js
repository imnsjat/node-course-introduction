const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const adminroutes = require('./routes/admin');
const loginroute = require('./routes/login');
app.use(loginroute);
app.use('/admin' , adminroutes);

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.get('/',(req,res,next)=>{
    res.send('<h1> working fine </h1>');
})
app.use((req,res,next)=>{
    res.send('<h1>not found page</h1>')
})
app.listen(3000);



