import { Button, ButtonGroup, Box } from "@mui/material";

const titleButton = {
  ml: "50px",
  mr: "auto",
  cursor: "pointer"
};

const child = {
  p: "5px"
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#0d2280"
};

export const Header = () => {
  return (
    <header style={headerStyle}>
      <Box sx={titleButton}>
        <Button href="main">
          <h1 style={{ color: "aliceblue" }}>title</h1>
        </Button>
      </Box>
      <nav>
        <ButtonGroup
          variant="text"
          size="large"
          color="text"
          disableElevation="true"
          style={{ marginRight: "50px", marginLeft: "auto" }}
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
      <Box style={{ marginRight: "20px" }}>
        <Button href="/" color="secondary" variant="contained">
          logout
        </Button>
      </Box>
    </header>
  );
};
