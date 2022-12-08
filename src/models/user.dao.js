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
      SELECT u.id
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };