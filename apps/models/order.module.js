const mongoose = require("mongoose");

const OrderSchemaDef = new mongoose.Schema({
    order_id :{
        type: String,
        required: true,

    },
    order_by: {
        type:mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    product :{
        type: mongoose.Types.ObjectId,
        ref:"Produce",
        required:true,
    },
    qty:{
        type: Number,
        required:true,
        min: 1
    },
    sub_amount:{
        type: Number,
        required:true,
        min:1

    },
    discount:{
        type:Number,
        required: true,
        min:1
    },
    total_amount:{
        type:Number,
        required:true,
        min:1
    
    },
    status:{

        type: String,
        enum:["new", "verifyed", "cancelled","deliverd"],
        default: "new"
    },
    note:{
        type: String
    }
,},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const OrderModel = new mongoose.model("Order", OrderSchemaDef);

module.exports = OrderModel;