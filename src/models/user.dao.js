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
  await appDataSource.query(
    `
      SELECT 
        u.id
      FROM users u
      WHERE u.id = ?
    `,
    [userId]
  );
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
