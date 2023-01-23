const LabelService = require("../services/label.service");
const lbl_srvc = new LabelService();

class LabelController {
    store = async (req, res, next) => {

        //banner, brands
        
        let data = req.body;
        let file = req.file;
        let validation = lbl_srvc.validateLable(data,file);

        // let validation = lbl_srvc.validateLable(req.body, req.file);
        

        if (validation) {
            next({
                status_code: 400,
                msg: validation,
            });
        } else {
            try {
                data.image = req.file.filename;

                let success = await lbl_srvc.labelCreate(data);
                res.json({
                    result: data,
                    status: true,
                    msg: "Label create successfully",
                });
            } catch (error) {
                next({
                    status_code: 400,
                    msg: error,
                });
            }
        }

        // res.json({
        //     result: validation,
        //     status: true,
        //     msg: "store add",
        // });
    };

    getAllLabels = async (req, res, next) => {
        try {
            let data = await lbl_srvc.getLables();
            res.json({
                result: data,
                status: true,
                msg: "label feached successfully",
            });
        } catch (error) {
            next({
                status_code: 400,
                msg: error,
            });
        }
    };

    update = async (req, res, next) => {

        let data = req.body;
        let file = req.file;
        

        let validation = lbl_srvc.validateLable(data, file);

        if (validation.image) {
            delete validation.image;
        }

        if (Object.keys(validation).length > 0) {
            next({
                status_code: 400,
                msg: validation,
            });
        } else {
            try {
                console.log(req.file)
                if (req.file) {
                    data.image = req.file.filename;
                }

                let success = await lbl_srvc.labelUpdated(data, req.params.id);
                res.json({
                    result: data,
                    status: true,
                    msg: "label updated successfully",
                });
            } catch (error) {
                console.log("error from  label update", error);
                next({
                    status_code: 400,
                    msg: error,
                });
            }
        }
    };

    deleteLabelbyId=async (req,res,next)=>{
        try{
            let data = await lbl_srvc.deleteById(req.params.id);
            res.json({
                result:null,
                status:true,
                msg:"Label Deleted Successfully"

            })

        }catch(error){
            next({
                status_code: 400,
                msg:error
            })
        }
    }
}

module.exports = LabelController;
