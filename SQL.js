const ADD_USER = `INSERT INTO user(id, username, password) VALUES (null, ?, ?)
MODIFY COLUMN id INT AUTO_INCREMENT;`;
const GET_USER_BY_USERNAME = `SELECT * FROM user WHERE username = ? AND password = ?`;

module.exports = {
  ADD_USER,
  GET_USER_BY_USERNAME
}
