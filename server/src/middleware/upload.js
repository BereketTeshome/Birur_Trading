const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: "uploads/cereals",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|webp|mp4|mov|webm/;

  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Only images and videos allowed"));
  }
};

module.exports = multer({ storage, fileFilter });
