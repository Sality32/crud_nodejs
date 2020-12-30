const express = require('express');
const router = express.Router();

const accountController = require('../controller/account.controller');

//All Account
router.get('/all', accountController.findAll);

//Account By Id
router.get('/:id', accountController.findById);

//Create Account
router.post('/store', accountController.create);

//Update Account
router.post('/update/:id', accountController.update);

//Delete Account
router.post('/delete/:id', accountController.delete);

//export module
module.exports = router;