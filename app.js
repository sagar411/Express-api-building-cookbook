const express = require("express");
const app = express();


const routers = require("./routes/index")
//http://localhost:3005 => get


app.use("/",routers);

app.listen(3006,"localhost",(err)=>{
    if(err){
        console.log("Error listining to port 3006");
    }else{
        console.log("server is running to port 3006");
        console.log("press CTRL+C to close server ")
    }
});
