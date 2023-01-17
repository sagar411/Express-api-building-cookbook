let mongoose = require("mongoose");
const { DB_URL, DB_NAME } = require("./db.config");
let conxUrl = DB_URL +"/"+DB_NAME;
mongoose.connect(conxUrl,(err)=>{
    if(err){
        console.log("Mongo_ERR",err);
    }else{
        console.log("Db connected succesfully");
    }
})

// module.exports = mongoose;