const express = require('express');
const mongoose = require('mongoose')
const routes = require('./Routes/app_route');

const app = express();
const dbURI = 'mongodb+srv://patron:FurkanEmirSeyfullah@yourqrmenu.buzgi.mongodb.net/yourqrmenu?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

module.exports = {app};