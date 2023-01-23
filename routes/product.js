const express =require("express");
const routers = express.Router();
const loginCheck =require("../apps/middlewares/login.middleware")
const uploader =require("../apps/middlewares/uploader.middleware");
const {isAdminSeller}= require("../apps/middlewares/rbac.middleware")
const ProductController = require("../apps/Controllers/product.controller")
const product_ctrl = new ProductController();

routers.route("/")
    .get((req,res,next)=>{})
    .post(loginCheck,isAdminSeller, uploader.array("image"), product_ctrl.addProduct);
routers.route("/:id")
    .put((req,res,next)=>{})
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})

module.exports = routers;
