import React from "react";
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
import "./main.css";

export const Main = (props) => {
  const { iconsize } = props;
  return (
    <>
      <h1>処理選択</h1>
      <div className="Icons">
        <div className="TopMenu">
          <div className="ButtonIcon">
            <FaBook size={iconsize} />
            <div className="IconText">マニュアル</div>
          </div>
          <div className="ButtonIcon">
            <FaCheckSquare size={iconsize} />
            <div className="IconText">案件表</div>
          </div>
          <div className="ButtonIcon">
            <FaFileAlt size={iconsize} />
            <div className="IconText">アンケート</div>
          </div>
          <div className="ButtonIcon">
            <FaList size={iconsize} />
            <div className="IconText">時間割登録</div>
          </div>
        </div>
        <div className="UnderMenu">
          <div className="ButtonIcon">
            <FaMoneyBillAlt size={iconsize} />
            <div className="IconText">給与一覧</div>
          </div>
          <div className="ButtonIcon">
            <FaInfoCircle size={iconsize} />
            <div className="IconText">注意事項</div>
          </div>
          <div className="ButtonIcon">
            <FaRegCalendarAlt size={iconsize} />
            <div className="IconText">シフト一覧</div>
          </div>
          <div className="ButtonIcon">
            <FaClock size={iconsize} />
            <div className="IconText">シフト提出</div>
          </div>
        </div>
      </div>
      <div className="Notice">
        <h2>お知らせ</h2>
        <textarea className="NoticeArea" disabled>
          ★お知らせの内容です
        </textarea>
      </div>
    </>
  );
};
