const { appDataSource } = require("./data-source");



const addCart = async (req, res) => {

  //user를 가져와야한다. user를! 

  const { productoptionId,quantity } = req.body; 

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