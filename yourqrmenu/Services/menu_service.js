const data = require('../data (temporary)/data');

const getById = function(_id){
    return getAll().find(menu => menu._id === _id);
}

const getAll = function(){
    return data.Menus;
}

const addMenu = function(menu){
    data.Menus.push(menu)
    return data.Menus;
}
const addMenuItem = function (id, menuItem) {
    const menu = getById(id);
    menu["menuItems"].push(menuItem);
    return menu;
}
const deleteMenu = function (id) {
    const index = data.Menus.indexOf(getById(id));
    console.log(index);
    if (index > -1) {
        data.Menus.splice(index, 1);
    }
    return data.Menus;
}
const deleteMenuItem = function (id, name) {
    const index = data.Menus.indexOf(getById(id));
    console.log(index);
    if (index > -1) {
        const itemIndex = data.Menus[index]["menuItems"].findIndex(item => item.name === name);
        data.Menus[index]["menuItems"].splice(itemIndex, 1);
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