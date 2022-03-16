import "./styles.css";
import {
  FaBook,
  FaCheckSquare,
  FaFileAlt,
  FaList,
  FaRegCalendarAlt,
  FaInfoCircle,
  FaClock,
  FaMoneyBillAlt
} from "react-icons/fa";

import { Nav } from "./components/navbar";

const App = () => {
  return (
    //メイン画面
    <>
      <div className="App">
        <h1>処理選択</h1>
        <div className="Icons">
          <div className="TopMenu">
            <FaBook />
            <FaCheckSquare />
            <FaFileAlt />
            <FaList />
          </div>
          <div UnderMenu>
            <FaMoneyBillAlt />
            <FaInfoCircle />
            <FaRegCalendarAlt />
            <FaClock />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
