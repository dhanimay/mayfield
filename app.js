const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const db = require('db')
const middleware = require('middleware')
const sass = require('node-sass')

const Users = require('models/users.js')
const Coinbase = require('services/coinbase')

app.use(cors())
app.set('view engine', 'pug')

app.use('/sass/:file', (req, res) => {
  console.log('why???? ====>', req.params.file)
  sass.render({
    file: `sass/${req.params.file}`
  },
  (err, result) => {
    if(err) res.send(err)
    res.send(result.css)
  })
})

app.use('/public/:file', (req, res) => {
  res.sendFile(req.params.file, {
    root: __dirname + '/public'
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/', async (req, res) => {
  let response = await Users.findById(1)
  console.log(response)
  res.json('ok')
})

app.post('/login', (req, res) => {
  res.json({
    err: null,
    ok: true  
  })
})

app.get('/home', middleware.getAccounts, (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('listening on port 3000....')
})