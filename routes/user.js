//router level middleware
// user, slider, brand, category, product ,order

const express = require("express");
const router = express.Router();
const loginCheck = require("../apps/middlewares/login.middleware");

router.route("/")
    .get(loginCheck,(req,res,next)=>{
        res.json({
            result:"UserList here!",
            status:true,
            msg:"all the users feached"
        })
    })
    .post(loginCheck,(req,res,next)=>{
        res.json({
            result:"post request useer",
            status:true,
            msg:"user register"
        });
    })



router.route("/:id")
    .get((req,res,next)=>{})
    .put((req,res,next)=>{})
    .delete((req,res,next)=>{})
    .all((req,res,next)=>{})


module.exports = router;