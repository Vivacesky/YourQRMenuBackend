const data = require('../data (temporary)/data');
const Company = require('../Models/company');
const firebase = require('../db');
const firestore = firebase.firestore();

const getAll = async function () {
    try {
        const companies = await firestore.collection('companies');
        const data = await companies.get();

        let companyArray = [];
        if (!data.empty) {
            data.forEach(doc => {
                const company = new Company(
                    doc.id,
                    doc.data().name,
                    doc.data().menus.map(m => m.id),
                );
                companyArray.push(company);
            });
        }
        return companyArray;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll
}
