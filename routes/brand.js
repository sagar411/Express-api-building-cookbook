const express = require("express");
const routers = express.Router();

routers.route("/")
    .get((req,res,next)=>{
        res.json({
            result:"hello from brand get method"
        })
    })
    .post((req,res,next)=>{})

routers.route("/")
    .put((req,res,next)=>{})
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})

module.exports = routers;