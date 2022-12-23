const routers = require("express").Router();
const loginCheck = require("../apps/middlewares/login.middleware")
routers.route("/")
    .get(( req,res,next)=>{})
    .post(loginCheck,(req,res,next)=>{});

routers.route("/:id")
    .get(( req,res,next)=>{})
    .put(( req,res,next)=>{})
    .post(( req,res,next)=>{});

module.exports = routers;