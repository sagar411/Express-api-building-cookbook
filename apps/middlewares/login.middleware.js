const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/constants");
const UserService = require("../services/user.service");
let user_svc = new UserService();
const letLoginCheck = async(req,res,next)=>{
    let token = null;
    
    
    if(req.headers["authorization"]){
        token = req.headers.authorization;
    }else if(req.headers["x-xsrf-token"]){
        token = req.headers["x-xsrf-token"];
    }else if(req.query['token']){
        token = req.query["token"];
    }
    if(!token){
        next({
            status_code:401,
            msg:"unauthorized access"
        })
    }else{
        token = token.split(" ");
    token = token[token.length -1];


    if(!token){
        next({
            status_code:401,
            msg:"token not found"
        })
    }else{

        let data = jwt.verify(token, JWT_SECRET);

       
        if(!data || data ==null ){
            console.log("hello i am error")
            next({
                status_code:401,
                msg:"unknown data"
            })
        }else{
            try{
                let user = await user_svc.getUserById(data.id);
                if(user){
                    req.auth_user= user;
                    next();
                }else{
                    next:({
                        status_code:400,
                        msg:"Invalid token data"
                    })
                }
            }catch(error){
                next({
                    status_code:400,
                    msg:error
                })
            }
            
                       
        } 
    }

    }
    
    

    
    
    

    // let is_logged_in = true;
    // if(is_logged_in){
    //     next();
    // }else{
    //     next({
    //         status_code:401,
    //         msg:"Unatenticated"
    //     })
    //     // res.status(401).json({
    //     //     result:null,
    //     //     msg:"unatunticated",
    //     //     status:false
    //     // })
    // }
}
module.exports = letLoginCheck;