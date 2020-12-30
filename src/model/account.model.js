"use strict";

var dbConn = require('./../config/config');
//Account

var Account = function (account) {
    this.first_name = account.first_name;
    this.username = account.username;
    this.email = account.email;
    this.password = account.password;
};

Account.create = function (newAccount, result) {
    dbConn.query("INSERT INTO account set ?", newAccount, function (err, res) {
        if (err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);

        }
    });
};

Account.findById = function (id, result) {
    dbConn.query("SELECT * from account where id= ? ", id, function (err, res) {
        if (err) result(err, null);
        else result(null, res);  
    });
};

Account.findAll = function (result) {
    dbConn.query("SELECT * from account", function (err, res) {
        if (err) result(err, null);
        else result(null, res);
    });
};

Account.update = function (id, account, result) {
    console.log(account);
    dbConn.query("UPDATE account SET first_name=?, username=?, email=?, password=? WHERE id=?", 
    [account.first_name, account.username, account.email, account.password, id],
    function (err, res) {
        if (err) result(err, null);
        else result(null, res);        
    });
};

Account.delete = function (id, result) {
    dbConn.query("DELETE FROM account WHERE id=?", id, function (err, res) {
        if (err) result(err, null);
        else result(null, err);
    });
};


module.exports = Account;