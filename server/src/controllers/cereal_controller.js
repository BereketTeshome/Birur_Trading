const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/cereals.json");

const getCereals = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};

const createCereal = (req, res) => {
  const io = req.app.get("io");
  const { name } = req.body;
  const media = req.file.filename;

  const cereals = JSON.parse(fs.readFileSync(filePath));

  cereals.push({
    id: Date.now(),
    name,
    media: `/uploads/cereals/${media}`,
  });

  fs.writeFileSync(filePath, JSON.stringify(cereals, null, 2));

  io.emit("cerealsUpdated", cereals);

  res.status(201).json({ message: "Cereal added successfully" });
};

const updateCereal = (req, res) => {
  const io = req.app.get("io");

  const id = Number(req.params.id);
  const { name } = req.body;

  const cereals = JSON.parse(fs.readFileSync(filePath));

  const index = cereals.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  const oldMedia = cereals[index].media;

  let newMedia = oldMedia;

  if (req.file) {
    if (oldMedia) {
      const oldPath = path.join(
        __dirname,
        "..",
        "..",
        oldMedia.replace(/^\/+/, ""),
      );

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    newMedia = `/uploads/cereals/${req.file.filename}`;
  }

  cereals[index] = {
    id: cereals[index].id,
    name: name,
    media: newMedia,
  };

  fs.writeFileSync(filePath, JSON.stringify(cereals, null, 2));

  io.emit("cerealsUpdated", cereals); // 🚀 notify all clients

  res.json({ message: "Updated successfully" });
};

const deleteCereal = (req, res) => {
  const io = req.app.get("io");

  const id = Number(req.params.id);

  let cereals = JSON.parse(fs.readFileSync(filePath));

  const cereal = cereals.find((c) => c.id === id);

  if (!cereal) {
    return res.status(404).json({ message: "Not found" });
  }

  const filePathToDelete = path.join(
    __dirname,
    "..",
    "..",
    cereal.media.replace(/^\/+/, ""),
  );

  if (fs.existsSync(filePathToDelete)) {
    fs.unlinkSync(filePathToDelete);
  }

  cereals = cereals.filter((c) => c.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(cereals, null, 2));

  io.emit("cerealsUpdated", cereals); // 🚀 broadcast change

  res.json({ message: "Deleted successfully" });
};

module.exports = {
  getCereals,
  createCereal,
  updateCereal,
  deleteCereal,
};
