const express = require("express");
const { crearUsuario } = require("../controllers/authControllers");
const routerAuth = express.Router();

routerAuth.post("/crearUsuario", crearUsuario);
routerAuth.post("/login", loginUsuario);

module.exports = routerAuth;
