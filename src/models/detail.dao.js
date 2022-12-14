const {appDataSource} = require('./data-source');

const getDetailByProductId = async (productId) => {
    // return await appDataSource.query(
    //     `
    //     SELECT 
    //         p.id,
    //         p.name,
    //         poi.image_url,
    //         poi.image_url2,
    //         poi.image_url3,
    //         poi.image_url4,
    //         poi.image_url5,
    //         poi.image_url6,
    //         c.name,
    //         po.price,
    //         sizes.size,
    //         re.id,
    //         re.reviews,
    //         re.user_id,
    //         re.product_id
    //         FROM products p
    //         JOIN categories c ON c.id=p.category_id
    //         JOIN product_options po ON p.id=po.product_id
    //         JOIN product_option_images poi ON po.id = poi.product_option_id
    //         JOIN sizes ON sizes.id = po.size_id
    //         JOIN reviews re ON re.product_id =p.id
    //         WHERE p.id = ? AND 
    //     `, [productId]
    // );
    return await appDataSource.query(
            `
            SELECT 
                p.id,
                p.name,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        "
                    )
                
                c.name,
                po.price,
                sizes.size
                FROM products p
                JOIN categories c ON c.id=p.category_id
                JOIN product_options po ON p.id=po.product_id
                JOIN product_option_images poi ON po.id = poi.product_option_id
                JOIN sizes ON sizes.id = po.size_id
                WHERE p.id = ?;
            `, [productId]
        );
}

module.exports = {getDetailByProductId};