const events = require("events");
const express = require("express");

const app = express();



const myEvents = new events.EventEmitter();
app.use((req,res,next)=>{
    req.myEvents = myEvents;
    next();
})

myEvents.on("register", (data)=>{
    console.log(data)
    console.log("i am in hello")
});

myEvents.emit("hello",{data:"hello data"});

module.exports = app;