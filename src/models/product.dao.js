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

const getProductByName  = async(productName) => {
    const word = {
        toSqlString: function() {
            return productName
        }
    }
    
    return await appDataSource.query(
        `
        SELECT
            p.id,
            p.name,
            c.name categoryName,
            po.price,
            poi.image_url imageUrl
        FROM products p
        JOIN categories c ON c.id = p.category_id 
        JOIN product_options po ON po.product_id = p.id
        JOIN product_option_images poi ON poi.product_option_id = po.id
        WHERE p.name 
        LIKE '%?%';
        `, [word]);
};

const getDetailByProductId = async (productId) => {
    const [product] = await appDataSource.query(`
        SELECT
            p.id,
            p.name,
            c.name,
            po.price,
            sizes.size
        FROM products p
        JOIN categories c ON c.id=p.category_id
        JOIN product_options po ON p.id=po.product_id
        JOIN sizes ON sizes.id = po.size_id
        WHERE p.id = ?
    `, [ productId ]) 

    const images = await appDataSource.query(`
        SELECT
            poi.id imageId,
            poi.image_url imageUrl
        FROM product_option_images poi
        JOIN product_options po ON po.id = poi.product_option_id
        JOIN products p ON p.id = po.product_id
        WHERE p.id = ?
    `, [productId])

     const reviews = await appDataSource.query(`
      SELECT
        re.id,
            re.review,
            re.user_id,
            re.product_option_id
        FROM reviews re
        JOIN product_options po ON po.id = re.product_option_id
        JOIN products p ON p.id = po.product_id
        JOIN users u ON u.id = re.user_id
        WHERE p.id = ?
     ` , [productId])

    

    product.images = images
    product.reviews = reviews
    

    return product
}
    
module.exports = {getProductsByCategoryId, getProductByName, getDetailByProductId};