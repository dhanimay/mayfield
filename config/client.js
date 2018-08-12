const client = {}
const environment = process.env.NODE_ENV

client.api = process.env[`${environment}_api`]
export default client
