const postOrderService = require('../services/order.service');

const postOrder = async (req,res) => {
    try{
        
        const { user_id, order_number, status_id,  price, quantity } = req.body;

        if( !order_number || !status_id || !price || !quantity ) {
            throw new Error("Key Error")
        }
        
        await postOrderService.postOrder(user_id, order_number ,status_id, price, quantity);

        return res.status(200).json({message:"Add Order Success!!"})
    }catch (err) {
        console.log(err)
        res.status(err.statusCode || 400).json({mesaage : err.mesaage});
    }

    
};

module.exports = {postOrder};

