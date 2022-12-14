const searchService = require('../services/product.service');

const getProductsByCategoryId  = async(req,res) => {
    try{
        const categoryId = req.params.categories_name;

        if(!categoryId) {
            throw new Error("Key Error")
        }
        const result = await searchService.getProductsByCategoryId (categoryId);

        return res.status(200).json({message : result})
    } catch (err) {
        
        res.status(err.statusCode || 400).json({message : err.message});
    }
    
};




module.exports = {getProductsByCategoryId };