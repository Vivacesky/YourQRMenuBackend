const companyService = require('../Services/company_service');

const getAll = async function (req, res) {
    try {
        res.send(await companyService.getAll(req.query["ids"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const addCompany = async function (req, res) {
    try {
        res.send(await companyService.addCompany(req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const deleteCompany = async function (req, res) {
    try {
        res.send(await companyService.deleteCompany(req.params["companyId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const updateCompany = async function (req, res) {
    try {
        res.send(await companyService.updateCompany(req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}

module.exports = {
    getAll,
    addCompany,
    deleteCompany,
    updateCompany
}