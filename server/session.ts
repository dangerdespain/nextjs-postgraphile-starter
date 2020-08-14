import expressSession from 'express-session'
import pg from 'pg'
import PgSession from 'connect-pg-simple'

const pgSession = PgSession(expressSession)

export const pgPool = new pg.Pool()

export const session = expressSession({
  store: new pgSession({
    pgPool,
    tableName: 'user_session'
  }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
})

