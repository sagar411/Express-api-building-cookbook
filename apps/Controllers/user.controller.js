class UserController{
    userRegister =(req,res,next)=>{
        let data= req.body;
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