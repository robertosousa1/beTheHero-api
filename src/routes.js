const { Router } = require('express');

const routes = Router();

const OngController = require('./controllers/OngController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

module.exports = routes;
