const routers = require("express").Router();
const loginCheck = require("../apps/middlewares/login.middleware");
const isAdmin = require("../apps/middlewares/rbac.middleware");
const LabelController = require("../apps/Controllers/label.controller");
const uploader = require("../apps/middlewares/uploader.middleware");

const labelCtrl = new LabelController();
routers.route("/")
    .get(loginCheck,isAdmin)
    .post(loginCheck,isAdmin,uploader.single("image"),labelCtrl.store);
    

routers.route("/:id")
    .get(loginCheck,isAdmin,( req,res,next)=>{
        res.json({
            result: "hello"
        })
    })
    .put(( req,res,next)=>{})
    .post();

module.exports = routers;