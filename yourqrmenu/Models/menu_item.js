const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    menuId: {
        type: String,
        required: true,
    },
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
}, {timestamps: true});

const Menu = mongoose.model('menuitems', menuItemSchema);
module.exports = Menu;