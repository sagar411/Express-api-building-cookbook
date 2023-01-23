const CategoryService =require("../services/category.service");
const slugify = require("slugify")
class CategoryController {
    constructor(){
        this.cat_svc = new CategoryService();
    }

    createCategory = async(req,res,next)=>{
        
        try{
            let data =req.body;
            // console.log("data is",data);
            let error = this.cat_svc.validateCategoryData(req.body);
            
            if(error){
                
                next({
                    status_code:400,
                    msg:error
                })
            }else{
                if(req.file){
                    data.image = req.file.filename;
                }

                if(!data.parent || data.parent == "null"){
                    data.parent = null;
                }

                data.slug = slugify(data.title,{
                    lower:true,
                    replacement:"-"
                })
                console.log("slug is", data.slug)

                
               
                
                let result = await this.cat_svc.addCategory(data);


                if(result){
                    res.json({
                        result:result,
                        status:true,
                        msg:"Category Successfully added"
                    })
                }else{
                    next({
                        statu_code:400,
                        msg:"sorry there was problem"
                    })
                }

                
            }

        }catch(error){
            console.log("category error")
            next({
                status_code:400,
                msg:error
            })
        }
    }

    getAllCategory= async(req,res,next)=>{
        
        try{

            let result =  await this.cat_svc.getAllCat();

            res.json({
                result:result,
                status: true,
                msg:"Category listed successfully"
            })
        }catch(error){
            console.log("get all category")
            next({
                status_code: 400,
                msg:error
            })
        }
    }

    getCategoryDetail =async (req,res,next)=>{
        try{
            let result =  await this.cat_svc.getAllCatDetail(req.params.id);

            res.json({
                result:result,
                status: true,
                msg:"Category listed successfully"
            })
            
        }catch(error){
            console.log("get category detail")
            next({
                status_code: 400,
                msg:error
            })
        }
    }

    updateCategory = async(req,res,next)=>{

        try{
            let data =req.body;
            // console.log("data is",data);

            console.log(req.body)
            let error = this.cat_svc.validateCategoryData(req.body);
            
            if(error){
                
                next({
                    status_code:400,
                    msg:error
                })
            }else{
                if(req.file){
                    data.image = req.file.filename;
                }

                if(!data.parent || data.parent == "null"){
                    data.parent = null;
                }
                console.log("slug is", data.slug)

                
               
                
                let result = await this.cat_svc.updateCategory(data,  req.params.id);


                if(result){
                    res.json({
                        result:result,
                        status:true,
                        msg:"Category Updated success"
                    })
                }else{
                    next({
                        statu_code:400,
                        msg:"sorry there was problem in update cate"
                    })
                }

                
            }

        }catch(error){
            console.log("category error")
            next({
                status_code:400,
                msg:error
            })
        }
        
        
    }

    deleteCategory = async(req,res,next)=>{
        try{
            let result =  await this.cat_svc.deleteCat(req.params.id);

            res.json({
                result:null,
                status: true,
                msg:"Category delete successfully"
            })
            
        }catch(error){
            console.log("delete category d")
            next({
                status_code: 400,
                msg:error
            })
        }
    }
}
module.exports = CategoryController;