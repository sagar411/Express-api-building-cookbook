const mongoose = require("mongoose");
const LocationSchema = new mongoose.Schema({
    location:{
        type: String
    }
})
const   UserSchemaDef = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["active","inactive"],
        default:"active"

    },
    role:{
        type:String,
        required: true,
        enum:["admin", "seller","customer"],
        default:"customer"
    },
    address:{
        billing:LocationSchema,
        shipping:LocationSchema
    },

},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
});

const UserModel = mongoose.model("User", UserSchemaDef);
module.exports = UserModel;