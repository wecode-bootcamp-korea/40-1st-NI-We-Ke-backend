const { appDataSource } = require("./data-source");

const getDrawByProductDrawColumn = async () => {
  return await appDataSource.query(
    `
    SELECT
        p.id,
        p.name, 
        c.name 
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.draw = 1
    `
  );
};

module.exports = { getDrawByProductDrawColumn };

// draw 버튼을 누르면 나와야하는 아이들이잖아,
// product 테이블에서 draw 칼럼에 1 걸려있는 애들 모두다!
