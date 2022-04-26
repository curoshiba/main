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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//main画面のcssプロパティ
const mainStyle = {
  textAlign: "center"
};

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const ItemButtonStyle = {
  display: "flex",
  alignItems: "center"
};

export const Main = () => {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>処理選択</h1>
      <Container maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            maxWidth: 1000,
            Height: 600
          }}
        >
          <List
            sx={{
              display: "flex",
              flexwrap: "wrap",
              justifycontent: "center",
              alignItems: "center"
            }}
          >
            <ListItem style={{ display: "block" }}>
              <ListItemButton
                style={ItemButtonStyle}
                href="manual"
                component="a"
              >
                <ListItemIcon sx={iconStyle}>
                  <LibraryBooksRoundedIcon fontSize="large" />
                  <ListItemText primary="マニュアル" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} component="a">
                <ListItemIcon sx={iconStyle}>
                  <FeedRoundedIcon fontSize="large" />
                  <ListItemText primary="案件表" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} component="a">
                <ListItemIcon sx={iconStyle}>
                  <AccessAlarmsRoundedIcon fontSize="large" />
                  <ListItemText primary="時間割登録" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={ItemButtonStyle}
                href="shiftlist"
                component="a"
              >
                <ListItemIcon sx={iconStyle}>
                  <BackupRoundedIcon fontSize="large" />
                  <ListItemText primary="シフト提出" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} component="a">
                <ListItemIcon sx={iconStyle}>
                  <InfoRoundedIcon fontSize="large" />
                  <ListItemText primary="注意事項" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} component="a">
                <ListItemIcon sx={iconStyle}>
                  <FormatListBulletedRoundedIcon fontSize="large" />
                  <ListItemText primary="シフト一覧" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} href="salary" component="a">
                <ListItemIcon sx={iconStyle}>
                  <CurrencyYenRoundedIcon fontSize="large" />
                  <ListItemText primary="給与一覧" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={ItemButtonStyle} component="a">
                <ListItemIcon sx={iconStyle}>
                  <QuestionAnswerRoundedIcon fontSize="large" />
                  <ListItemText primary="アンケート" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
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
