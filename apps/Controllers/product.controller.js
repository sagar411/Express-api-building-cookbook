class ProductController{

    addProduct = (req,res,next)=>{
        
        res.json({
            result:"add pRDOUDCT",
            status:true,
            msg:"user added"
        })
    }
}

module.exports = ProductController;