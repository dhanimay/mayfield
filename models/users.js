const db = require('../db')

module.exports.create = async (user) => {
  const { rows } = await db.query(`
    insert into
      users
    (id, first_name, last_name, email) 
      values
    ($1, $2, $3, $4)
  `, [user.id, user.first_name, user.last_name, user.email])
  return rows
}

module.exports.findById = async (id) => {
  const { rows } = await db.query(`
    select * from users where id=$1
  `, [id])
  return rows
}