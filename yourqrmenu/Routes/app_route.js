const express = require('express');
const menu = require('./menu_route');
const company = require('./company_route');

const router = express.Router();

router.use('/menu', menu);
router.use('/company', company)

module.exports = router;
