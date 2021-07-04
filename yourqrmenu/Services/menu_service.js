const Menu = require("../Models/menu");
const mongoose = require('mongoose');

const getByCompanyId = function (companyId) {
    return Menu.findOne({companyId: companyId, isActive: true});
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
    return Menu.aggregate([{$unwind: "$menuItems"}, {
        $group: {
            _id: "$menuItems.category",
            companies: {$addToSet: "$companyId"},
        },
    },
        {$sort: {_id: 1}},
    ]);
}
const getMenuItemsByMenuId = function (menuId) {
    return Menu.findById(menuId).select("menuItems");
}

const getMenuItemById = async function (menuId, menuItemId) {
    let menu = await Menu.findById(menuId);
    return menu["menuItems"].find(menuItem => menuItem.id === menuItemId);
}

const addMenuItem = async function (menuId, menuItem) {
    await Menu.findByIdAndUpdate(menuId, {$push: {menuItems: menuItem}});
    return Menu.findById(menuId);
}

const deleteMenuItem = async function (menuId, menuItemId) {
    await Menu.findByIdAndUpdate(menuId, {$pull: {'menuItems': {_id: menuItemId}}});
    return Menu.findById(menuId);
}
const updateMenuItem = async function (menuId, menuItem) {
    await Menu.updateOne({'menuItems._id': menuItem._id},
        {'$set': {
                'menuItems.$': menuItem,
            }});
    return Menu.findById(menuId);
}


module.exports = {
    getByCompanyId,
    getAll,
    addMenu,
    deleteMenu,
    updateMenu,
    getAllCategories,
    getMenuItemsByMenuId,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem,
    getMenuItemById
};