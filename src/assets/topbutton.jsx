import * as React from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import { theme } from "../generalColor";
import { ThemeProvider } from "@mui/material/styles";

export const TopButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2}>
          <Button color="secondary" variant="outlined" startIcon={<HomeIcon />}>
            Top
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
};
