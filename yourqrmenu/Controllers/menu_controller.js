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

module.exports = {
    getById,
    getAll,
    addMenu
};