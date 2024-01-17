const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.js');
const router = express.Router();
const mogoose = require('mongoose');
const cors = require('cors');
const authenticateToken = require('./middlewares/token');
const RoutesRouter = require('./routers/routes.js');
const fileRouter = require('./routers/file.js')

const connection = require('./mysql.js')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authenticateToken)

app.use(router.use('/users', userRouter))
app.use(router.use('/routes', RoutesRouter))
app.use(router.use('/files', fileRouter))

// mogoose.connect('mongodb://127.0.0.1:27017/admin_server')

// const db = mogoose.connection;

// db.on('conected', () => {
//   console.log('Connected to MongoDB', {
//     serverSelectionTimeoutMS: 3000
//   });
// })

// db.on('error', (err) => {
//   console.log('Error connecting to MongoDB', err);
// })

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL', err);
  } else {
    console.log('Connected to MySQL');
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})