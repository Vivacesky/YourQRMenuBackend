const Company = require('../Models/company');
const firebase = require('../db');
const firestore = firebase.firestore();
const getById = async function(id) {
    return (await getAll()).find(company => company.id === id);
}
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
const addCompany = async function(company) {
    try{
        await firestore.collection('companies').doc().set(company);
        return await getAll();

    } catch (error) {
        console.log(error);
    }
}
const deleteCompany = async function(id) {
    try {
        await firestore.collection('companies').doc(id).delete();
        return await getAll();
    }catch (error) {
        console.log(error);
    }

}
const addMenuToCompany = async function(id, menu) {
    const company = await firestore.collection('companies').doc(id)
    return company
    // admin.firestore().runTransaction(transaction => {
    //     return transaction.get(docRef).then(snapshot => {
    //         const largerArray = snapshot.get('array');
    //         largerArray.push('newfield');
    //         transaction.update(docRef, 'array', largerArray);
    //     });
    // });
}
module.exports = {
    getById,
    getAll,
    addCompany,
    deleteCompany,
    addMenuToCompany
}
