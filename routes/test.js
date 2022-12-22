const express = require("express");

const app = express();


const isLoggedIn = (req,res,next)=>{
    let a= req.params.id;
    if(a==1){
        next();
    }else{
        res.json({
            result:"sorry"
        })
    }
}

app.get("/:id",isLoggedIn, (req,res,next)=>{
    res.json({
        result:"hello world"
    })
});

app.get("/product/:slug",(req,res)=>{
    let slug = req.params.slug;
    res.json({
        result:slug,
        status:true,
        msg:"Fetched"
    })
});

app.get("/user/:id",(req,res)=>{
    console.log(req.params.id)
    res.json({
        id: req.params.id,
        test: req.query.ids

    })
})

app.post("/",(req,res)=>{
    res.end("post request")
})

app.patch("/",(req,res)=>{
    res.end("patch")
})

app.use("/about",(req,res)=>{
    res.end("use data")
})

module.exports = app;
