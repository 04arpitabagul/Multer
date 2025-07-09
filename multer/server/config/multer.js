const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname; // Generate a unique file name
    cb(null, uniqueSuffix); // Use the original file name or generate a unique name
  },
});

const upload = multer({ storage });
module.exports = upload;
