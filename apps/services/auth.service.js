const UserController = require("../Controllers/user.controller");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

class AuthService{
    loginService= async(username,password)=>{
        try{
            let user = await UserModel.findOne({
                email:username
            })

            if(!user){
                throw{status:400, msg:"user does not already exist"}
            }else{

                if(bcrypt.compareSync(password, user.password)){
                    //token
                    return user;
                }else{
                    throw{ status:400,msg:"Credential doesnot match"}
                }

            }
        


        }catch(error){
            throw{status:400,msg:error.msg}
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