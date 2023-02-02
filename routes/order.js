const express = require("express");
const routers = express.Router();
const loginCheck = require("../apps/middlewares/login.middleware")
const OrderController = require("../apps/Controllers/order.controller");

const ord_Ctrl = new OrderController();
routers.route("/")
    .get((req,res,next)=>{})
    .post(loginCheck, ord_Ctrl.createOrder)

routers.route("/:id")
    .put((req,res,next)=>{})
    .patch((req,res,next)=>{})
    .delete((req,res,next)=>{})

module.exports = routers;