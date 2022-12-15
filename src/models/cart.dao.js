const { appDataSource } = require("./data-source");

const createCart = async (productOptionId, quantity, userId) => {
  return appDataSource.query(
    `
    INSERT INTO carts(
      user_id, 
      product_option_id, 
      quantity
    ) VALUES (
     ?,?,?
    )`,
    [userId, productOptionId, quantity]
  );
};

const getCartByProductOptionId = async (userId, productOptionId) => {
  return appDataSource.query(
    `
    SELECT
      c.id
    FROM carts c
    WHERE c.user_id = ?
    AND   c.product_option_id = ?
  `,
    [userId, productOptionId]
  );
};

const getCartsByUserId = async (userId) => {
  return appDataSource.query(
    `SELECT DISTINCT
        c.id cartId,
        c.quantity,
        po.id as productOptionId,
        po.price,
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
    FROM carts c 
    JOIN product_options po ON po.id = c.product_option_id
    JOIN products p ON p.id = po.product_id
    JOIN sizes s ON s.id = po.size_id
    JOIN colors col ON col.id = po.color_id
    JOIN product_option_images poi ON poi.product_option_id = po.id
    JOIN categories ca ON ca.id = p.category_id
    WHERE c.user_id = ?; 
    `,
    [userId]
  );
};

const updateCart = async (productOptionId, quantity, userId) => {
  return appDataSource.query(
    `
    UPDATE carts c
    SET c.quantity = c.quantity + ?
    WHERE c.product_option_id = ?
    AND c.user_id = ?
  `,
    [quantity, productOptionId, userId]
  );
};

const deleteCartsById = async (userId, cartId) => {
  return await appDataSource.query(
    `DELETE 
    FROM carts c
    WHERE c.user_id =? AND c.id = ? 
    `,
    [userId, cartId]
  );
};

module.exports = {
  createCart,
  getCartsByUserId,
  getCartByProductOptionId,
  updateCart,
  deleteCartsById,
};
