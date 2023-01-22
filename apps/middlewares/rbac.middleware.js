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

module.exports = isAdmin;