const express = require("express");
const app = express();
const test_routes = require("./test")
const user_routers =require("./user")

app.use("/", test_routes);

app.use("/hello",user_routers);

module.exports = app;