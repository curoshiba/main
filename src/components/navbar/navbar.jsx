import React from "react";
import { GrLogout } from "react-icons/gr";
import "./nav.css";

export const Hed = () => {
  return (
    <header className="Hed">
      <h1 className="title">Naxion</h1>
      <div className="Logout">
        <label>ログアウト</label>
        <GrLogout className />
      </div>
    </header>
  );
};
