const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItem = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const menuSchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    menuItems: {type: [MenuItem]}
});

const Menu = mongoose.model('menus', menuSchema);
module.exports = Menu;
