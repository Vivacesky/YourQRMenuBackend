const companyService = require('../Services/company_service');

// const getById = async function (req, res) {
//     try {
//         console.log(req.query.id);
//         res.send(await companyService.getById(req.query));
//     } catch (ex) {
//         res.status(500).send({message: ex.message});
//     }
// }
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
        res.send(await companyService.updateCompany(req.params["companyId"], req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}

module.exports = {
    getAll,
    addCompany,
    deleteCompany,
    // getById,
    updateCompany
}