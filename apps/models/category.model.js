const mongoose = require("mongoose");
const CategorySchemaDef = new mongoose.Schema({
    title:{
        type: String,   
        required: true,
        unique:true
    },
    slug:{
        type: String,
        required: true,
        unique:true
    },
    image:{
        type:String

    },
    parent:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        default:null
    },
    status:{
        type: String,
        enum:["active","inactive"]
    },
    brand:[{
        type: mongoose.Types.ObjectId,
        ref:"Label"
    }],



},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
})

const CategoryModel = mongoose.model("Category",CategorySchemaDef);
module.exports= CategoryModel;