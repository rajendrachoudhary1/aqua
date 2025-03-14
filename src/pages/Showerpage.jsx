import React from "react";
import Shower from "../component/showersection/shower/shower";
import Showertitle from "../component/showersection/showertitle/showertitle";
import Showersidebar from "../component/showersection/showersidebar/showersidebar";
const Showerpage = () => {
  return (
    <div>
      <Showertitle />
      <div style={{ display: "flex" }}>
        <Showersidebar />
        <Shower />
      </div>
    </div>
  );
};

export default Showerpage;
