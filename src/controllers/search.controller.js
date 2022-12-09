const searchService = require('../services/search.service');

const searcH = async(req,res) => {
    try{
        const name = req.params.categories_name;

        if(!name) {
            throw new Error("Key Error")
        }
        const result = await searchService.searcH(name);

        return res.status(201).json({message : result})
    }catch (err) {
        res.status(err.statusCode || 400).json({message : err.message});
    }
};

module.exports = {searcH};