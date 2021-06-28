const data = require('../data (temporary)/data');

const getById = function(_id){
    return getAll().find(menu => menu._id === _id);
}

const getAll = function(){
    return data.Menus;
}

const addMenu = function(menuItems){
    return menuItems;
}

module.exports = {
    getById,
    getAll,
    addMenu
};