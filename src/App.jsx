import React from "react";
import { Hed } from "./components/navbar/navbar.jsx";
import { Main } from "./view/main";
import { Salary } from "./view/salary";

const App = () => {
  const IconSize = 120;

  return (
    <>
      <Hed MenuName="TOP" /> {/*ヘッダ―*/}
      <div className="App">
        <Salary /> {/*メイン画面*/}
      </div>
    </>
  );
};

export default App;
