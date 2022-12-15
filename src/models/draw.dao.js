const { appDataSource } = require("./data-source");

const getDrawByProductDrawColumn = async (draw) => {
  return await appDataSource.query(
    `
    SELECT
        p.id,
        p.name productName, 
        c.name,
        (
          SELECT
           image_url
          FROM product_option_images
          WHERE product_option_id = po.id
          LIMIT 1
       ) image_url
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.draw = ${draw}
    `
  );
};

module.exports = { getDrawByProductDrawColumn };
