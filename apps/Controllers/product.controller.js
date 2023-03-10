const { default: slugify } = require("slugify");
const ProductModel = require("../models/product.model");
const ProductService = require("../services/product.service");
const product_svc = new ProductService();

async function uniqueSlug(slug){
  let new_slug = slug;
  let product = await ProductModel.findOne({
    slug:slug
  });

  if(product){
 new_slug= Date.now()+ "-"+ product.slug;
    return new_slug;
}else{
  return new_slug;
}
}
class ProductController {
    // uniqueSlug= async(slug)=>{
    //     try{
    //    let result= await  ProductModel.findOne({
    //         slug:slug
    //     })

    //     if(result){
    //       console.log("result: slug",result.slug);    
    //       console.log("get slog", slug);      
    //          slug = Date.now()+"-"+slug;

    //         console.log(slug)
            
    //          throw slug;

    //     }else{
    //         return slug;
            
    //     }  
    // }catch(new_slug){
    //   console.log("new slug", new_slug)
      
    //  this.uniqueSlug(new_slug);
    // }
        
    // }

  addProduct = async(req, res, next) => {
    try {
      let data = req.body;

      let validation = product_svc.validateProductData(data);

      if(validation){
        throw validation;
      }else{
        
        
        let slug = slugify(data.title,{
            lower:true,
            replacement:"-"
        })

        let new_slug = await uniqueSlug(slug);
        data.slug = new_slug;

        data.after_discount = data.price -data.discount *data.discount /100;
        
        if(!data.brand|| data.brand ==="null"){
            data.brand = null;
        }

        if(!data.seller){
          data.seller =null;
        }

        if(req.files){
            let images =[];
            req.files.map((image)=>{
                images.push(image.filename);
            })
            data.images=  images;
        }

    let result = product_svc.addProduct(data);
        if(result){
          res.json({
            result:data,
            status:true,
            msg:"Product created Succesfully"
          })
        }else{
          next({
            status_code: 400,
            msg: "problem while creating problem",error,
          });
        }


      }
      
    } catch (error) {
      console.log("error from product add : ", error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };

  getAllProduct =async(req,res,next)=>{
    try{

      let result = await product_svc.getProduct();
      res.json({
        result:result,
        status:true,
        msg:"product feached"
      })
    }catch(error){
      console.log("product list error",error);
      next({
        status_code:400,
        msg:error
      })
    }

  }

  updateProduct=async(req,res,next)=>{
    try {
      let data = req.body;
      console.log(req.params.id)

      let validation = product_svc.validateProductData(data);

      if(validation){
        throw validation;
      }else{
        

        data.after_discount = data.price -data.discount *data.discount /100;
        
        if(!data.brand|| data.brand ==="null"){
            data.brand = null;
        }

        if(!data.seller){
          data.seller =null;
        }
// we need to change file accordint to front end
        if(req.files){
            let images =[];
            req.files.map((image)=>{
                images.push(image.filename);
            })
            data.images=  images;
        }

    let response = product_svc.updateProduct(data,req.params.id);
        if(response){
          // console.log(response)
          
          res.json({
            result:data,
            status:true,
            msg:"Product Updatted Succesfully"
          })
        }else{
          console.log("problem with updating product")
          next({
            
            status_code: 400,
            msg: "problem while Updateing problem",error,
          });
        }


      }
      
    } catch (error) {
      console.log("error from product add : ", error);
      next({
        status_code: 400,
        msg: error,
      });
    }

  }
}

module.exports = ProductController;
