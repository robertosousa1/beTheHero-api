const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    event: 'Semana OmniStack 11.0',
    message: 'Olá, mundo!',
  });
});

app.listen(3333);