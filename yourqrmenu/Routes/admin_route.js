const express = require('express');
const companyController = require('../Controllers/company_controller');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});

//company crud
router.post('/company', companyController.addCompany);
router.delete('/company/:companyId', companyController.deleteCompany);
router.patch('/company', companyController.updateCompany);

//menuItem crud
router.post('/menu/items/:menuId', menuController.addMenuItem);
router.delete('/menu/items/:menuId/:menuItemId', menuController.deleteMenuItem);
router.patch('/menu/items/:menuId/', menuController.updateMenuItem);


module.exports = router;