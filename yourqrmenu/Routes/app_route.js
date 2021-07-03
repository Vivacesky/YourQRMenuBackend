const express = require('express');
const menu = require('./menu_route');
const company = require('./company_route');
const admin = require('./admin_route');

const router = express.Router();

router.use('/menu', menu);
router.use('/company', company)
router.use('/admin', admin);

module.exports = router;
