const express = require("express");
const routers = express.Router();

routers.route("/")
    .get((req,res,next)=>{})
    .post((req,res,next)=>{})

routers.route("/:id")
    .put((req,res,next)=>{})
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})

module.exports = routers;