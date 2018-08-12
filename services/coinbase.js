import { Client } from 'coinbase'
import { promisify } from 'util'

const client = new Client({
  'apiKey': process.env.COINBASE_API,
  'apiSecret': process.env.COINBASE_SECRET
})


client.getAccounts = promisify(client.getAccounts).bind(client)
export default client