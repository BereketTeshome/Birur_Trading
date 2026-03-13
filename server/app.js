require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const cerealRoutes = require("./src/routes/cereal_routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/cereals", cerealRoutes);

app.get("/", (req, res) => {
  res.send("API running successfully!!");
});

/* LOCAL SERVER ONLY */
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

/* FOR VERCEL */
module.exports = app;
