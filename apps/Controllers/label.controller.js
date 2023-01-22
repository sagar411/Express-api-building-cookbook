const LabelService = require("../services/label.service");
const lbl_srvc = new LabelService();
class LabelController{
    store =async(req,res,next)=>{
        //banner, brands
        let data = req.body;
        let validation = lbl_srvc.validateLable(req.body,req.file);
        
        if(validation){
            next({
                status_code:400,
                msg:validation
            })
        }else{
            try{
            data.image =req.file.filename;

            let success =await  lbl_srvc.labelCreate(data);
            res.json({
                result:data,
                status:true,
                msg:"Label create successfully"
            })                
        }catch(error){
                next({
                    status_code:400,
                    msg:error
                })
            }
        }



        res.json({
            result :validation,
            status:true,
            msg:"store add"
        })

    }
}
module.exports = LabelController;