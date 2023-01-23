const express = require("express");
const loginCheck = require("../apps/middlewares/login.middleware");
const routers = express.Router();
const {isAdmin }= require("../apps/middlewares/rbac.middleware");
const uploader =require("../apps/middlewares/uploader.middleware");
const CategoryController =require("../apps/Controllers/category.controller");
const cat_catrl = new CategoryController();

routers.route("/")
    .get(cat_catrl.getAllCategory)
    .post(loginCheck,isAdmin,uploader.single("image"),cat_catrl.createCategory)

routers.route("/:id")
    .get(cat_catrl.getCategoryDetail)
    .put(loginCheck,isAdmin,uploader.single("image"),cat_catrl.updateCategory)
    .patch((req,res,next)=>{})
    .delete(loginCheck,isAdmin,cat_catrl.deleteCategory)

module.exports = routers;