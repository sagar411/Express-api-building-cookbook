const ProductModel = require("../models/product.model");
class ProductService {
    validateProductData = (data)=>{
        // title ,status,barand

        

        let error = {};

        if(!data.title){
            error["title"] = "title is required"
        }else{
            delete error["title"]
        }


        if(!data.category){
            error["category"] = "category is required"
        }else{
            delete error["category"]
        }

        if(!data.price){
            error["price"] = "price is required"
        }else{
            delete error["price"]
        }

        
        if(Object.keys(error).length <=0){
            return null;
        }else{
            return error;
        }

    }

    addProduct =(data)=>{
        try{
        let product_obj = new ProductModel(data);
        return product_obj.save();
        }catch(error){
            console.log("add product svc",error);
            throw error
        }
    }

    getProduct=()=>{
        return ProductModel.find();
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
module.exports = ProductService;