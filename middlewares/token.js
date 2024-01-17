const jwt = require('jsonwebtoken')
const whiteUrl = [
  '/users/login',
  '/users/register',
  '/files/upload',
]
const secretKey = 'my-secret-key'

const authenticateToken = (req, res, next) => {
  const { url } = req
  if (!whiteUrl.includes(url)) {
    // 验证token
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      res.send({
        code: 401,
        message: 'token 不正确或已过期',
      })
    } else {
      jwt.verify(authHeader, secretKey, (err, decoded) => {
        if (err) {
          res.send({
            code: 403,
            message: 'token 不正确或已过期',
            success: false
          })
        }
        req.user = decoded;
        next()
      })
    }
  } else {
    next()
  }

}

module.exports = authenticateToken