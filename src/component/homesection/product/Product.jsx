import { motion } from "framer-motion";
import imageSrc from "../../../assets/shai.png";
import imageSrc2 from "../../../assets/washbasin.jpg";
import "./Product.css";

const Product = () => {
  return (
    <>
      {/* First Product Section - Animation triggers when in view */}
      <motion.div 
        className="shower-container"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers when 30% of the section is visible
      >
        <motion.div 
          className="shower"
          whileHover={{ scale: 1.05 }}
        >
          <img src={imageSrc} alt="" />
        </motion.div>

        <motion.div 
          className="shower-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>
            At <span>Aquabenz</span>
          </h3>
          <p>
            Aquabenz products are made using the finest quality materials,
            continuously updated finest production technologies and cautious
            electroplating and finishing craftsmanship. The relentless focus on
            attention to detail during the manufacturing process ensures that
            our designs are presented to our customers accurate to every
            fraction, smooth like silk, and shiny like a mirror.
          </p>
        </motion.div>
      </motion.div>

      {/* Second Product Section - Animation triggers when in view */}
      <motion.div 
        className="shower-container second"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="shower second_img"
          whileHover={{ scale: 1.05 }}
        >
          <img src={imageSrc2} alt="" />
        </motion.div>

        <motion.div 
          className="shower-text second-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>
            At <span>Aquabenz</span>
          </h3>
          <p>
            Aquabenz products are made using the finest quality materials,
            continuously updated finest production technologies and cautious
            electroplating and finishing craftsmanship. The relentless focus on
            attention to detail during the manufacturing process ensures that
            our designs are presented to our customers accurate to every
            fraction, smooth like silk, and shiny like a mirror.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Product;
