const CategoryModel = require("../models/category.model");
class CategoryService {
    validateCategoryData = (data)=>{
        // title ,status,barand

        

        let error = {};

        if(!data.title){
            error["title"] = "title is required"
        }else{
            delete error["title"]
        }

        if(!data.status){
            error["status"] = "status is required"
        }else{
            delete error["status"]
        }
        

        if(Object.keys(error).length <=0){
            return null;
        }else{
            return error;
        }

    }

    addCategory =(data)=>{

        let cat_obj = new CategoryModel(data);
        return cat_obj.save();

    }

    getAllCat =()=>{
        return CategoryModel.find()
        .populate("parent")
        .populate("brand")
    }

    getAllCatDetail=(id)=>{
        return CategoryModel.findById(id)
        .populate("parent")
        .populate("brand")
    }

    deleteCat =(id)=>{
        return CategoryModel.findByIdAndDelete(id)

    }

    updateCategory =(data,id)=>{
           return CategoryModel.findByIdAndUpdate(id,{
                $set:data
            })
    }


}
module.exports = CategoryService;