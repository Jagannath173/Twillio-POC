const express = require('express');
const { createToken } = require('../controllers/video.controller');

const router = express.Router();

router.post('/token', createToken);

module.exports = router;
