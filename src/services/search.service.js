const searchDao = require('../models/search.dao');

const searcH = async(name) => {
    const user = await searchDao.searchProduct(name);

    if(!user) {
        const err = new Error('Error');
        err.statusCode = 400;
        throw err;
    }
    return user
};

module.exports = {searcH}