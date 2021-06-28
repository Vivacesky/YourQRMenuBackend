const companyService = require('../Services/company_service');
const Company = require('../Models/company');

const getAll = async function (req, res) {
    res.send(await companyService.getAll());
}

module.exports = {
    getAll
}