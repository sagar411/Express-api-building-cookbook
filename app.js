
const express = require("express");
const app = express();


const routers = require("./routes/index")
//http://localhost:3005 => get

//data-parsing--->builtin middleware
//for raw-jason formate
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
        msg:"Resource not found"
    })
})



// error handling middleware
app.use((error,req,res,next)=>{
    let status = error.status_Code ||500;
    let msg = error.msg || JSON.stringify(error);

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
