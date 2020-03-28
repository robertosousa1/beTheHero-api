const { Router } = require('express');

const routes = Router;

routes.get('/', (req, res) => {
  return res.json({
    event: 'Semana OmniStack 11.0',
    message: 'Olá, mundo!',
  });
});

module.exports = routes;