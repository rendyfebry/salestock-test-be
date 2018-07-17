require('dotenv').config()

const MONGO_DB_CONN_STRING = process.env.MONGO_DB_CONN_STRING
const db = require('monk')(MONGO_DB_CONN_STRING)

module.exports = db
