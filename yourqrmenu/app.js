const express = require('express');
const http = require('http');
const routes = require('./Routes/app_route');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

const httpServer = http.createServer(app);
httpServer.listen(3000);

module.exports = { app };