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
            <div className="ButtonIcon">
              <FaBook size={IconSize} />
              <div className="IconText">マニュアル</div>
            </div>
            <div className="ButtonIcon">
              <FaCheckSquare size={IconSize} />
              <div className="IconText">シフト提出</div>
            </div>
            <div className="ButtonIcon">
              <FaFileAlt size={IconSize} />
              <div className="IconText">アンケート</div>
            </div>
            <div className="ButtonIcon">
              <FaList size={IconSize} />
              <div className="IconText">時間割登録</div>
            </div>
          </div>
          <div className="UnderMenu">
            <div className="ButtonIcon">
              <FaMoneyBillAlt size={IconSize} />
              <div className="IconText">給与一覧</div>
            </div>
            <div className="ButtonIcon">
              <FaInfoCircle size={IconSize} />
              <div className="IconText">注意事項</div>
            </div>
            <div className="ButtonIcon">
              <FaRegCalendarAlt size={IconSize} />
              <div className="IconText">シフト一覧</div>
            </div>
            <div className="ButtonIcon">
              <FaClock size={IconSize} />
              <div className="IconText">シフト提出</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
