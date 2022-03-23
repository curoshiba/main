import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";

// カラム
const columns = [
  {
    field: "id",
    headerName: "ID",
    description: "管理用IDのためスタッフIDとは紐づいておりません",
    sortable: true,
    width: 100
  },
  { field: "workday", headerName: "勤務日", type: "date", width: 150 },
  {
    field: "mattername",
    headerName: "案件名",
    sortable: false,
    width: 250,
    minWidth: 250,
    maxWidth: 500,
    resizable: true,
    editable: true
  },
  // 削除ボタン
  {
    field: "deleteBtn",
    headerName: "削除",
    sortable: false,
    width: 90,
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
    width: 90,
    disableClickEventBubbling: true,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        詳細
      </Button>
    )
  }
];

const [state, setState] = React.useState();
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

export const Salary = () => {
  return (
    <>
      <h1>給与一覧</h1>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </>
  );
};
