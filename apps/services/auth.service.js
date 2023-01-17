const UserController = require("../Controllers/user.controller");
const UserModel = require("../models/user.model");
const {dbService} = require("../services/mongodb.service");
class AuthService{
    loginService= async(username,password)=>{
        try{
            let user = await UserModel.findOne({
                email:username
            })

            if(!user){
                throw{status:400, msg:"user does not already exist"}
            }else{
                if(user.password===password){
                    return user;
                }else{
                    throw{ status:400,msg:"Credential doesnot match"}
                }

            }
        


        }catch(error){
            throw{status:400,msg:error}
        }
        

            
                
            
            
        
        // return new  Promise((res,rej)=>{
        //     dbService()
        //     .then((db)=>{
        //         db.collection("users").findOne({
        //             email: username,
        //             password:password
        //         })
        //         .then((user)=>{
        //             res(user);

        //         })
        //         .catch((err)=>{
        //             rej(err);
        //         })
                

                
        //     })
        //     .catch((err)=>{
        //         rej(err)
        //     })
        // })

    }
}
module.exports = AuthService;