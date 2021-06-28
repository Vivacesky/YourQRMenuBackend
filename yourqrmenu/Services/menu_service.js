const data = require('../data (temporary)/data');
const Company = require('../Models/company');
const firebase = require('../db');
const firestore = firebase.firestore();

const getById = function (menuId) {
    return getAll().find(menu => menu.id === menuId);
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
                    doc.data().menus,
                );
                companyArray.push(company);
            });
        }
        return companyArray;
    } catch (error) {
        console.log(error);
    }
}

const addMenu = function (menu) {
    data.Menus.push(menu);
    return data.Menus;
}
const addMenuItem = function (menuId, menuItem) {
    getById(menuId).menuItems.push(menuItem)
    return data.Menus;
}
const deleteMenu = function (menuId) {
    const index = data.Menus.indexOf(getById(menuId));
    if (index !== -1) {
        data.Menus.splice(index, 1);
    }
    return data.Menus;
}
const deleteMenuItem = function (menuId, menuItemId) {
    const index = data.Menus.indexOf(getById(menuId));
    if (index !== -1) {
        const menu = getAll().find(menu => menu.id === menuId);
        const itemIndex = menu.findIndex(item => item.id === menuItemId);
        menu.splice(itemIndex, 1);
    }
    return data.Menus;
}

module.exports = {
    getById,
    getAll,
    addMenu,
    addMenuItem,
    deleteMenu,
    deleteMenuItem
};