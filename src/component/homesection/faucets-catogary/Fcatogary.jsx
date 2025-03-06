import React from "react";
import "./Fcatogary.css";
import icon1 from "../../../assets/faucets_icon/faucet.png";
import icon2 from "../../../assets/faucets_icon/faucet1.png";
import icon3 from "../../../assets/faucets_icon/faucet2.png";
import icon4 from "../../../assets/faucets_icon/faucet3.png";
import icon5 from "../../../assets/faucets_icon/faucet4.png";
import icon6 from "../../../assets/faucets_icon/tap.png";
const Fcatogary = () => {
  return (
    <>
      <div className="icon-main-container">
        <h3>FAUCET-SERIES</h3>
        <div className="icon-container">
          <div className="icon-container-div">
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon1} alt="" />
              </div>
              <div className="underline1"></div>
              <p>FLT</p>
            </div>
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon2} alt="" />
              </div>
              <div className="underline1"></div>
              <p>CANIS</p>
            </div>
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon3} alt="" />
              </div>
              <div className="underline1"></div>
              <p>IDEAL</p>
            </div>
          </div>

          <div div className="icon-container-div">
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon4} alt="" />
              </div>
              <div className="underline1"></div>
              <p>AURIGA</p>
            </div>
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon5} alt="" />
              </div>
              <div className="underline1"></div>
              <p> SCORPIUS</p>
            </div>
            <div className="f-info">
              <div className="faucet_icon">
                {" "}
                <img src={icon6} alt="" />
              </div>
              <div className="underline1"></div>
              <p>DUET</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fcatogary;
