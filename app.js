
const express = require("express");
const app = express();


const routers = require("./routes/index")
//http://localhost:3005 => get


app.use("/",routers);

// error handling middleware
app.use((error,req,res,next)=>{
    let status = error.status_Code ||500;
    let msg = error.msg || JSON.stringfy(error);

    res.status(status).json({
        result:null,
        msg:error.msg +"from error handling middleware",
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
