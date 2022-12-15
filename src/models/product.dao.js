const {appDataSource} = require("./data-source");

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
        

const getProductsByCategoryId = async(categoryId) => {
    
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
    WHERE p.category_id = ?;
    ` , [categoryId]); 
};


const getProductByIconId = async(iconId) => {
    return await appDataSource.query(
        `
        SELECT
            p.name,
            c.color,
            po.price,
            poi.image_url,
            i.name
        FROM  products p
        JOIN product_options po ON p.id = po.product_id
        JOIN colors c ON po.color_id = c.id
        JOIN product_option_images poi ON po.id = poi.product_option_id
        JOIN icons i ON p.icon_id = i.id
        WHERE p.icon_id = ?;
        ` , [iconId]
    );
}

const getAllProduct = async(allProduct) => {
    const words = {
        toSqlString: function() {
            return allProduct
        }
    }
    return await appDataSource.query(
        `
        SELECT 
        p.id,
        p.name,
        po.price,
        poi.image_url
        FROM products p
        JOIN product_options po ON p.id = po.product_id
        JOIN product_option_images poi ON po.id = poi.product_option_id
        WHERE p.name
        LIKE  '%?%';
        ` , [words]
    );
}

module.exports = {getProductsByCategoryId, getProductByName , getProductByIconId , getAllProduct};
