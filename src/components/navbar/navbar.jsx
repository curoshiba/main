import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import { TopButton } from "../../assets/topbutton";
import { theme } from "../../generalColor";
import "./navbar.css";

export const Hed = () => {
  //上のprimaryが効いてない

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="primary"
          enableColorOnDark
          className="appBar"
        >
          <Toolbar>
            <div className="menuText">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" className="naxionText">
                title
              </Typography>
            </div>
            <TopButton className="topButton" />
            <Button color="inherit" className="logoutButton">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
