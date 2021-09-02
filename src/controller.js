const { Router } = require("express");

const router =Router();
module.exports = router;

router.get('/hello',(req,res)=>{
    const name =req.query.name
    res.json({"saudo":"Hola "+name});
});

router.post('/new',(req,res)=>{
    console.log(req.body)
    const cliente={
        mane:req.body.name, 
        lastName:req.body.lastName,
        addDate:Date.now()
    }
    res.json({"client":cliente})
});