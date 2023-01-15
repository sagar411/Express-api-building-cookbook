
const e = require("express");
const {MongoClient} = require("mongodb");

const dbUrl = "mongodb://localhost:27017";
const dbName = "MERN-STACK-LEARNING";


const UserService = require("../services/user.service");
class UserController{
    user_service;
    constructor(){
        this.user_service = new UserService();

    }

    userRegister =(req,res,next)=>{
        // user validation

        //400 =>bad request,
        //422 => unprocessable entity

        
      let data = req.body; 
        let error_msg = this.user_service.validateRegister(data);
        let file = req.file;

        if(req.file){
            data['image']= req.file.filename;
            
        };
        if(Object.keys(error_msg).length>0){
            next({
                status_Code:400,
                msg:error_msg
            })
        }else {
          MongoClient.connect(dbUrl, (err,client)=>{
            if(err){
                next({status_Code:500, msg:err})
            }else{
                const db = client.db(dbName);
                db.collection("users").insertOne(data)
                .then((ack)=>{
                    console.log(ack);
                    res.json({
                        result:data
                            // param:req.params,
                            // query:req.query,
                            // body:req.body,
                            // file:req.files
                        ,
                        status:true,
                        msg:"user register"
                    });
                    
                })
                .catch((err)=>{
                    next({
                        status_Code:500,
                        msg:err
                    })
                })
            }
          })
            // MongoClient.connect(dbUrl,(err,client)=>{
            //     if(err){
            //         next({
            //             status_Code:500,
            //             msg:err
            //         });
            //     }else{
            //         const db = client.db(dbName);
            //         db.collection("users").insert(data,(err,ack)=>{
            //             console.log(err);
            //             console.log(ack);
            //         })
                    
            //     }
            // });

            // req.myEvents.emit("register",{data:data})
       
    }
    }

    listAllUser = (req,res,next)=>{
        res.json({
            result:"User List",
            status:true,
            msg:"User Listed"
        })
    }

    getUserId = (req,res,next)=>{
        res.json({
            result:null,
            status:true,
            msg:"USER WITH ID"
        })

    }

    updateUserById = (req,res,next)=>{
        res.json({
            result:null,
            status:true,
            msg:"user Updated "

        })

    }

    deleteUserById =(req,res,next)=>{
        res.json({
            result:null,
            status:true,
            msg:"user deleted "

        })

    }

    userLogin=(req,res,next)=>{
        console.log("hello userlogin")
        //login
        let data = req.body;
        console.log(data)
        if(!data.username|| !data.password){
            next({
                status_Code:400,
                msg:"credential required"
            })
        }else{
            MongoClient.connect(dbUrl)
            .then((client)=>{
                const db = client.db(dbName);
                db.collection("users").findOne({
                    email: data.username,
                    password:data.password
                })
                .then((user)=>{
                    console.log(user);
                    res.json({
                        result:user,
                        status:true,
                        msg:"user Feached"
                    })
                })
                .catch((err)=>{
                    next({
                        status_Code:400,
                        msg:err
                    })
                })
            })
            .catch((err)=>{
                next({
                    status_Code:500,
                    msg:err
                })
            })
        }
    }
}


module.exports = UserController;