import express from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import db from 'db'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import bluebird from 'bluebird'
const Promise = bluebird
import App from 'views/components/app.jsx'
import Users from 'models/users.js'
import clientEnv from 'config/client'
import Coinbase from 'services/coinbase.js'
import Robinhood from 'services/robinhood.js'
import Redis from 'lib/redis.js'

app.use(cors())
app.set('view engine', 'pug')

app.use(cookieParser())
app.get('/', serveApp)
app.use(express.static('public'))

app.post('/api/login', (req, res) => {
  res.cookie('token', 'fjasldfjo3ujr039u4032u3o')
  res.json({
    err: null,
    ok: true
  })
})

app.get('/api/accounts/:id', validateToken, async (req, res) => {
  const accounts = await Promise.props({
    coinbase: Coinbase.getAccounts({}),
    robinhood: Robinhood.investments()
  });
  const coinbaseCurrencies = accounts.coinbase.map(account => account.currency)
  Redis.set('coinbase.currencies', JSON.stringify(coinbaseCurrencies))
  res.json(accounts)
})

app.get('/api/coinbase/currency/:currency/market', async (req, res) => {
  const localCurrency = 'USD'
  let coinbaseRequests = null
  if (req.params.currency === 'all') {
    let coinbaseCurrencies = await Redis.get('coinbase.currencies')
    coinbaseCurrencies = JSON.parse(coinbaseCurrencies)
    coinbaseRequests = coinbaseCurrencies.reduce((props, currency) => {
      props[currency] = new Promise((resolve) => {
        Coinbase.getSpotPrice({'currencyPair': `${currency}-${localCurrency}`}, (err, { data }) => {
          resolve(data)
        })
      })
      return props
    }, {})
  } else {
    coinbaseRequests = {}
    coinbaseRequests[req.params.currency] = Coinbase.getSpotPrice({'currencyPair': `${req.params.currency}-${localCurrency}`})
  }
  let prices = await Promise.props(coinbaseRequests)
  res.json(prices)
})

// app.post('/', async (req, res) => {
//   // let response = await Users.findById(1)
//   res.json('ok')
// })


app.get('/*', serveApp)

function serveApp (req, res) {
  console.log(req.url)
  // props.staticContext.data
  const initialData = {}
  const context = { data : {} }
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
        <App data={''}/>
    </StaticRouter>
    )
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel='stylesheet' type='text/css' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        <script>
          window.__INITIAL_DATA__ = JSON.parse('${JSON.stringify(initialData)}')
          window.env = JSON.parse('${JSON.stringify(clientEnv)}')
        </script>
      </head>
      <body>
        <div id='app'>${markup}</div>
        <script type='text/javascript' src='build.js'></script>
        </body>
        </html>
        `)
        // <script type='text/javascript' src='${process.env[`${process.env.NODE_ENV}_origin`]}/public/build.js'></script>
}

async function validateToken (req, res, next) {
  // will change to a Redis.get {
    let token = 'fjasldfjo3ujr039u4032u3o'
    let userId = null
    if (req.cookies.token === token) {
      userId = 1

    }
  // }

  if (userId === null) {
    res.json({
      err: true,
      message: 'Unauthorized'
    })
  }

  res.locals.user = await Users.findById(userId)
  next()
}

app.use((err, req, res, next) => {
  console.log(err.stack)
  if (req.xhr) {
    res.status(500).send({error: err.message})
  } else {
    next(err)
  }
})


app.listen(3000 , () => {
  console.log('server running on port 3000....')
})
