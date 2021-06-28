const Company = require("../Models/company")

const getById = function (companyId) {
    return Company.findById(companyId);
}
const getAll = function () {
    return Company.find();
}
const addCompany = function (company) {
    return new Company(company).save();
}
const deleteCompany = function (companyId) {
    return Company.findByIdAndDelete(companyId);
}
const updateCompany = function (companyId, company) {
    return Company.findOneAndUpdate(companyId, company, {new: true});
}

module.exports = {
    getById,
    getAll,
    addCompany,
    deleteCompany,
    updateCompany
}
