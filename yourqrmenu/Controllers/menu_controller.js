const menuService = require('../Services/menu_service');
const Menu = require('../Models/menu');

const getById = function(req, res){
    res.send(menuService.getById(req.params._id));
}

const getAll = function(req, res){
    res.send(menuService.getAll());
}

const addMenu = function(req, res){
    res.send(menuService.addMenu(new Menu(req.body)));
}

const addMenuItem = function (req, res) {
    res.send(menuService.addMenuItem(req["params"]["_id"], req.body))
}

const deleteMenu = function (req, res) {
    res.send(menuService.deleteMenu(req["params"]["_id"]))
}

const deleteMenuItem = function (req, res) {
    res.send(menuService.deleteMenuItem(req["params"]["_id"], req["params"]["_name"]))
}

module.exports = {
    getById,
    getAll,
    addMenu,
    addMenuItem,
    deleteMenu,
    deleteMenuItem
};