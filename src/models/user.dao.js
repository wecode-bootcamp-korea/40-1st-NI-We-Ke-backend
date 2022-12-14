const { appDataSource } = require("./data-source");

const createUser = async (email, password) => {
  await appDataSource.query(
    `
    INSERT INTO users (
      email,
      password
    ) VALUES (
      ?,
      ?
    ) 
    `,
    [email, password]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
      SELECT 
        u.id,
        u.password
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

const getUserById = async (userId) => {
  const [user] = await appDataSource.query(
    //객체로 들어오는 user의 정보를 풀어준다는 javascript 문법임.
    `
      SELECT 
        u.id
      FROM users u
      WHERE u.id = ?
    `,
    [userId]
  );

  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
