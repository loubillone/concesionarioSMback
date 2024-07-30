const Usuarios = require("../model/usuario_model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

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

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Todos los campos son obligatorios",
    });
  }

  try {
    let usuario = await Usuarios.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario o contraseña no son correctos",
      });
    }

    const validarPassword = bcrypt.compareSync(password, usuario.password);

    if (!validarPassword) {
      return res.status(400).json({
        msg: "Usuario o contraseña no son correctos",
      });
    }

    const payload = {
      name: usuario.name,
      id: usuario._id,
      rol: usuario.rol,
    };

    const token = jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "3h",
    });

    console.log(token);

    res.status(200).json({
      msg: "Usuario logueado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

module.exports = {
  crearUsuario,
  loginUsuario,
};
