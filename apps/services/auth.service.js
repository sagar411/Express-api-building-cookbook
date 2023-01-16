const {dbService} = require("../services/mongodb.service");
class AuthService{
    loginService=(username,password)=>{
        return new  Promise((res,rej)=>{
            dbService()
            .then((db)=>{
                db.collection("users").findOne({
                    email: username,
                    password:password
                })
                .then((user)=>{
                    res(user);

                })
                .catch((err)=>{
                    rej(err);
                })
                

                
            })
            .catch((err)=>{
                rej(err)
            })
        })

    }
}
module.exports = AuthService;