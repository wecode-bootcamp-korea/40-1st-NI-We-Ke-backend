const { appDataSource } = require("./data-source");

const createWishlist = async (productOptionId, userId) => {
  return appDataSource.query(
    `
    INSERT INTO wishlists(
      user_id,
      product_option_id
    ) VALUES (
      ?,?
    )`,
    [userId, productOptionId]
  );
};

const getWishlistByUserId = async (userId) => {
  return appDataSource.query(
    `SELECT DISTINCT
        w.id,
        po.id as productoptionId,
        col.color,
        s.size,
        p.name productName,
        ca.name categoryName,
        (
           SELECT
            image_url
           FROM product_option_images
           WHERE product_option_id = po.id
           LIMIT 1
        ) image_url
    FROM wishlists w 
    JOIN product_options po ON po.id = w.product_option_id
    JOIN products p ON p.id = po.product_id
    JOIN sizes s ON s.id = po.size_id
    JOIN colors col ON col.id = po.color_id
    JOIN product_option_images poi ON poi.product_option_id = po.id
    JOIN categories ca ON ca.id = p.category_id
    WHERE w.user_id = ?; 
    `,
    [userId]
  );
};

module.exports = {
  createWishlist,
  getWishlistByUserId,
};
