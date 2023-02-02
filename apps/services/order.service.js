class OrderService {
    orderValidation =(data)=>{
        let error ={};

        if(!data.order_id){
            error.order_id = "Order id required"
        }else{
            delete error.order_id;
        }

       if(!data.order_by){
        error.order_by =" Order by required"
       }else{
        delete error.order_by;
       }
       if(!data.product){
        error.product = "Product is required"
       }else{
        delete error.product
       }

       if(!data.qty ){
        error.qty =" Quantaty is required"
       }else{
        delete error.qty;
       }

       if(!data.sub_amount){
        error.sub_amount = " Sub_amount is requred"
       }else{
        delete error.sub_amount;
       }

       if(!data.discount){
        error.discount ="discount is required"
       }else{
        delete error.discount ;
       }

       if(!data.total_amount){
        error.total_amount = "total amount required"
       }else{
        delete error.total_amount;
       }

       return error;



    }

}
module.exports =OrderService;