const mongoose = require("mongoose");

async function ConnectToDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fileupload");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = { ConnectToDB, File };
