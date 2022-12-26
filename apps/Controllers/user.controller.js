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
            
        }
        
        if(Object.keys(error_msg).length>0){
            next({
                status_Code:400,
                msg:error_msg
            })
        }else {

        console.log("here we are");
        res.json({
            result:{
                param:req.params,
                query:req.query,
                body:req.body,
                file:req.files
            },
            status:true,
            msg:"user register"
        });
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
}


module.exports = UserController;