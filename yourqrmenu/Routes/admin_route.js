const express = require('express');
const companyController = require('../Controllers/company_controller');

const router = express.Router({mergeParams: true});

router.post('/company', companyController.addCompany);
router.delete('/company/:companyId', companyController.deleteCompany);
router.patch('/company', companyController.updateCompany);

module.exports = router;