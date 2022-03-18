import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import { TopButton } from "../../assets/topbutton";
import { theme } from "../../generalColor";

export const Hed = () => {
  console.log(TopButton);

  //上のprimaryが効いてない

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div">
                Naxion
              </Typography>
              <TopButton />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};
