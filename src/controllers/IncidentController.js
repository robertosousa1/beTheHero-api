const connection = require('../database/connection');

const index = async (req, res) => {
  const incidents = await connection('incidents').select('*');

  return res.json(incidents);
};

const store = async (req, res) => {
  const { title, description, value } = req.body;
  const ongId = req.headers.authorization;

  const [id] = await connection('incidents').insert({
    title,
    description,
    value,
    ong_id: ongId,
  });

  return res.json({ id });
};

module.exports = {
  index,
  store,
};
