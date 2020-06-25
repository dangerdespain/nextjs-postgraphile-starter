const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession)
const pg = require('pg')
console.log(process.env.DATABASE_URL)

const pgPool = new pg.Pool()
// console.log(pgPool.Client)
const session = expressSession({
  store: new pgSession({
    pgPool,
    tableName: 'user_session'
  }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
})

module.exports = { 
  session 
}