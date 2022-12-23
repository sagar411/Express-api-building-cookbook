const express = require("express");
const app = express();
const test_routes = require("./test");
const user_routers =require("./user");

const slider_routers = require("./slider");
const brand_routers = require("./brand");
const category_routers = require("./category");
const product_routers = require("./product");
const order_routers =require("./order");

app.use("/", test_routes);

app.use("/user",user_routers);

app.use("/slider",slider_routers);

app.use("/brand",brand_routers);

app.use("category", category_routers);

app.use("product",product_routers);

app.use("orders",order_routers);

module.exports = app;