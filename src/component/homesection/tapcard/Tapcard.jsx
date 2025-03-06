import React from "react";
import "./Tapcard.css";
import Card from "../Card/Card";
import i1 from "../../../assets/t1.png";
import i2 from "../../../assets/FLT/f2.png";
import i3 from "../../../assets/FLT/f3.png";

const tapinfo = [
  { img: i1, title: "FLT-1103", name: "Angle Cock with Flange" },
  { img: i2, title: "FLT-1104", name: "Stop Cock with Flange" },
  { img: i3, title: "FLT-1105", name: "Bibb Cock with Flange" },
];
const Tapcard = (props) => {
  return (
    <>
      <div className="tapcard">
        <h3>BEST SELLER</h3>
        <p className="tap-text">
          Discover our top-selling faucets, designed for durability, style, and
          flawless functionality. Made from high-quality brass, these faucets
          offer exceptional resistance to corrosion and hard-water buildup,
          ensuring long-lasting performance.{" "}
        </p>
        
        <div className="tap">
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className=" taps lastcard">
            <Card img={i3} title={tapinfo[2].title} name={tapinfo[2].name} />
          </div>
        </div>
        <div className="tap">
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className=" taps lastcard">
            <Card img={i3} title={tapinfo[2].title} name={tapinfo[2].name} />
          </div>
        </div>
        <div className="tap">
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className="taps">
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name} />
          </div>
          <div className=" taps lastcard">
            <Card img={i3} title={tapinfo[2].title} name={tapinfo[2].name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tapcard;
