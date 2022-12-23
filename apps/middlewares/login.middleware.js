const letLoginCheck = (req,res,next)=>{
    let is_logged_in = true;
    if(is_logged_in){
        next();
    }else{
        next({
            status_code:401,
            msg:"Unatenticated"
        })
        // res.status(401).json({
        //     result:null,
        //     msg:"unatunticated",
        //     status:false
        // })
    }
}
module.exports = letLoginCheck;