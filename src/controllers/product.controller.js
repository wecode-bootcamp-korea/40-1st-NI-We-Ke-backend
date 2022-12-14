const productService = require("../services/product.service");

const searchProductByName = async(req,res)=> {
    try{
        const { productName } = req.query

        

        if(!productName){
            throw new Error("No Name Error")
        }

        const result = await productService.searchProductByName(productName);

        return res.status(200).json({message : result})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message});
    }
};


module.exports= { searchProductByName };