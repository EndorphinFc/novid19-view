import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
const app: Express = express()

const router: Router = express.Router()
// cors允许跨域
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')//任何情况
  next()
})

app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
  const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
  // 返给前端
  res.json({
    ...result.data.data
  })
})

app.listen(3333, () => {
  console.log('success server http://localhost:3333')
})



