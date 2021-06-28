const express = require('express');
const companyController = require('../Controllers/company_controller');

const router = express.Router({mergeParams: true});

router.get('/', companyController.getAll);

router.get('/:companyId', companyController.getById)

router.post('/:companyId/addMenu', companyController.addMenuToCompany)

router.post('/add', companyController.addCompany);

router.delete('/remove/:companyId', companyController.deleteCompany)

module.exports = router;