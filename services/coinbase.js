let client = require('coinbase').Client
let coinbase = new client({
  'apiKey': process.env.COINBASE_API, 
  'apiSecret': process.env.COINBASE_SECRET
})
module.exports = coinbase