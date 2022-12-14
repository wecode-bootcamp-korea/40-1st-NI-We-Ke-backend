const { appDataSource } = require("./data-source");

const createCart = async (productoptionId, quantity, userId) => {
  await appDataSource.query(
    `
    INSERT INTO carts(
      user_id, 
      product_option_id, 
      quantity
    ) VALUES (
     ?,?,?
    )`,
    [userId, productoptionId, quantity]
  );
};

const getCartsByUserId = async (userId) => {
  return appDataSource.query(
    `SELECT 
        c.id,
        c.quantity,
        po.price,
        col.color,
        s.size,
        p.name,
        ca.name
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

const deleteCartsById = async (userId, cartId) => {
  return await appDataSource.query(
    `DELETE 
    FROM carts c
    WHERE c.id = ${cartId};
    `,
    [userId, cartId]
  );
};

module.exports = {
  createCart,
  getCartsByUserId,
  deleteCartsById,
};
