const express = require("express");
const app = express();
require("dotenv").config();

app.use("/auth", require("./router/authRouter"));

app.listen(process.env.PORT, () => {
  console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});
