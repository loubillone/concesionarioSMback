const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./dataBase/config");

app.use(express.json());

app.use("/auth", require("./router/authRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});
