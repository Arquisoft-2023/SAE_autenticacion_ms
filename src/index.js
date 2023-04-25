const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const api = require("./routes/index");
const app = express();

const port = process.env.PORT || 3001;
const uri = process.env.URI || "http://127.0.0.1";

// Raw Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido(a) a la API AUTH del SAE" });
});
app.use("/auth", api);
app.use(
  cors({
    origin: [`${uri}:${port}/`] // Especificar el dominio de las rutas
  })
);

// Servidor
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// Exportaciones
module.exports = app;
