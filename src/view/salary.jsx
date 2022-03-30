import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box, Button } from "@material-ui/core";
import createDate from "../assets/createDate";

export const Salary = (props) => {
  const [state, setState] = useState([]); //テーブルへ表示させる配列
  const [newState, setNewState] = useState(props); //state配列へ追加するためのオブジェクトを管理するステイト
  const { workday, mattername, place, expectDate, sumprice, memo } = newState; //newStateを分割代入
  /********************************************************
   * 概要：テキストエリア入力時newStateオブジェクトを更新する
   * 関数名：onChangeState
   * 引数：eventオブジェクト
   * 戻り値：なし
   * <detail>
   * 1.eventオブジェクトからイベント発生元の値を取得する変数へ格納
   * 2.eventオブジェクトからイベント発生元のname属性を取得
   * 3.newStateオブジェクトをコピーし項番2のキーの値を項番1で更新する
   * </detail>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onChangeState = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewState({ ...newState, [name]: value });
  };

  /********************************************************
   * 概要：作成ボタンクリック後に入力データをテーブルへ追加
   * 関数名：onClickadd
   * 引数：なし
   * 戻り値：なし
   * <detail>
   * 1.state配列末尾の要素のIDを取得し1増加させた値を格納
   * 2.newStateオブジェクトの合計支払額に"円"を付加する
   * 3.ボタン押下時のnewstateオブジェクトをコピーし
   *    IDのみを項番1の値で更新し新たなオブジェクトへ格納
   * 4.ボタン押下時の日時を取得し項番3の配列をコピーし
   *    更新日時のみ更新し新たなオブジェクトへ格納
   * 5.項番4のオブジェクトをコピーし合計支払額のみ更新し新たなオブジェクトへ格納
   * 6.state配列をコピーし項番5のオブジェクトを追加し新たな配列へ格納
   * 7.state配列を項番5の配列で更新する
   * 8.newstateオブジェクトを初期化
   * </detail>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onClickAdd = () => {
    //ID発行の関数
    const lastid = state.length === 0 ? 1 : state.slice(-1)[0].id + 1; //項番1
    const concaten = sumprice + "円";
    const addID = { ...newState, id: lastid };
    const updateymd = { ...addID, updateTime: createDate() };
    const adden = { ...updateymd, sumprice: concaten };
    const newArray = [...state, adden];
    setState(newArray);
    setNewState(props);
  };

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
   * 2.
   * 3.項番2で「true」が返って来た場合、state配列を空に初期化
   * </detai>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onClickdelete = (findid, e) => {
    const stateIndex = state.findIndex((value) => {
      return value.id === findid; //指定のidのインデックスを検索
    }); //対象レコードのインデックスを割り出す

    console.log(stateIndex);

    const delstate = [...state];
    const delnewstate = delstate.splice(1, 1);
    console.log(delstate);
    setState(delnewstate);
  };

  useEffect(() => {
    //console.log(state);
  }, [state]);

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
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => onClickdelete(params.id, e)}
        >
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
        <DataGrid rows={state} columns={columns} />
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
          name="sumprice"
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
        <Box sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickAllDelete}
          >
            一括削除
          </Button>
        </Box>
      </Box>
    </>
  );
};
//newstateオブジェクトの期値
Salary.defaultProps = {
  id: 0,
  workday: "",
  mattername: "",
  place: "",
  expectDate: "",
  sumprice: "",
  status: 1,
  updateTime: "",
  memo: ""
};
