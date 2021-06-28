const express = require('express');
const menu = require('./menu_route');

const router = express.Router();

router.use('/menu', menu);

module.exports = router;
