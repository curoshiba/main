import React from "react";
import { Hed } from "./components/navbar/navbar.jsx";
import { Main } from "./view/main";
import { Salary } from "./view/salary";
import { ShiftList } from "./view/shiftList";
import { LogIn } from "./view/login";
import { CreateSalary } from "./view/createSalary";
import { SignUp } from "./view/signup";

const App = () => {
  const IconSize = 120;

  return (
    <>
      <Hed MenuName="TOP" /> {/*ヘッダ―*/}
      <div className="App">
        <LogIn /> {/*メイン画面*/}
      </div>
    </>
  );
};

export default App;
