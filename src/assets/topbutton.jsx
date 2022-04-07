import * as React from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";

export const TopButton = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button color="secondary" variant="outlined" startIcon={<HomeIcon />}>
          Top
        </Button>
      </Stack>
    </>
  );
};
