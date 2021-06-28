const companyService = require('../Services/company_service');
const Company = require('../Models/company');
const getById = async function (req, res) {
    res.send(await companyService.getById(req.params["companyId"]))
}
const getAll = async function (req, res) {
    res.send(await companyService.getAll());
}
const addCompany = async function (req, res) {
    res.send(await companyService.addCompany(req.body));
}
const deleteCompany = async function(req, res) {
    res.send(await companyService.deleteCompany(req.params["companyId"]));
}
const addMenuToCompany = async function (req, res) {
    res.send(await companyService.addMenuToCompany(req.params["companyId"], req.body))
}
module.exports = {
    getAll,
    addCompany,
    deleteCompany,
    getById,
    addMenuToCompany
}