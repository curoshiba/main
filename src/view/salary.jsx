import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@material-ui/core";

import { Toolbar } from "../assets/toolbar";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export const Salary = (props) => {
  const [state, setState] = useState([]); //テーブルへ表示させる配列

  /********************************************************
   * 概要：テーブルを一括で削除（stateを空配列）
   * 関数名：onClickAllDelete
   * 引数：なし
   * 戻り値：なし
   * <detail>
   * 1.state配列の要素数を取得
   * 2.項番1の値を含めて削除確認画面を表示
   * 3.項番2で「true」が返って来た場合、state配列を空に初期化
   * </detai>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onClickAllDelete = () => {
    const cnt = state.length;
    const yn = window.confirm(cnt + "件全て削除してよろしいですか？");
    const result = yn ? setState([]) : state;
    return result;
  };

  /********************************************************
   * 概要：削除ボタンクリック後に対象レコードを削除
   * 関数名：onClickdelete
   * 引数：なし
   * 戻り値：なし
   * <detail>
   * 1.クリックされた削除ボタンのセルのidのインデックスを検索し変数へ格納
   * 2.state配列をコピーし新たな配列へ格納
   * 3.項番1のインデックスの要素を削除
   * 4.削除後の配列でstateを更新
   * </detai>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onClickdelete = (findid) => {
    //指定のidのインデックスを検索
    const stateIndex = state.findIndex((value) => {
      return value.id === findid;
    });
    const delstate = [...state];
    //対象の要素を削除
    delstate.splice(stateIndex, 1);
    //削除後のdelstateで更新
    //No row with id #1 found　←エラー出るためseTimeoutを使用
    setTimeout(() => {
      setState(delstate);
    });
  };

  /********************************************************
   * 概要：編集されたセルの値をstateへ反映し保持する
   * 関数名：cellChange
   * 引数：eventオブジェクト
   * 戻り値：なし
   * <detail>
   * 1.cell編集終了後のstate配列をコピーし新たな配列へ格納
   * 2.編集されたセルのidから対象のインデックスを取得
   * 3.項番1の配列を項番2で取得したインデックスの対象オブジェクト要素を編集後の値で更新する
   * 4.state配列を項番1の配列で更新する
   * </detai>
   * 作成日：2022/03/31
   * 作成者：渡邉
   ********************************************************/
  const cellChange = (chValue) => {
    const changeState = [...state];
    const changeIndex = state.findIndex((v) => v.id === chValue.id);
    changeState[changeIndex][chValue.field] = chValue.value;
    setState(changeState);
  };

  /********************************************************
   * <summary>
   * テーブルのカラム設定
   * </summary>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
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
      type: "singleSelect",
      sortable: true,
      width: 150,
      editable: true,
      valueOptions: ["振込済", "未振込"]
    },
    // 削除ボタン
    {
      field: "deleteBtn",
      headerName: "削除",
      sortable: false,
      width: 50,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <DeleteIcon
          variant="contained"
          color="inherit"
          onClick={() => onClickdelete(params.id)}
        />
      )
    },
    {
      field: "updateTime",
      headerName: "更新日時",
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
      <Box sx={{ mt: 5, margin: 5, display: "flex" }}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={onClickAllDelete}
        >
          登録
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onClickAllDelete}
          disabled={state.length === 0}
        >
          一括削除
        </Button>
      </Box>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={state}
          columns={columns}
          autoHeight
          onCellEditCommit={cellChange}
          components={{
            Toolbar: Toolbar
          }}
        />
      </div>
    </>
  );
};
