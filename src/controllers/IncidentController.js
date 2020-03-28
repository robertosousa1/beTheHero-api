const connection = require('../database/connection');

const index = async (req, res) => {
  const { page = 1 } = req.query;
  const { limit = 5 } = req.query;

  const [count] = await connection('incidents').count();

  const incidents = await connection('incidents')
    .limit(limit)
    .offset((page - 1) * limit)
    .select('*');

  res.header('X-Total-Count', count['count(*)']);

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

const remove = async (req, res) => {
  const { id } = req.params;
  const ongId = req.headers.authorization;

  const incident = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first();

  if (!incident) {
    return res.status(401).json({ error: 'Incident does not exist.' });
  }

  if (incident.ong_id !== ongId) {
    return res.status(401).json({ error: 'Operation not permitted.' });
  }

  await connection('incidents').where('id', id).delete();

  return res.status(204).send();
};

module.exports = {
  index,
  store,
  remove,
};
