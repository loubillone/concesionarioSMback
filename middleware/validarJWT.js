var jwt = require("jsonwebtoken");

const validarJWT = async (req, res) => {
  const token = req.header("x-token");

  console.log(token);

  if (!token) {
    return res.status(400).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
  } catch (error) {
    res.status(401).json({
      msg: "Token no válido",
    });
  }

  next();
};

module.exports = validarJWT;
