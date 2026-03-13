const express = require("express");
const cors = require("cors");
const path = require("path");

const cerealRoutes = require("./routes/cereal_routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/cereals", cerealRoutes);

module.exports = app;
