const express =require("express");
const routers = express.Router();
const loginCheck =require("../apps/middlewares/login.middleware")
const uploader =require("../apps/middlewares/uploader.middleware");
const {isAdminSeller}= require("../apps/middlewares/rbac.middleware")
const ProductController = require("../apps/Controllers/product.controller")
const product_ctrl = new ProductController();

routers.route("/")
    .get(product_ctrl.getAllProduct)
    .post(loginCheck,isAdminSeller, uploader.array("images"), product_ctrl.addProduct);
routers.route("/:id")
    .put(loginCheck,isAdminSeller, uploader.array("images"), product_ctrl.updateProduct)
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})

module.exports = routers;
