import React from "react";

import { Hed } from "./components/navbar/navbar.jsx";
import { Main } from "./components/main/main";

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
