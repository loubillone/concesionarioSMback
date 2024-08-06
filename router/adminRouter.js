const express = require("express");
const {
  listaUsuarios,
  eliminarUsuario,
  editarUsuario,
} = require("../controllers/adminControllers");
const validarJWT = require("../middleware/validarJWT");

const routerAdmin = express.Router();

routerAdmin.get("/listaUsuarios", validarJWT, listaUsuarios);
routerAdmin.delete("/eliminarUsuario/:id", validarJWT, eliminarUsuario);
routerAdmin.put("/editarUsuario", validarJWT, editarUsuario);

module.exports = routerAdmin;
