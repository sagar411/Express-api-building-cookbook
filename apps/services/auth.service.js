const UserController = require("../Controllers/user.controller");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/constants");

class AuthService{
    // (payload, secretkey)
    generateJWTToken = (payload )=>{
        let token = jwt.sign(payload,JWT_SECRET);
        return token;
    }

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
                    let response ={
                        user:user,
                        token: this.generateJWTToken({
                            id:user._id,
                            name:user.name,
                            emai:user.email,
                            role:user.role
                        })
                    }
                
                    
                    return response;
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