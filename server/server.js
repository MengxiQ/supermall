const express = require('express')
const app = express()
const path = require('path')



//跨域问题
var cors = require('cors')
app.use(cors())

app.use(express.static(path.resolve(__dirname,'./static')))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const homeJson = require('./static/json/home.json')

app.get('/home', (req, res) => {
  res.send(homeJson)
})
const GoodListJson = require('./static/json/goodList.json')
app.get('/home/more', (req, res) => {
  console.log("下拉加载更多：", req.query);
  res.send(GoodListJson[req.query.type])
})

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var categoryRouter = require('./router/categoryRouter')
app.use('/category',categoryRouter)

var detailRouter = require('./router/detailRouter')
app.use('/goods',detailRouter)

const port = 3000
app.listen(port, () => {
  console.log(`The server listening at http://localhost:${port}`)
})