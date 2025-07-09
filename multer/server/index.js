const express = require("express");
const cors = require("cors");
const upload = require("./config/multer");
const { ConnectToDB, File } = require("./config/db"); // ✅ Correct import


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./uploads")); // Serve static files

app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ Corrected Upload Route
app.post("/api/file/upload", upload.single("file"), async (req, res) => {
  try {
    const file = await File.create({
      filename: req.file.filename,
    });

    res.status(200).send("File uploaded and saved to MongoDB");
  } catch (error) {
    console.error("Error saving file:", error);
    res.status(500).send("Failed to upload file");
  }
});

app.get("api/file/get", async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).send("Failed to retrieve files");
  }
});

app.get("/api/file/get", async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, async () => {
  await ConnectToDB();
  console.log("Server is running on port 3000");
});
