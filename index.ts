import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
import data from './data'
import bodyParser from 'body-parser'
import students from './students'

const app: Express = express()
const router: Router = express.Router()

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(
  bodyParser.urlencoded({
    //配置这两行代码
    extended: true,
  })
)
app.use(bodyParser.json())

app.use('/api', router)

router.get('/list', (req: Request, res: Response) => {
  // const result = await axios.post(
  //   'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseasehSShelf'
  // )
  res.json({
    data: data.data,
    code: 200,
  })
})

router.post('/login', (req: Request, res: Response) => {
  const { name, password } = req.body
  if (name == 'admin' && password == '123456') {
    res.json({
      message: '登录成功！',
      token: '111111',
      code: 200,
    })
  } else {
    res.json({
      message: '用户名或密码不正确',
      code: 500,
    })
  }
})

router.get('/students', (req: Request, res: Response) => {
  res.json({
    data: students,
    code: 200,
  })
})

app.listen(3333, () => {
  console.log('http://localhost:3333')
})
