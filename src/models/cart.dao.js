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

//나는 데이터베이스로서 모든 유저들의 정보를 갖고있어야하는 것 아닐까?
//한명이 로그인하고
//음 userId 는 이미 갖고 접근하는 것이고 나의 장바구니 목록을 보는 것이니까
//
const getCartByUserIdProductOptionId = async () => {
  await appDataSource.query(
    // carts 테이블하고 product_options 테이블하고 product_options_image
    // 그리고 products 테이블..?
    `SELECT 
         cart.id
         cart.product_option_id
         cart.quantity
         product_option_images.image_url
         products.name
         categories.name
         product_options.color
         product_options.size 
         
    `,
    [userId]
  );
};

module.exports = {
  createCart,
  getCartByUserIdProductOptionId,
};
