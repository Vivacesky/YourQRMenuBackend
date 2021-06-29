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

module.exports = {
    getByCompanyId,
    getAll,
    addMenu,
    deleteMenu,
    updateMenu,
};