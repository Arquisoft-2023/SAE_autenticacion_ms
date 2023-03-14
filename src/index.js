const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./models/usuario");
const api = require("./routes/index");
const app = express();
const port = process.env.PORT || 5000; // Decision del puerto

// Raw Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido(a) a la API AUTH del SAE. By LMZ" });
});
app.use("/api", api);

// Servidor
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

// Exportaciones
module.exports = app;
