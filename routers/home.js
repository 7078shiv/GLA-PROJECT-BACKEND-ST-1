const express=require("express");
const router=express.Router();
router.get('/',(err,res)=>{
   // res.send('Hello shivang');
    res.render('index')
})

module.exports=router;