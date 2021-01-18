"use strict";

const Account = require('../model/account.model');

exports.getAccounts = function (req, res) {
    Account.findAll(function (err, accounts) {
        if (err){
            res.send(err);
        } else {
            res.send({
              message: "Get all account success",
              result: {
                Accounts: accounts
              },
            });
        };
    });
};

exports.storeAccount = function (req, res) {
    const newAccount = new Account(req.body);
    if (Object.keys(req.body).length == 0)
    res.status(400).send({error: true, message:' Please Provide All required field'});
    else Account.create(newAccount, function (err, account) {
        if (err){
            res.send(err);
        } else {
            res.json({
              message: "Account added success",
              result: {
                Account: account,
              },
            });
        };
    });
};

exports.getAccount = function (req, res) {
    Account.findById(req.params.id, function (err, account) {
        if (err){
            res.send(err);
        } else {
            res.json({
                message: "Get account success",
                result:{
                    Account: account
                }
            });
        };
    });
};

exports.updateAccount = function(req, res){
    console.log(req.body, req.params.id);
    if (Object.keys(req.body).length == 0) {
        req
          .status(400)
          .send({ error: true, message: "Please Provide All required field" });
    } else {
        Account.update(
          req.params.id,
          new Account(req.body),
          function (err, account) {
            if (err){
                res.send(err);
            } else {
                res.json({
                  message: "Account Successfully updated",
                  result: {
                      Account: account,
                    },
                  
                });
            };
        });
    };
};

exports.deleteAccount = function (req, res) {
    Account.delete(req.params.id, function (err, account) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "Account Successfully Deleted",
                result:{
                    account:account
                },
            });
        };
    });
};
