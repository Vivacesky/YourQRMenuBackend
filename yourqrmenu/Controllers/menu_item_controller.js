const menuItemService = require('../Services/menu_item_service');

const getByMenuId = async function (req, res) {
    try {
        res.send(await menuItemService.getByMenuId(req.params["menuId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const getAll = async function (req, res) {
    try {
        res.send(await menuItemService.getAll());
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const addMenuItem = async function (req, res) {
    try {
        res.send(await menuItemService.addMenuItem(req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const deleteMenuItem = async function (req, res) {
    try {
        res.send(await menuItemService.deleteMenuItem(req.params["menuItemId"]));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}
const updateMenuItem = async function (req, res) {
    try {
        res.send(await menuItemService.updateMenuItem(req.params["menuItemId"], req.body));
    } catch (ex) {
        res.status(500).send({message: ex.message});
    }
}

module.exports = {
    getByMenuId,
    getAll,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem,
};