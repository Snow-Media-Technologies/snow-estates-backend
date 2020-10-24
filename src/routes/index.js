const express = require('express');
const saveController = require('../controllers/index');

const router = express.Router()

router.post('/api/v1/add-property', saveController.addProperty)

module.exports = router;
