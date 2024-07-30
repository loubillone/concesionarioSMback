const Usuarios = require("../model/usuario_model");
const bcrypt = require("bcrypt");

const crearUsuario = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let usuario = await Usuarios.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        msg: "El email ya está registrado",
      });
    }

    usuario = new Usuarios(req.body);

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(200).json({
      msg: "Usuario registrado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

module.exports = {
  crearUsuario,
};
