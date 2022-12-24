//router level middleware
// user, slider, brand, category, product ,order

const express = require("express");
const router = express.Router();
const loginCheck = require("../apps/middlewares/login.middleware");
const UserController = require("../apps/Controllers/user.controller");

const user_ctrl = new UserController();

router.route("/")
    .get(loginCheck,user_ctrl.listAllUser)
    .post(loginCheck,user_ctrl.userRegister);





router.route("/:id")
    .get(user_ctrl.getUserId)
    .put(user_ctrl.updateUserById)
    .delete(user_ctrl.deleteUserById)
    .all((req,res,next)=>{})


module.exports = router;