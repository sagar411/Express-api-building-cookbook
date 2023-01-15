const express = require("express");
const routers = express.Router();
const UserController = require("../apps/Controllers/user.controller");
const user_ctrl = new UserController();

routers.route("/login")
    .post(user_ctrl.userLogin)

module.exports = routers;