import React from "react";
import Showercard from "../showercard/showercard";
import "./shower.css";
const Shower = () => {
  return (
    <div className="shower-main-container">
      <div className="showercard-container">
        <Showercard />
        <Showercard />
      </div>
      <div className="showercard-container">
        <Showercard />
        <Showercard />
      </div>
      <div className="showercard-container">
        <Showercard />
        <Showercard />
      </div>
    </div>
  );
};

export default Shower;
