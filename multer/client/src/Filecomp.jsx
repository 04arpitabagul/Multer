import React, { useState } from "react";
import axios from "axios";
//http://localhost:3000/api/file/upload
const Filecomp = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/file/upload",
        { file },
        {
          headers: {
            "Content-Type": "multipart/form-data", // This is important for file uploads
          },
        }
      );

      console.log("File uploaded successfully:", res.data);

      // if (!res.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default Filecomp;
