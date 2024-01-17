const multer = require('multer')

const whitePath = [
  '/files/upload'
]

function fileMiddleware(req, res, next) {
  if (whitePath.includes(req.path)) {

  }
}