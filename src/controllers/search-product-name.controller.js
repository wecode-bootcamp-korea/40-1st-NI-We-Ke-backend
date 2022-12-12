const searchProductService = require("../services/search-product-name.service");

const searchProducT = async(req,res)=> {
    try{
        const name = req.params.Product_name;

        if(!name){
            throw new Error("No Name Error")
        }
        const result = await searchProductService.searchProducT(name);

        return res.status(201).json({message : result})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message});
    }
};


module.exports={searchProducT};