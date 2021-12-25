const express = require('express');
const router = express.Router();

const dayController = require('../controllers/dayController');

router.post('/newDay', dayController.newDay);


module.exports = router;