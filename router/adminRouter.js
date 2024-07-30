const express = require("express");
const {
  listaUsuarios,
  eliminarUsuario,
} = require("../controllers/adminControllers");
const validarJWT = require("../middleware/validarJWT");

const routerAdmin = express.Router();

routerAdmin.get("/listaUsuarios", validarJWT, listaUsuarios);
routerAdmin.delete("/eliminarUsuario/:id", validarJWT, eliminarUsuario);

module.exports = routerAdmin;
