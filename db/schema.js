
// User
module.exports.users = {
  id: 'integer',
  first_name: 'text',
  last_name: 'text',
  email: 'text'
}

// Transactions
module.exports.transactions = {
  id: 'integer',
  service_id: 'integer',
  date: 'timestamp',
  amount: 'integer',
  balance: 'integer'
}

// Services
module.exports.services = {
  id: 'integer',
  name: 'text',
  account_ref: 'text',
  amount: 'integer',
  balance: 'integer'
}

// User_Services
module.exports.user_services = {
  id: 'integer',
  user_id: 'integer',
  amount: 'integer',
  balance: 'integer',
  account_ref: 'text'
}