const { appDataSource } = require("./data-source");

//밑에 user를 가져와야한다.
const addCart = async (req, res) => {
  const { userId, productoptionId, quantity } = req.body;

  await appDataSource.query(
    `
    INSERT INTO carts(
      user_id, 
      product_option_id, 
      quantity
    ) 
    VALUES 
    (
    ?,
    ?,
    ?
    )`,
    [userId, productoptionId, quantity]
  );
};

module.exports = { addCart };
