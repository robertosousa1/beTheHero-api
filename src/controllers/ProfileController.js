const connection = require('../database/connection');

const index = async (req, res) => {
  const ongId = req.headers.authorization;

  const incidents = await connection('incidents')
    .where('ong_id', ongId)
    .select('*');

  return res.json(incidents);
};

module.exports = {
  index,
};
