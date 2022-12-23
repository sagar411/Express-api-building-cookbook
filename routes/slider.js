const express = require("express");
const router = express.Router();

router.route("/")
    .get((req,res,next)=>{
        res.json({
            result:"hello from slider get method"
        })
    })
    .post((req,res,next)=>{})

router.route("/:id")
    .get((req,res,next)=>{})
    .put((req,res,next)=>{})
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})





module.exports = router;