const OrderService = require("../services/order.service");

const order_svc = new OrderService();
class OrderController{
    createOrder=(req,res,next)=>{
        let data = req.body;
        let validation = order_svc.orderValidation(data);
        
        if(Object.keys(validation).length >0){
            next({
                status_code: 400,
                msg:"order problem"
            })
        }else{
            req.json({
                result: validation,
                status: true,
                msg: "Order Created"
            })
        }
    }
    

}
module.exports = OrderController;