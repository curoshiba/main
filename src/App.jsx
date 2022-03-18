import { Main } from "./components/main/main";

import { Hed } from "./components/navbar/navbar.jsx";
import React from "react";

const App = () => {
  const IconSize = 120;
  return (
    <>
      <Hed /> {/*ヘッダ―*/}
      <div className="App">
        <Main iconsize={IconSize} /> {/*メイン画面*/}
      </div>
    </>
  );
};

export default App;
