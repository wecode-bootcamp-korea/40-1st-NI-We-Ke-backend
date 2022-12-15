const { appDataSource } = require("./data-source");

const DrawStatus = Object.freeze({
  DRAW: 1,
  NONE_DRAW: 0,
});

const getProductsInDraw = async () => {
  return await appDataSource.query(
    `
    SELECT
        p.id,
        p.name productName, 
        c.name,
      (
          SELECT
          image_url
        FROM product_option_images poi
        WHERE product_option_id = poi.id
        LIMIT 1
      ) image_url
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.draw = ${DrawStatus.DRAW}
    `
  );
};

module.exports = { getProductsInDraw };
