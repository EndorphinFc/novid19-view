# 项目搭建（笔记，重点）

## 后端构建
### expres创建服务器要干什么
1. node环境下要添加东西书写ts  npm install ts-node -g
2. npm init -y
3. npm install @types/node -D
4. npm install @types/express -D
5. npm install axios -s

### express理论理解
路由和中间件
路由(映射关系)：const routes = express.Router();app.use('/api',routes) ;routes.post('/login',async(res,req)=>{})
中间件（处理函数）：use app.use((req,res,next)=>{}))

## 第二章 前端构建
### vue操作