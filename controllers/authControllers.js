const Usuarios = require("../model/usuario_model");

const crearUsuario = (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
};

module.exports = {
  crearUsuario,
};
