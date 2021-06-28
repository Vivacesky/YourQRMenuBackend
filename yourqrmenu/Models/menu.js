const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    burgers: {
        type: Array,
        required: true,
    },
    soups: {
        type: Array,
        required: true,
    },
    drinks: {
        type: Array,
        required: true,
    },
}, {timestamps: true});

const Menu = mongoose.model('menus', menuSchema);
module.exports = Menu;