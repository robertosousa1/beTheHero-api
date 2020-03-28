const { Router } = require('express');

const routes = Router();

const OngController = require('./controllers/OngController');

routes.post('/ongs', OngController.store);

module.exports = routes;
