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

const eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminar = await Usuarios.findById(req.params.id);

    if (!usuarioEliminar) {
      return res.status(400).json({
        msg: "El usuario a eliminar no existe",
      });
    }

    await Usuarios.findByIdAndDelete(req.params.id);

    res.status(200).json({
      msg: "Usuario eliminado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Por favor contactarse con el administrador",
    });
  }
};

module.exports = {
  listaUsuarios,
  eliminarUsuario,
};
