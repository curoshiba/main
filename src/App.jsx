import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Hed } from "./components/navbar/navbar.jsx";
import { Main } from "./view/main";

const App = () => {
  const IconSize = 120;
  return (
    <>
      <Hed MenuName="TOP" /> {/*ヘッダ―*/}
      <div className="App">
        <Main iconsize={IconSize} /> {/*メイン画面*/}
      </div>
    </>
  );
};

export default App;
