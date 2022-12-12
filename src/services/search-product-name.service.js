const SearhProductDao = require("../models/search-product-name.models");

const searchProducT = async(name) => {
    console.log('--------')
    console.log(name)
    console.log('--------')
    const user = await SearhProductDao.searchProducT(name);

    if(!user){
        const err = new Error('Error');
        err.statusCode = 400;
        throw err;
    }
    return user
};

module.exports = {searchProducT};