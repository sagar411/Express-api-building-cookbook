
const e = require("express");
const UserService = require("../services/user.service");
const AuthService =  require("../services/auth.service");
class UserController{
    user_service;
    auth_service;
    constructor(){
        this.user_service = new UserService();
        this.auth_service = new  AuthService();

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
            
            this.user_service.userRegister(data)
            .then((response)=>{

                res.json({
                    result:response,
                    status:true,
                    msg:"User Register"
                })
            })
            .catch((err)=>{
                next({status_Code:500,msg:err})
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
        
        //login
        let data = req.body;
        console.log(data)
        if(!data.username|| !data.password){
            next({
                status_Code:400,
                msg:"credential required"
            })
        }else{
            this.auth_service.loginService(data.username,data.password)
            .then((user)=>{
                res.json({
                    result:user,
                    status:true,
                    msg:"User Logged In"
                })
            })
            .catch((err)=>{
                next({
                    status_Code:500,
                    msg:msg
                })
            })

        }
    }
}


module.exports = UserController;