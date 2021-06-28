const express = require('express');
const companyController = require('../Controllers/company_controller');

const router = express.Router({mergeParams: true});

router.get('/', companyController.getAll);
router.get('/:companyId', companyController.getById);
router.post('/', companyController.addCompany);
router.delete('/:companyId', companyController.deleteCompany)
router.patch('/:companyId', companyController.updateCompany)

module.exports = router;