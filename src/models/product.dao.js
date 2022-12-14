const {appDataSource} = require('./data-source');

const getProductsByCategoryId = async(categoryId) => {
    return await appDataSource.query(
        `
    SELECT
	    p.id,
	    p.name,
	    c.name ,
	    po.price,
	    poi.image_url imageUrl
    FROM products p
    JOIN categories c ON c.id = p.category_id 
    JOIN product_options po ON po.product_id = p.id
    JOIN product_option_images poi ON poi.product_option_id = po.id
    WHERE p.category_id = ?
    `, [categoryId]);
};
    
module.exports = {getProductsByCategoryId};