const express = require("express");
const routers = express.Router();
const UserController = require("../apps/Controllers/user.controller");
const letLoginCheck = require("../apps/middlewares/login.middleware");
const user_ctrl = new UserController();

routers.route("/login")
    .post(user_ctrl.userLogin)

routers.route("/me")
    .get(letLoginCheck,user_ctrl.myProfile)
module.exports = routers;