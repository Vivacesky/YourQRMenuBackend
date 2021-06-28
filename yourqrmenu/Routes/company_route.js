const express = require('express');
const companyController = require('../Controllers/company_controller');

const router = express.Router({mergeParams: true});

router.get('/', companyController.getAll);

module.exports = router;