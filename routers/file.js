const express = require('express');
const fileRouter = express.Router();
const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

fileRouter.post('/upload', upload.array(['file', 'chunkIndex']), (req, res) => {
  // 处理上传的文件
  console.log(req.files)
  res.send('文件上传成功')
})


module.exports = fileRouter;