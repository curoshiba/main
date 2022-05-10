import React from "react";
import { Header } from "../components/header/header";
import { Container, CssBaseline, Box } from "@mui/material";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import CurrencyYenRoundedIcon from "@mui/icons-material/CurrencyYenRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

//main画面のcssプロパティ
const mainStyle = {
  textAlign: "center",
  marginTop: "50px"
};

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "120px"
};

export const Main = () => {
  return (
    <>
      <Header />
      <h1 style={mainStyle}>処理選択</h1>
      <Container maxWidth="md">
        <CssBaseline />

        <List
          sx={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            display: "flex",
            justifycontent: "center",
            alignItems: "center"
          }}
        >
          <ListItem>
            <ListItemButton href="manual" component="a" sx={iconStyle}>
              <LibraryBooksRoundedIcon fontSize="large" />
              <ListItemText primary="マニュアル" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/" component="a" sx={iconStyle}>
              <FeedRoundedIcon fontSize="large" />
              <ListItemText primary="案件表" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/" component="a" sx={iconStyle}>
              <AccessAlarmsRoundedIcon fontSize="large" />
              <ListItemText primary="時間割登録" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="shiftlist" component="a" sx={iconStyle}>
              <BackupRoundedIcon fontSize="large" />
              <ListItemText primary="シフト提出" />
            </ListItemButton>
          </ListItem>
        </List>
        <List
          sx={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            display: "flex",
            justifycontent: "center",
            alignItems: "center"
          }}
        >
          <ListItem>
            <ListItemButton href="/" component="a" sx={iconStyle}>
              <InfoRoundedIcon fontSize="large" />
              <ListItemText primary="注意事項" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/" component="a" sx={iconStyle}>
              <FormatListBulletedRoundedIcon fontSize="large" />
              <ListItemText primary="シフト一覧" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="salary" component="a" sx={iconStyle}>
              <CurrencyYenRoundedIcon fontSize="large" />
              <ListItemText primary="給与一覧" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/" component="a" sx={iconStyle}>
              <QuestionAnswerRoundedIcon fontSize="large" />
              <ListItemText primary="アンケート" />
            </ListItemButton>
          </ListItem>
        </List>

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
