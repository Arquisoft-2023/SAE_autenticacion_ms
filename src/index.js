const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./models/usuario");
const api = require("./routes/index");
const app = express();
const port = process.env.PORT || 5000;

// Raw Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});
app.use("/sae", api);

// Server
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

// Exports
module.exports = app;
