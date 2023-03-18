const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'sagwe',
    password: 'sagwe1',
    database: 'souq',
})

module.exports = connectionPool;
