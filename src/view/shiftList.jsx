import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import createDate from "../assets/createDate";
import { MenuItem, Select, FormControl, Container, Box } from "@mui/material";
import { Header } from "../components/header/header";

export const ShiftList = () => {
  const [sift, setSift] = useState([{}]);

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

  const chaegeStatus = (index, event) => {
    const value = event.target.value;
    const newsift = [...sift];
    newsift[index].status = value;
    setSift(newsift);
  };

  useEffect(() => {
    setSift(mergeMonth);
  }, []);

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>シフト提出</h1>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <table>
            <tr>
              <th>日付</th>
              <th>予定</th>
            </tr>
            {sift.map((value, index) => (
              <tr key={index}>
                <td>{value.date}</td>
                <td>
                  <FormControl fullWidth margin="normal">
                    <Select
                      name={value.date}
                      value={value.status}
                      label="status"
                      onChange={(e) => chaegeStatus(index, e)}
                    >
                      <MenuItem value={0}>NG</MenuItem>
                      <MenuItem value={1}>終日OK</MenuItem>
                      <MenuItem value={2}>午前OK</MenuItem>
                      <MenuItem value={3}>午後OK</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Container>
    </>
  );
};
