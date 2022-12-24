const express = require("express");
const app = express();

const user_routers =require("./user");

const slider_routers = require("./slider");
const brand_routers = require("./brand");
const category_routers = require("./category");
const product_routers = require("./product");
const order_routers =require("./order");
const label_routers = require("./label");



app.use("/user",user_routers);

app.use("/slider",slider_routers);

app.use("/brand",brand_routers);

app.use("category", category_routers);

app.use("product",product_routers);

app.use("orders",order_routers);

app.use("label", label_routers);

module.exports = app;