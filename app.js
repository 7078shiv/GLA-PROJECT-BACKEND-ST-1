const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const homeRoutes=require('./routers/home');

const app=express();
const port=process.env.port || 8080;

mongoose.connect('mongodb://127.0.0.1:27017/articledb')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connect t MongoDB...',err));

app.get("/home",(err,res)=>{
    res.send("Hello")
})

app.set('views engine','ejs');



app.listen(port,(req,res)=>{

})

app.use('/',homeRoutes)

app.post('/articles', async (req, res) => {
    const formData = req.body;

    const nPD = {
        title: formData.title,
        desc: formData.desc,
        markdown: formData.mkd,
        date: new Date()
    };

    const articleID = await m.m.insertMany([nPD]);
    res.redirect('/');
});