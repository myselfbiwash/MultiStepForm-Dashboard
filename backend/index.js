const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
require('./dbConfig/config'); 


router.post('/api/user-data', userController.postUserData);

module.exports = router;