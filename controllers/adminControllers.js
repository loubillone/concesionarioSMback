const Usuarios = require("../model/usuario_model");

const listaUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuarios.find();
    res.status(200).json({
      listaUsuarios,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

// const eliminarUsuario = async (req, res) => {
//   try {
//     const usuarioEliminar = await Usuarios.findById(req.params.id);
//     console.log(usuarioEliminar);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  listaUsuarios,
};
