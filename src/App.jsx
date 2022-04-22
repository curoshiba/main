import React from "react";
import { Header } from "./components/header/header.jsx";
import { Main } from "./view/main";
import { Salary } from "./view/salary";
import { ShiftList } from "./view/shiftList";
import { LogIn } from "./view/login";
import { SignUp } from "./view/signup";
import { Manual } from "./view/manual";
import { AddSalary } from "./view/addSalary";
import { Routes, Route, Redirect } from "react-router-dom";

const NotFound = () => {
  return <h2>Not Found Page</h2>;
};

const App = () => {
  const IconSize = 120;
  const authenticated = true;

  return (
    //ルーティング設定
    //認証結果によってログインページへリダイレクト
    <Routes>
      <Route exact path="/" element={<LogIn />} />
      <Route
        path="/main"
        element={authenticated ? <Main /> : <Redirect to="/" />}
      />
      <Route
        path="/salary"
        element={authenticated ? <Salary /> : <Redirect to="/" />}
      />
      <Route
        path="/shiftlist"
        element={authenticated ? <ShiftList /> : <Redirect to="/" />}
      />
      <Route
        path="/signup"
        element={authenticated ? <SignUp /> : <Redirect to="/" />}
      />
      <Route
        path="/manual"
        element={authenticated ? <Manual /> : <Redirect to="/" />}
      />
      <Route
        path="/manual"
        element={authenticated ? <Manual /> : <Redirect to="/" />}
      />
      <Route
        path="/addsalary"
        element={authenticated ? <AddSalary /> : <Redirect to="/" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
