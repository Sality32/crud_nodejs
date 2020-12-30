"use strict";

const Account = require('../model/account.model');

exports.findAll = function (req, res) {
    Account.findAll(function (err, accounts) {
        if (err) res.send(err);
        else res.send(accounts);
    });
};

exports.create = function (req, res) {
    const newAccount = new Account(req.body);
    if (Object.keys(req.body).length == 0)
    res.status(400).send({error: true, message:' Please Provide All required field'});
    else Account.create(newAccount, function (err, account) {
        if (err) res.send(err)
        else res.json({error: false, message: "Account added succesfully!", data: account});
    });
};

exports.findById = function (req, res) {
    Account.findById(req.params.id, function (err, account) {
        if (err) res.send(err);
        else res.json(account);
    });
};

exports.update = function(req, res){
    console.log(req.body, req.params.id);
    if (Object.keys(req.body).length == 0) 
    req.status(400).send({error: true, message: 'Please Provide All required field'});
    
    else Account.update(req.params.id, new Account(req.body),
    function (err, account) {
        if (err) res.send(err);
        else res.json({error: false, message: 'Account Successfully updated'});        
    });
};

exports.delete = function (req, res) {
    Account.delete(req.params.id, function (err, account) {
        if (err) res.send(err);
        else
        res.json({error: false, message:'Account Successfully Deleted'});
    });
};
