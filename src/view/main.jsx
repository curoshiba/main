import React from "react";
import { Header } from "../components/header/header";
import { Container, CssBaseline, Box, Typography } from "@mui/material";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

//main画面のcssプロパティ
const mainStyle = {
  textAlign: "center"
};

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export const Main = (props) => {
  const { iconsize } = props;
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>処理選択</h1>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexwrap: "wrap",
            justifycontent: "center",
            aligncontent: "space-around",
            alignItems: "center"
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
          <AccessAlarmsRoundedIcon />
          <BackupRoundedIcon />
          <InfoRoundedIcon />
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
