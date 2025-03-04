import imageSrc from "../../../assets/shai.png";
import imageSrc2 from "../../../assets/washbasin.jpg";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="shower-container">
        <div className="shower">
          <img src={imageSrc} alt="" />
        </div>

        <div className="shower-text">
          <h3>
            At <span>Aquabenz</span>
          </h3>
          <p>
            Aquabenz products are made using the finest quality materials,
            continuously updated finest production technologies and cautious
            electroplating and finishing craftsmanship. the relentless focus on
            attention to detail during the manufacturing process ensures that
            our designs are presented to our customers accurate to every
            fraction, smooth like silk and shiny like a mirror.
          </p>
        </div>
      </div>

      <div className="shower-container second">
        <div className="shower second_img">
          <img src={imageSrc2} alt="" />
        </div>

        <div className="shower-text second-text">
          <h3>
            At <span>Aquabenz</span>
          </h3>
          <p>
            Aquabenz products are made using the finest quality materials,
            continuously updated finest production technologies and cautious
            electroplating and finishing craftsmanship. the relentless focus on
            attention to detail during the manufacturing process ensures that
            our designs are presented to our customers accurate to every
            fraction, smooth like silk and shiny like a mirror.
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
