const searchProductService = require("../services/search-product-name.service");

const searchProducT = async(req,res)=> {
    try{
        console.log(req)
        const ProductName = req.params.Product_name;
        console.log('--------')
    console.log(ProductName)
    console.log('--------')

        if(!ProductName){
            throw new Error("No Name Error")
        }
        const result = await searchProductService.searchProducT(ProductName);

        return res.status(200).json({message : result})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message});
    }
};


module.exports= { searchProducT };