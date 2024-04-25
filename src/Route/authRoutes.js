
const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.post('/userSignup', userController.signup);
router.post('/userlogin', userController.login);

module.exports = router;
