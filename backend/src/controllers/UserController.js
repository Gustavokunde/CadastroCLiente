const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    return res.json(user);
  },

  async delete(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user._id) {
      // verifico se o usuario logado é o dono do agendamento
      return res.status(401).json({
        error: "Usuário inexistente."
      });
    }
    return res.json(user);
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email
    });

    const newUser = await User.findById(req.params.id);

    return res.json(newUser);
  }
};
