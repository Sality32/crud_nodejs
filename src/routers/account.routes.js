const express = require('express');
const router = express.Router();

const accountController = require('../controller/account.controller');

router.get('/allAccount', accountController.getAccounts);
router.get('/account/:id', accountController.getAccount);
router.post('/storeAccount', accountController.storeAccount);
router.post('/updateAccount/:id', accountController.updateAccount);
router.post('/deleteAccount/:id', accountController.deleteAccount);

module.exports = router;