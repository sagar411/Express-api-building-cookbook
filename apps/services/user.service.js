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
}
module.exports = UserService;