const db = require('../db')

// User
db.query(`
  create table
    users
  (
    id integer serial primary key,
    first_name text not null,
    last_name text not null,
    email text not null
  )
`)

// Transactions
db.query(`
  create table
    transactions
  (
    id integer serial primary key,
    service_id integer not null,
    date timestamp not null,
    amount integer,
    balance integer
  )
`)

// Services
db.query(`
  create table
    services
  (
    id integer serial primary key,
    name text not null,
    account_ref text not null,
    amount integer,
    balance integer
  )
`)

// User Services
db.query(`
  create table
    user_services
  (
    id integer serial primary key,
    user_id integer not null,
    amount integer,
    balance integer,
    account_ref text
  )
`)