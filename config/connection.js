const mysql = require('mysql');
require("dotenv").config();
const serverPassword = process.env.serverPassword;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: serverPassword,
    database: 'burgers_db'
})

connection.connect(err => {
    err ? console.error(`error connecting: ${err.stack}`) : console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection;