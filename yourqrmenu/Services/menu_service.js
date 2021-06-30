const Menu = require("../Models/menu");

const getByCompanyId = function (companyId) {
    return Menu.find({companyId: companyId});
}
const getAll = function () {
    return Menu.find();
}
const addMenu = function (menu) {
    return new Menu(menu).save();
}
const deleteMenu = function (menuId) {
    return Menu.findByIdAndDelete(menuId);
}
const updateMenu = function (menuId, menu) {
    return Menu.findOneAndUpdate(menuId, menu, {new: true});
}
const getAllCategories = async function () {
    const menus = await Menu.find();

    return menus;
}


const getMenuItemByMenuId = function (menuId) {
    return Menu.find({menuId: menuId});
}
const addMenuItem = function (menuItem) {
    return new Menu(menuItem).save();
}
const deleteMenuItem = function (menuItemId) {
    return Menu.findByIdAndDelete(menuItemId);
}
const updateMenuItem = function (menuItemId, menuItem) {
    return Menu.findOneAndUpdate(menuItemId, menuItem, {new: true});
}


module.exports = {
    getByCompanyId,
    getAll,
    addMenu,
    deleteMenu,
    updateMenu,
    getAllCategories,
    getMenuItemByMenuId,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem
};