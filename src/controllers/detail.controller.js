const searchDetailService = require('../services/detail.service');

const getDetailByProductId = async(req,res) => {
    try{

        const productId = req.params.product_ID;

        if(!productId) {
            throw new Error("No Product Error")
        }
        const result = await searchDetailService.getDetailByProductId(productId)

        return res.status(200).json({message : result})
    }catch (err){
    
    res.status(err.statusCode ||400).json({message: err.message});
    }
}

module.exports = {getDetailByProductId};