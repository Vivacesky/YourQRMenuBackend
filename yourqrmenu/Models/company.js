const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    colors: {
        type: Array,
        required: true,
    },
    gsm: {
        type: String,
        required: true,
    },
    menus: [{
        type: Schema.Types.ObjectId, ref: "menu"
    }]
}, {timestamps: true});

const Company = mongoose.model('companies', companySchema);
module.exports = Company;