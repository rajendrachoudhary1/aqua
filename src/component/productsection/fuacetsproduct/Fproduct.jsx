import img from "../../../assets/background/backgrd.png";
import "./Fproduct.css";
const Fproduct = () => {
  return (
    <div className="fproductContainer">
      <div className="fproduct_img">
        <img src={img} alt="" />
      </div>
      <div className="fproductTitle">
        {/* <h1>FAUCETS COLLECTION</h1> */}
        <div className="fproduct-sub">
          <a href="">HOME</a>
          <span> | </span>
          <p>Product</p>
        </div>
      </div>
    </div>
  );
};

export default Fproduct;
