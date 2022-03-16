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
  const IconSize = 150;
  return (
    //メイン画面

    <>
      <div className="App">
        <h1>処理選択</h1>
        <div className="Icons">
          <div className="TopMenu">
            <FaBook size={IconSize} />
            <p>マニュアル</p>
            <FaCheckSquare size={IconSize} />
            <p>シフト提出</p>
            <FaFileAlt size={IconSize} />
            <p>シフト</p>
            <FaList size={IconSize} />
            <p>時間割登録</p>
          </div>
          <div UnderMenu>
            <FaMoneyBillAlt size={IconSize} />
            <p>給与一覧</p>
            <FaInfoCircle size={IconSize} />
            <p>注意事項</p>
            <FaRegCalendarAlt size={IconSize} />
            <p>シフト一覧</p>
            <FaClock size={IconSize} />
            <p>シフト提出</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
