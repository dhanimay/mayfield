import Redis from 'redis'
// import bluebird from 'bluebird'
// bluebird.promisifyAll(Redis)

import { promisify } from 'util'

const client = Redis.createClient()

client.on('error', (err) => {
  console.log(('Error ' + err))
})

client.get = promisify(client.get).bind(client)

export default client