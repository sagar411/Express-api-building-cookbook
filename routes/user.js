//router level middleware
// user, slider, brand, category, product ,order

const express = require("express");
const { route } = require("./test");

const router = express.Router();

router.route("/")
    .get((req,res,next)=>{
        res.json({
            result:"hello from get user"
        })
    })
    .post((req,res,next)=>{})

router.route("/:id")
    .get((req,res,next)=>{})
    .put((req,res,next)=>{})
    .delete((req,res,next)=>{})
    .all((req,res,next)=>{})


module.exports = router;