const MenuItem = require("../Models/menu_item");

const getByMenuId = function (menuId) {
    return MenuItem.find({menuId: menuId});
}
const getAll = function () {
    return MenuItem.find();
}
const addMenuItem = function (menuItem) {
    return new MenuItem(menuItem).save();
}
const deleteMenuItem = function (menuItemId) {
    return MenuItem.findByIdAndDelete(menuItemId);
}
const updateMenuItem = function (menuItemId, menuItem) {
    return MenuItem.findOneAndUpdate(menuItemId, menuItem, {new: true});
}

module.exports = {
    getByMenuId,
    getAll,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem,
};