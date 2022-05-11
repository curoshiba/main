import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

/********************************************************
 * 概要：CSV出力のオプションを設定
 * コンポーネント名：Toolbar
 * 引数：なし
 * 戻り値：なし
 * <detail>
 * ファイル名：給与一覧_yyyymmdd
 * 文字コード：UTF-8（デフォルトはSJIS?）
 * </detail>
 * 作成日：2022/04/01
 * 作成者：渡邉
 ********************************************************/
export const Toolbar = () => {
  const ymd = new Date();
  const yyyy = String(ymd.getFullYear());
  const m = String(ymd.getMonth() + 1);
  const mm = m.length === 1 ? "0" + m : m;
  const d = String(ymd.getDate());
  const dd = d.length === 1 ? "0" + d : d;
  const ymdString = yyyy + mm + dd;
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        csvOptions={{
          fileName: "給与一覧_" + ymdString,
          utf8WithBom: true
        }}
        printOptions={{ disableToolbarButton: true }}
      />
    </GridToolbarContainer>
  );
};
