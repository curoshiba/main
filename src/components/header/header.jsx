import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../generalColor";
import "./header.css";
import { Button, ButtonGroup } from "@mui/material";

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <h1 className="title" href="/main">
          title
        </h1>
        <nav>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
            color="text"
            className="menu"
          >
            <Button href="manual" className="child">
              マニュアル
            </Button>
            <Button href="" className="child">
              案件表
            </Button>
            <Button href="" className="child">
              時間割登録
            </Button>
            <Button href="shiftlist" className="child">
              シフト提出
            </Button>
            <Button href="" className="child">
              注意事項
            </Button>
            <Button href="" className="child">
              シフト一覧
            </Button>
            <Button href="salary" lassName="child">
              給与一覧
            </Button>
            <Button href="" className="child">
              アンケート
            </Button>
          </ButtonGroup>
        </nav>
        <Button
          href="/"
          color="secondary"
          variant="contained"
          className="logout"
        >
          logout
        </Button>
      </header>
    </ThemeProvider>
  );
};
