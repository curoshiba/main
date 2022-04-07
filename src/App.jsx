import React from "react";
import { Header } from "./components/header/header.jsx";
import { Main } from "./view/main";
import { Salary } from "./view/salary";
import { ShiftList } from "./view/shiftList";
import { LogIn } from "./view/login";
import { CreateSalary } from "./view/createSalary";
import { SignUp } from "./view/signup";
import { Manual } from "./view/manual";

const App = () => {
  const IconSize = 120;

  return (
    <>
      <Header /> {/*ヘッダ―*/}
      <div className="App">
        <Manual /> {/*メイン画面*/}
      </div>
    </>
  );
};

export default App;
