"use strict";
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'test_node_db'
});
dbConn.connect(function (err) {
    if (err) {
        console.log(err);
    }else{
        console.log("Database Connected!");
    }
});

module.exports = dbConn;