const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'vue_admin_server'
})

// connection.connect((err) => {
//   if (err) {
//     console.log('数据库连接失败', err);
//     return
//   }
//   console.log('数据库连接成功');
// })

module.exports = connection;

