import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../generalColor";
import "./header.css";
import { Button, ButtonGroup } from "@mui/material";

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <h1 className="title">title</h1>
        <nav>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
            color="text"
            className="menu"
          >
            <Button className="child">マニュアル</Button>
            <Button className="child">案件表</Button>
            <Button className="child">時間割登録</Button>
            <Button className="child">シフト提出</Button>
            <Button className="child">注意事項</Button>
            <Button className="child">シフト一覧</Button>
            <Button className="child">給与一覧</Button>
            <Button className="child">アンケート</Button>
          </ButtonGroup>
        </nav>
        <Button color="secondary" variant="contained" className="logout">
          Login
        </Button>
      </header>
    </ThemeProvider>
  );
};
