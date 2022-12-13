const { appDataSource } = require("./data-source");

const createCart = async (productoptionId, quantity, userId) => {
  await appDataSource.query(
    `
    INSERT INTO carts(
      user_id, 
      product_option_id, 
      quantity
    ) VALUES (
     ?,
     ?,
     ?
    )`,
    [productoptionId, quantity, userId]
  );
};

module.exports = { createCart };
