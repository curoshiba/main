import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { store } from "./store/index";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
