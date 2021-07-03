const Company = require("../Models/company")

const getAll = async function (query) {
    let output = [];
    if(query === undefined) {
        return Company.find();
    }
    // {else }
    for (const id of query.split(',')) {
        output.push(await Company.findById(id));
    }
    return output;

}
const addCompany = function (company) {
    return new Company(company).save();
}
const deleteCompany = async function (companyId) {
    await Company.findByIdAndDelete(companyId);
    return Company.find();
}
const updateCompany = function (company) {
    console.log(company);
    return Company.findOneAndUpdate(company.id, company, {new: true});
}

module.exports = {
    getAll,
    addCompany,
    deleteCompany,
    updateCompany
}
