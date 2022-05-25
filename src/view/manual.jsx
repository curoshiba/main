import { Container, CssBaseline, Box } from "@mui/material/";
import Image from "../assets/rice-terraces-gdd8d064db_1920.jpg";
import { Header } from "../components/header/header";

const styles = {
  Container: {
    backgroundImage: `url(${Image})`
  }
};

export const Manual = () => {
  return (
    <>
      <Header />
      <h1>マニュアル</h1>
      <Box style={styles.Container}>
        <CssBaseline />
      </Box>
    </>
  );
};
