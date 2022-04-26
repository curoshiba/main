import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../generalColor";
import "./header.css";
import { Button, ButtonGroup, Box } from "@mui/material";

const titleButton = {
  ml: "50px",
  mr: "auto",
  cursor: "pointer"
};

const child = {
  p: "5px"
};

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Box sx={titleButton}>
          <Button href="main">
            <h1
              style={{
                color: "aliceblue",
                "&:hover": {
                  opacity: 0.5
                }
              }}
            >
              title
            </h1>
          </Button>
        </Box>
        <nav>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
            color="text"
            className="menu"
          >
            <Button href="manual" style={child}>
              マニュアル
            </Button>
            <Button href="" style={child}>
              案件表
            </Button>
            <Button href="" style={child}>
              時間割登録
            </Button>
            <Button href="shiftlist" style={child}>
              シフト提出
            </Button>
            <Button href="" style={child}>
              注意事項
            </Button>
            <Button href="" style={child}>
              シフト一覧
            </Button>
            <Button href="salary" style={child}>
              給与一覧
            </Button>
            <Button href="" style={child}>
              アンケート
            </Button>
          </ButtonGroup>
        </nav>
        <Box className="logout">
          <Button href="/" color="secondary" variant="contained">
            logout
          </Button>
        </Box>
      </header>
    </ThemeProvider>
  );
};
