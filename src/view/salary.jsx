import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import createDate from "../assets/createDate";

// カラム
const columns = [
  {
    field: "id",
    headerName: "ID",
    description: "管理用IDのためスタッフIDとは紐づいておりません",
    sortable: true,
    width: 100
  },
  {
    field: "workday",
    headerName: "勤務日",
    type: "date",
    editable: true,
    width: 150
  },
  {
    field: "mattername",
    headerName: "案件名",
    sortable: false,
    width: 400,
    editable: true
  },
  {
    field: "place",
    headerName: "勤務地",
    sortable: false,
    width: 200,
    editable: true
  },
  {
    field: "expectDate",
    headerName: "支払予定日",
    sortable: false,
    type: "date",
    width: 150,
    editable: true
  },
  {
    field: "sumprice",
    headerName: "合計支給額",
    sortable: false,
    width: 150,
    editable: true
  },
  {
    field: "status",
    headerName: "ステータス",
    sortable: true,
    width: 150,
    editable: false
  },
  // 削除ボタン
  {
    field: "deleteBtn",
    headerName: "削除",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        削除
      </Button>
    )
  },
  // 詳細ボタン
  {
    field: "editBtn",
    headerName: "詳細",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        詳細
      </Button>
    )
  },
  {
    field: "updateTime",
    headerName: "更新日時",
    type: "datetime",
    editable: false,
    width: 150
  },
  {
    field: "memo",
    headerName: "備考",
    editable: false,
    width: 400
  }
];

// データ
const rows = [
  { id: 1, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 2, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 3, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 4, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 5, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 6, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 7, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 8, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 9, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 10, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 11, workday: "2022/03/22", mattername: "水元ワクチン" },
  { id: 12, workday: "2022/03/22", mattername: "水元ワクチン" }
];
//初期値
const ini = {
  workday: "",
  mattername: "",
  place: "",
  expectDate: "",
  sumprice: 0,
  status: { complete: 1 },
  updateTime: createDate(),
  memo: ""
};
export const Salary = () => {
  const [state, setState] = useState(ini);

  //タイムスタンプ用の時刻
  console.log(createDate());
  //入力内容をstateへ反映させる関数
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <>
      <h1>給与一覧</h1>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
      <h3>勤務日</h3>
      <TextField
        required
        id="workday"
        label="必須"
        variant="outlined"
        type="date"
      />
      <h3>案件名</h3>
      <TextField required id="mattername" label="必須" variant="outlined" />
      <h3>勤務地</h3>
      <TextField required id="place" label="必須" variant="outlined" />
      <h3>支払予定日</h3>
      <TextField
        required
        id="expectDate"
        label="必須"
        variant="outlined"
        type="date"
      />
      <h3>合計支給額</h3>
      <TextField
        required
        id="place"
        label="必須"
        variant="outlined"
        type="number"
      />
      <h3>ステータス</h3>
      <h3>備考</h3>
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        value={state}
        onChange={handleChange}
        variant="filled"
      />
    </>
  );
};
