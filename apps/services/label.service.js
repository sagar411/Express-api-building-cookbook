const LabelModel = require("../models/label..model");

class LabelService {
    validateLable =(data,file)=>{
        console.log("inside validataion");
        let err = {
            title:"",
            image:"",
            type:""
        }

        if(!data?.title){
            err.title = "title is required"
        }else{
            delete err.title;
        }

        if(!data?.type){
            err.type = "type is required"
        }else{
            delete err.type;
        }

        if(!file){
            err.image = "image is required"
        }else{
            delete err.image;
        }

        // return err ?? null;
        return (Object.keys(err).length ===0)?null :err;
    }
    labelCreate = (data)=>{
        let label = new LabelModel(data);
        return label.save();

    }
}
module.exports = LabelService;