import React, { useState } from "react";
import { Alert, Container, TextField, Box, Button } from "@mui/material";
import createDate from "../assets/createDate";
import { Header } from "../components/header/header";
import { useSelector, useDispatch } from "react-redux";

export const AddSalary = (props) => {
  const addState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newState, setNewState] = useState(props); //state配列へ追加するためのオブジェクトを管理するステイト
  const { workday, mattername, place, expectDate, sumprice, memo } = newState; //newStateを分割代入
  const [error, setError] = useState({}); //入力チェックメッセージ
  const [createFlag, setCreateFlag] = useState({ result: true }); //作成ボタン非活性フラグ

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
   * 概要：作成ボタンクリック後に入力データを配列でreducerへ渡す
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
   * 7.dispatch実行
   * 8.newstateオブジェクトを初期化
   * 9.作成ボタン非活性フラグを初期化
   * </detail>
   * 作成日：2022/03/30
   * 作成者：渡邉
   ********************************************************/
  const onClickAdd = () => {
    //ID発行
    const lastid = addState.length === 0 ? 1 : addState.slice(-1)[0].id + 1; //項番1
    const concaten = sumprice + "円";
    const addID = { ...newState, id: lastid };
    const updateymd = { ...addID, updateTime: createDate().full };
    const adden = { ...updateymd, sumprice: concaten };
    const newArray = [...addState, adden];
    dispatch({ type: "ADD", payload: newArray });
    setNewState(props);
    setCreateFlag({ result: true });
  };

  /********************************************************
   * 概要：テキストエリアの入力チェック
   * 関数名：checkInput（親関数：handleBlur）
   * 引数：配列オブジェクト
   * 戻り値：オブジェクト
   * <detail>
   * 1.チェックした結果（初期値：true）、箇所を格納するオブジェクトを定義
   * 2.勤務日をチェック
   * 3.案件名をチェック
   * 4.勤務地をチェック
   * 5.支払予定日をチェック
   * 6.合計支給額をチェック
   * 7.上記全てで問題無ければ初期値を返す
   * </detai>
   * 作成日：2022/04/04
   * 作成者：渡邉
   ********************************************************/
  const checkInput = (inputState) => {
    let allResult = { result: true, point: "" };
    if (inputState.workday === "") {
      allResult.result = false;
      allResult.point = "勤務日";
      return allResult;
    } else if (inputState.mattername === "") {
      allResult.result = false;
      allResult.point.point = "案件名";
      return allResult;
    } else if (inputState.place === "") {
      allResult.result = false;
      allResult.point.point = "勤務地";
      return allResult;
    } else if (inputState.expectDate === "") {
      allResult.result = false;
      allResult.point.point = "支払予定日";
      return allResult;
    } else if (inputState.sumprice === "") {
      allResult.result = false;
      allResult.point.point = "合計支給額";
      return allResult;
    } else {
      return allResult;
    }
  };

  /********************************************************
   * 概要：テキストエリアフォーカス後の入力チェック
   * 関数名：handleBlur
   * 引数：eventオブジェクト
   * 戻り値：なし
   * <detail>
   * 1.eventオブジェクトのvalueを空白を削除して変数へ格納
   * 2.ventオブジェクトのnameを変数へ格納
   * 3.eventオブジェクトの値が空の場合、
   *  errorのnameプロパティへ項番2のnameを格納
   * 4.eventオブジェクトの値が空以外の場合、errorを初期化
   * 5.項番4の後に入力チェックを行い正しい場合は作成ボタンのフラグを変更する
   * </detai>
   * 作成日：2022/04/04
   * 作成者：渡邉
   ********************************************************/
  const handleBlur = (event) => {
    const target = event.target;
    const value = target.value.trim();
    const name = target.name;

    if (value === "") {
      setError({ ...error, [name]: "入力必須項目です" });
    } else {
      setError({ ...error, [name]: "" });
      const check = checkInput(newState);
      if (check.result) {
        setCreateFlag({ result: false });
      }
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Box sx={{ width: 500, textAlign: "left" }} noValidate>
          <div>
            <h3>勤務日</h3>
            <TextField
              required
              name="workday"
              variant="outlined"
              type="date"
              value={workday}
              onChange={onChangeState}
              onBlur={handleBlur}
            />
            {error.workday && <Alert severity="error">{error.workday}</Alert>}
          </div>
          <div>
            <h3>案件名</h3>
            <TextField
              required
              name="mattername"
              label="必須"
              variant="outlined"
              fullWidth
              value={mattername}
              onChange={onChangeState}
              onBlur={handleBlur}
            />
            {error.mattername && (
              <Alert severity="error">{error.mattername}</Alert>
            )}
          </div>
          <div>
            <h3>勤務地</h3>
            <TextField
              required
              name="place"
              label="必須"
              variant="outlined"
              fullWidth
              value={place}
              onChange={onChangeState}
              onBlur={handleBlur}
            />
            {error.place && <Alert severity="error">{error.place}</Alert>}
          </div>
          <div>
            <h3>支払予定日</h3>
            <TextField
              required
              name="expectDate"
              variant="outlined"
              type="date"
              value={expectDate}
              onChange={onChangeState}
              onBlur={handleBlur}
            />
            {error.expectDate && (
              <Alert severity="error">{error.expectDate}</Alert>
            )}
          </div>
          <div>
            <h3>合計支給額</h3>
            <TextField
              name="sumprice"
              variant="outlined"
              type="number"
              value={sumprice}
              placeholder="数値を入力してください"
              onChange={onChangeState}
              onBlur={handleBlur}
            />
            {error.sumprice && <Alert severity="error">{error.sumprice}</Alert>}
          </div>
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
              disabled={createFlag.result}
            >
              作成
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
//newstateオブジェクトの期値
AddSalary.defaultProps = {
  id: 0,
  workday: "",
  mattername: "",
  place: "",
  expectDate: "",
  sumprice: "",
  status: "未振込",
  updateTime: "",
  memo: ""
};
