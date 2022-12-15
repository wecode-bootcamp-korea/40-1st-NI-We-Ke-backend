const { appDataSource } = require("./data-source");

const getProductsByCategoryId = async (categoryId) => {
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
    `,
    [categoryId]
  );
};

const getProductByName = async (productName) => {
  const word = {
    toSqlString: function () {
      return productName;
    },
  };

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
        JSON_ARRAYAGG(poi.image_url) image_urls
        FROM products p
        JOIN product_options po ON p.id = po.product_id
        JOIN product_option_images poi ON po.id = poi.product_option_id
        WHERE p.name
        LIKE  '%?%'
        GROUP BY p.id, p.name, po.price
        ` , [words]
    );
}


const getDetailByProductId = async (productId) => {
  const [product] = await appDataSource.query(
    `
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
    `,
    [productId]
  );

  const images = await appDataSource.query(
    `
        SELECT
            poi.id imageId,
            poi.image_url imageUrl
        FROM product_option_images poi
        JOIN product_options po ON po.id = poi.product_option_id
        JOIN products p ON p.id = po.product_id
        WHERE p.id = ?
    `,
    [productId]
  );

  const reviews = await appDataSource.query(
    `
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
     `,
    [productId]
  );

  product.images = images;
  product.reviews = reviews;

  return product;
};



module.exports = {getProductsByCategoryId, getProductByName , getProductByIconId , getAllProduct , getDetailByProductId};