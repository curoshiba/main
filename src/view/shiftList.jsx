import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import createDate from "../assets/createDate";

export const ShiftList = () => {
  const [sift, setSift] = useState([{}]);
  const [newsift, setNewSift] = useState({
    date: "",
    status: 0
  });
  //当日の年、月を取得
  const yyyy = createDate().y;
  const mm = createDate().m;
  const dd = createDate().d;
  //当月の最終日を取得
  const lastday = new Date(yyyy, mm, 0).getDate();

  //当月の残日数を取得
  const remakeDay = lastday - dd;
  //当月の月末までを前日取得

  for (let i = 0; i < remakeDay; i++) {
    const day = `${mm}/${dd + i + 1}`;
    let month = [];
    month.push(day);
    setSift([...sift]);
  }

  //次月の最終日を取得
  const nextlastday = new Date(yyyy, mm + 1, 0).getDate();
  //次月の残日数を取得

  //

  return <h1>シフト一覧</h1>;
};
