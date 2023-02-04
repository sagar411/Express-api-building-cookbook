
const express = require("express");
const app = express();
const events =require("./apps/events/event");
const cors = require("cors");

app.use(cors());

const routers = require("./routes/index");
require("./config/mongoose.config")
//http://localhost:3005 => get

//data-parsing--->builtin middleware
//for raw-jason formate
app.use("/assets", express.static(process.cwd()+"/uploads"));
app.use(events)
app.use(
    express.json()
);


//for x-www-form-unlencoded

app.use(express.urlencoded({
    extended:true
}
))
 
app.use("/",routers);

app.use((req,res,next)=>{
    next({
        status_code:404,
        msg:" not found resources"
    })
});




// error handling middleware
app.use((error,req,res,next)=>{
    let status = error.status_Code ||500;
    let msg = error.msg || JSON.stringify(error);
    console.log(error)
    res.status(status).json({
        result:null,
        msg:msg ,
        status:false
    })
})

app.listen(3006,"localhost",(err)=>{
    if(err){
        console.log("Error listining to port 3006");
    }else{
        console.log("server is running to port 3006");
        console.log("press CTRL+C to close server ")
    }
});
