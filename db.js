
const mysql = require("mysql2/promise")

// criar a conexão
const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3000",
    user: "root",
    password: "escola", //senha "escola" no linux
    database: "api_epa"
})
module.exports = Object.freeze({
    pool: pool
})
