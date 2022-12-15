const { appDataSource } = require("./data-source");

const getDrawByProductDrawColumn = async (draw) => {
  return await appDataSource.query(
    `
    SELECT
        p.id,
        p.name, 
        c.name 
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.draw = ${draw}
    `
  );
};

module.exports = { getDrawByProductDrawColumn };
