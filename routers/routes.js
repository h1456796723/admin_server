const express = require('express')
const RoutesRouter = express.Router()
const Routes = require('../schemas/routers')

RoutesRouter.get('/', (req, res) => {
  Routes.find().then((data, error) => {
    if (error) {
      res.send({
        code: 500,
        success: false,
        message: '服务器内部错误'
      })
    } else {
      const resData = data.map(item => {
        return {
          id: item._id,
          name: item.name,
          path: item.path,
          componentPath: item.componentPath,
          title: item.title
        }
      })
      res.send({
        code: 200,
        message: '获取成功',
        data: resData
      })
    }
  })
})

RoutesRouter.post('/add', (req, res) => {
  const { name, path, component, title } = req.body
  if (!name || !path || !component || !title) {
    res.send({
      code: 500,
      success: false,
      message: '请填写完整信息'
    })
  } else {
    new Routes({ name, path, component, title }).save().then(() => {
      res.send({
        code: 200,
        success: true,
        message: '添加成功'
      })
    }).catch(() => {
      res.send({
        code: 500,
        success: false,
        message: '添加失败'
      })
    })
  }
})

RoutesRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  if (!id) {
    res.send({
      code: 500,
      success: false,
      message: '请选择要删除的项'
    })
  } else {
    Routes.deleteOne({ _id: id }).then(() => {
      res.send({
        code: 200,
        success: true,
        message: '删除成功'
      })
    }).catch((error) => {
      res.send({
        code: 500,
        success: false,
        message: error
      })
    })
  }
})

module.exports = RoutesRouter

