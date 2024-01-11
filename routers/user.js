const express = require('express')
const userRouter = express.Router()
const User = require('../schemas/user')
const jwt = require('jsonwebtoken')

const secretKey = 'my-secret-key';

const options = {
  expiresIn: '72h' // 过期时间
};

userRouter.post('/register', (req, res) => {
  const { username, password } = req.body
  new User({
    username,
    password
  }).save().then(() => {
    res.json({
      code: 200,
      success: true,
      message: '注册成功'
    })
  }).catch(err => {
    console.log(err, 'err')
    res.json({
      code: 500,
      success: false,
      message: '服务器内部错误'
    })
  })
})

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body
  User.findOne({ username }).then((user, error) => {
    if (error) {
      res.json({
        code: 500,
        success: false,
        message: '服务器内部错误'
      })
    } else {
      if (!user) {
        res.json({
          code: 404,
          success: false,
          message: '用户不存在'
        })
        return
      }
      if (user.password !== password) {
        res.json({
          code: 401,
          success: false,
          message: '密码错误'
        })
        return
      }
      const payload = {
        username,
        password
      };
      const token = jwt.sign(payload, secretKey, options);
      res.json({
        code: 200,
        success: true,
        data: {
          token,
        },
        message: '登录成功'
      })
    }
  })
})

userRouter.get('/info', (req, res) => {
  res.send({
    code: 200,
    success: true,
    message: '获取用户信息成功',
    data: null
  })
})

userRouter.post('/info', (req, res) => {

})


module.exports = userRouter
exports = secretKey

