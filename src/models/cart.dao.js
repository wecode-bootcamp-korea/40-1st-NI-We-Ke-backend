const { appDataSource } = require("./data-source");

const addCart = async (req, res) => {

  const {userId, productoptionId} = req.body; 

  await appDataSource.query(
    `INSERT INTO carts(
      user_id, 
      product_option_id, 
      quantity
    ) VALUES (?,?,?)
    `,
    [userId, productoptionId]
  );
}



module.exports = { addCart }