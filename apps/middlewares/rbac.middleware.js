const isAdmin = (req,res,next)=>{

    if(req.auth_user.role==="admin"){
        
        next();
    }else(
        next({
            status_code:403,
            msg:"access denied"
        })
    )
}

const isAdminSeller = (req,res,next)=>{
    console.log(req.auth_user.role);
    if(req.auth_user.role==="admin"|| req.auth_user.role==="seller"){
        next();
    }else(
        next({
            status_code:403,
            msg:"access denied"
        })
    )

}

module.exports = {isAdmin, isAdminSeller};