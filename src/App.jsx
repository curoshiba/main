import "./styles.css";
import { FaBook } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";

import { Nav } from "./components/navbar";

const App = () => {
  return (
    //メイン画面
    <>
      <div className="App">
        <h1>処理選択</h1>
        <div className="Topmenu">
          <FaBook />
          <FaCheckSquare />
          <FaFileAlt />
          <FaList />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default App;
