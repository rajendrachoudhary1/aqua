 
import imageSrc from "../../../assets/shai.png"; 
import "./Product.css";
 
const Product = () => {
  return(
    <>
    <div className="shower-container">
      <div className="shower">
      <img src={imageSrc} alt="" />
    </div>

    <div className="shower-text">
      <h3>At <span>Aquabenz</span> we are artisans who stay on leading edge of innovation and design.</h3>
      <p> Aquabenz products are made using the finest quality materials, continuously updated finest 
production technologies and cautious electroplating and finishing craftsmanship. the relentless 
focus on attention to detail during the manufacturing process ensures that our designs are presented 
to our customers accurate to every fraction, smooth like silk and shiny like a mirror.</p>
    </div>

    </div>
     
    
    </>
  )
};

export default Product;
