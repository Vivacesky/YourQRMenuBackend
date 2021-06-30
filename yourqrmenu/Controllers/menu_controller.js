const menuService = require('../Services/menu_service');

const getByCompanyId = async function (req, res) {
    try {
        res.send(await menuService.getByCompanyId(req.params["companyId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const getAll = async function (req, res) {
    try {
        res.send(await menuService.getAll());
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const addMenu = async function (req, res) {
    try {
        res.send(await menuService.addMenu(req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const deleteMenu = async function (req, res) {
    try {
        res.send(await menuService.deleteMenu(req.params["menuId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const updateMenu = async function (req, res) {
    try {
        res.send(await menuService.updateMenu(req.params["menuId"], req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const getAllCategories = async function (req, res) {
    try {
        res.send(await menuService.getAllCategories());
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const getMenuItemByMenuId = async function (req, res) {
    try {
        res.send(await menuService.getMenuItemByMenuId(req.params["menuId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const addMenuItem = async function (req, res) {
    try {
        res.send(await menuService.addMenuItem(req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const deleteMenuItem = async function (req, res) {
    try {
        res.send(await menuService.deleteMenuItem(req.params["menuItemId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const updateMenuItem = async function (req, res) {
    try {
        res.send(await menuService.updateMenuItem(req.params["menuItemId"], req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
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