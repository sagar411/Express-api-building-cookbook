const mongoose = require("mongoose");

const LabelSchemaDef = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    link:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["banner","brand"],
        default:"banner",
        required:true
    },
    status:{
        type:String,
        enum:["active", "inactive"],
        default:"inactive"
    }
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
});

const LabelModel = mongoose.model("Label", LabelSchemaDef);

module.exports = LabelModel;