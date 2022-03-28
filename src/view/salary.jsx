import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box, Button } from "@material-ui/core";
import createDate from "../assets/createDate";
import { DeleteIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";

//初期値

export const Salary = (props) => {
  const [state, setState] = useState([]); //現在の配列のステイト
  const [newState, setNewState] = useState(props); //配列へ追加するためのオブジェクトを管理するステイト
  const {
    ID,
    workday,
    mattername,
    place,
    expectDate,
    sumprice,
    status,
    updateTime,
    memo
  } = newState; //newStateを分割代入

  const onChangeState = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewState({ ...newState, [name]: value });
  };

  const last = state.slice(-1)[0]; //最後の要素を取得
  const lastID = last.ID; //最後の要素のIDを取得

  const onClickAdd = () => {
    //idを計算する
    let newId = 1;
    if (!state.length === 0) newId = lastID + 1;
    console.log();
    setNewState({ ...newState, ID: newId }); //idをオブジェクトへ追加
    const newArray = [...state, newState]; //stateの配列へ新しいオブジェクトを追加
    setState(newArray); //stateを更新
    setNewState(props); //作成ボタン押下後初期化
  };
  //console.log(newState);
  useEffect(() => {
    console.log(state);
    //console.log(newId);
  }, [state]);

  // データ
  const rows = [{ id: 100 }];
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

  return (
    <>
      <h1>給与一覧</h1>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
      <Box sx={{ width: 500, textAlign: "left" }}>
        <h3>勤務日</h3>
        <TextField
          required
          name="workday"
          variant="outlined"
          type="date"
          value={workday}
          onChange={onChangeState}
        />
        <h3>案件名</h3>
        <TextField
          required
          name="mattername"
          label="必須"
          variant="outlined"
          fullWidth
          value={mattername}
          onChange={onChangeState}
        />
        <h3>勤務地</h3>
        <TextField
          required
          name="place"
          label="必須"
          variant="outlined"
          fullWidth
          value={place}
          onChange={onChangeState}
        />
        <h3>支払予定日</h3>
        <TextField
          required
          name="expectDate"
          variant="outlined"
          type="date"
          value={expectDate}
          onChange={onChangeState}
        />
        <h3>合計支給額</h3>
        <TextField
          required
          name="sumprice"
          label="必須"
          variant="outlined"
          type="number"
          value={sumprice}
          onChange={onChangeState}
        />
        <h3>備考</h3>
        <TextField
          name="memo"
          multiline
          maxRows={4}
          variant="outlined"
          fullWidth
          value={memo}
          onChange={onChangeState}
        />
        <Box sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={onClickAdd}
          >
            作成
          </Button>
        </Box>
      </Box>
    </>
  );
};
//初期値
Salary.defaultProps = {
  ID: 0,
  workday: "",
  mattername: "",
  place: "",
  expectDate: "",
  sumprice: 0,
  status: 1,
  updateTime: createDate(),
  memo: ""
};
