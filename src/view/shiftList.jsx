import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import createDate from "../assets/createDate";
import { MenuItem, Select, FormControl } from "@mui/material";

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
  //当月の月末までを全日取得
  let month = [];
  if (remakeDay === 0) {
    month = [];
  } else if (remakeDay === 1) {
    month = [];
  } else {
    for (let i = 0; i < remakeDay; i++) {
      const day = `${mm}/${dd + i + 1}`;
      month.push({ date: day, status: 0 });
    }
  }

  //次月の最終日を取得
  const nextyyyy = mm === 12 ? yyyy + 1 : yyyy;
  const nextmm = mm === 12 ? 1 : mm + 1;
  const nextlastday = new Date(nextyyyy, nextmm, 0).getDate();
  //次月の月末までを全日取得
  let nextmonth = [];
  for (let i = 0; i < nextlastday; i++) {
    const day = `${mm + 1}/${i + 1}`;
    nextmonth.push({ date: day, status: 0 });
  }
  //当月日付と次月日付をマージ
  const mergeMonth = month.concat(nextmonth);
  //

  const chaegeStatus = (e) => {
    console.log(e);
  };

  useEffect(() => {
    setSift(mergeMonth);
  }, []);

  useEffect(() => {
    //console.log(sift);
  }, [sift]);
  return (
    <>
      <h1>シフト提出</h1>
      <table>
        <tr>
          <th>日付</th>
          <th>予定</th>
        </tr>
        {sift.map((value, index) => (
          <tr key={value.date}>
            <td>{value.date}</td>
            <td>
              <FormControl fullWidth>
                <Select
                  name={value.date}
                  value={value.status}
                  label="status"
                  onChange={chaegeStatus}
                >
                  <MenuItem value={0}>NG</MenuItem>
                  <MenuItem value={1}>終日OK</MenuItem>
                  <MenuItem value={2}>午前OK</MenuItem>
                  <MenuItem value={2}>午後OK</MenuItem>
                </Select>
              </FormControl>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
