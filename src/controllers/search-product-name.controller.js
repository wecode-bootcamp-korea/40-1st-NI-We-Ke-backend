const searchProductService = require("../services/search-product-name.service");

const searchProducT = async(req,res)=> {
    try{
        const { productName } = req.query

        console.log(productName)

        if(!productName){
            throw new Error("No Name Error")
        }

        const result = await searchProductService.searchProducT(productName);

        return res.status(200).json({message : result})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message});
    }
};


module.exports= { searchProducT };