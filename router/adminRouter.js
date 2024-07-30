const express = require("express");
const { listaUsuarios } = require("../controllers/adminControllers");

const routerAdmin = express.Router();

routerAdmin.get("/listaUsuarios", listaUsuarios);
// routerAdmin.delete("/eliminarUsuario:id", eliminarUsuario);

module.exports = routerAdmin;
