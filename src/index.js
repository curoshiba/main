import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { store } from "./store/index";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./generalColor";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
