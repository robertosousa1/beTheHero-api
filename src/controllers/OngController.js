const store = async (req, res) => {
  console.log(req.body);

  return res.send(req.body);
};

module.exports = {
  store,
};
