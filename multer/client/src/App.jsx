import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Filecomp from "./Filecomp";
import axios from "axios";
import "./App.css";

function App() {
  const [filesData, setFilesData] = useState([]);
  const getDataFromServer = async () => {
    const res = await axios.get("http://localhost:3000/api/file/get");
    setFilesData(res.data);
  };

  useEffect(() => {
    getDataFromServer();
  }, []);
  return (
    <>
      <Filecomp />
      <hr />
      {/* files are shown here */}
      <div className="gallery">
        {filesData.map((el) => (
          <div className="image-box" key={el._id}>
            <img
              src={`http://localhost:3000/${el.filename}`}
              alt={el.filename}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
