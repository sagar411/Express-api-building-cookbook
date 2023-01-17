const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserService{
    validateRegister =(data)=>{
        let error_msg ={};

        // let data= req.body;
        // console.log(data);

        if(!data.name){
            error_msg.name="name is required"
        }

        if(!data.email){
            error_msg.email="email is require"
        }

        if(!data.password){
            error_msg.password="password is required"
        }
        if(!data.role){
            error_msg.role="role is required"
        }
        return error_msg;
    
    }

    userRegister = async(data)=>{
       try{

            data['password']=bcrypt.hashSync(data["password"],10);

            let user = new UserModel(data);
            return user.save();
        // let response = insertData("users",data);
        // return response;
       }catch(err){
        throw err;
       }
    }
}
module.exports = UserService;