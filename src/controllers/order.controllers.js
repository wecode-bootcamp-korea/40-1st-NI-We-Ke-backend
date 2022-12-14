const orderService = require('../services/order.service');

const createOrder = async (req,res) => {
    try{
        
        const {  price, quantity } = req.body;
        const userId = req.user.id

        if( !price || !quantity ) {
            throw new Error("Key Error")
        }
        
        const result = await orderService.createOrder( userId, price, quantity);

        return res.status(201).json({result})
    }catch (err) {
        console.log(err)
        res.status(err.statusCode || 400).json({mesaage : err.mesaage});
    }

    
};

module.exports = {createOrder};

