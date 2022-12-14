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

//나는 데이터베이스로서 모든 유저들의 정보를 갖고있어야하는 것 아닐까?
//한명이 로그인하고
//음 userId 는 이미 갖고 접근하는 것이고 나의 장바구니 목록을 보는 것이니까
//
const getCartsByUserId = async (userId) => {
  return appDataSource.query(
    // carts 테이블하고 product_options 테이블하고 product_options_image
    // 그리고 products 테이블..?
    // 기준이 되는 테이블은 product_option_id
    // product_options 테이블을 기준으로
    // products 테이블과 categories 테이블을 JOIN
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

//userId가 접근해서
//carts.id를 선택해서 delete 하거나
// -> /carts/:id 를 받아야할 것 같은데
//carts.id를 전체 delete 할 수 있다.

//(완료)장바구니 모두 삭제
// const deleteCartsAll = async (userId) => {
//   return await appDataSource.query(
//     `DELETE
//     FROM carts c
//     WHERE c.user_id = ?
//     `,
//     [userId]
//   );
// };

//장바구니 선택 삭제
// 1)userId로 장바구니에 접근한다음
// 2)클라이언트가 전송한 cartId 마다 클릭하면 삭제를 하고 싶다.
const deleteCartsById = async (userId, cartId) => {
  return await appDataSource.query(
    `DELETE 
    FROM carts c
    WHERE c.user_id = ? AND c.id = ?;
    `,
    [userId, cartId]
  );
};

module.exports = {
  createCart,
  getCartsByUserId,
  deleteCartsById,
};
