const Company = require("../Models/company")

// const getById = function (companyIds) {
//     let output = [];
//     companyIds.forEach(companyId => {
//         output.push(Company.findById(companyId))
//     })
//     return output;
// }
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
const deleteCompany = function (companyId) {
    return Company.findByIdAndDelete(companyId);
}
const updateCompany = function (companyId, company) {
    return Company.findOneAndUpdate(companyId, company, {new: true});
}

module.exports = {
    // getById,
    getAll,
    addCompany,
    deleteCompany,
    updateCompany
}
