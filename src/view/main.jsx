import React from "react";
import { Header } from "../components/header/header";
import { Container, CssBaseline, Box, Typography } from "@mui/material";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import CurrencyYenRoundedIcon from "@mui/icons-material/CurrencyYenRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

//main画面のcssプロパティ
const mainStyle = {
  textAlign: "center"
};

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 5
};

export const Main = (props) => {
  const { iconsize } = props;
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>処理選択</h1>
      <Container maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexwrap: "wrap",
            justifycontent: "center",
            alignItems: "center",
            backgroundColor: "#e6e6e6",
            width: 200
          }}
        >
          <Box sx={iconStyle}>
            <LibraryBooksRoundedIcon fontSize="large" />
            <Typography>マニュアル</Typography>
          </Box>

          <Box sx={iconStyle}>
            <FeedRoundedIcon fontSize="large" />
            <Typography>案件表</Typography>
          </Box>
          <Box sx={iconStyle}>
            <AccessAlarmsRoundedIcon fontSize="large" />
            <Typography>時間割登録</Typography>
          </Box>
          <Box sx={iconStyle}>
            <BackupRoundedIcon fontSize="large" />
            <Typography>シフト提出</Typography>
          </Box>
          <Box sx={iconStyle}>
            <InfoRoundedIcon fontSize="large" />
            <Typography> 注意事項</Typography>
          </Box>
          <Box sx={iconStyle}>
            <FormatListBulletedRoundedIcon fontSize="large" />
            <Typography>シフト一覧</Typography>
          </Box>
          <Box sx={iconStyle}>
            <CurrencyYenRoundedIcon fontSize="large" />
            <Typography>給与一覧</Typography>
          </Box>
          <Box sx={iconStyle}>
            <QuestionAnswerRoundedIcon fontSize="large" />
            <Typography>アンケート</Typography>
          </Box>
        </Box>
        <div className="Notice" style={mainStyle}>
          <h2>お知らせ</h2>
          <textarea className="NoticeArea" disabled>
            ★お知らせの内容です
          </textarea>
        </div>
      </Container>
    </>
  );
};
