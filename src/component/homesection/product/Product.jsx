import { motion } from "framer-motion";
import imageSrc from "../../../assets/shai.png";
import imageSrc2 from "../../../assets/washbasin.jpg";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="shower-container"  >
        <div className="shower">
          <img src={imageSrc} alt="" />
        </div>

        <div className="shower-text" >
          <h3>
            Transform Your Shower Experience with<span> Aquabenz</span>
          </h3>
          <p>
            Aquabenz products are made using the finest quality materials,
            continuously updated finest production technologies and cautious
            electroplating and finishing craftsmanship. The relentless focus on
            attention to detail during the manufacturing process ensures that
            our designs are presented to our customers accurate to every
            fraction, smooth like silk, and shiny like a mirror.
          </p>
        </div>
      </div>

      <motion.div
        className="shower-container second"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div className="shower second_img" whileHover={{ scale: 1.05 }}>
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
            Upgrade Your Wash Space with <span> Aquabenz</span>
          </h3>
          <p>
            At AquaBenz, we blend innovation, quality, and design excellence to
            redefine the way water flows in your space. Our faucets are crafted
            with premium materials, ensuring durability, precision, and a
            flawless finish that stands the test of time. With a focus on
            cutting-edge technology, we deliver smooth water flow, effortless
            functionality, and eco-friendly solutions that enhance everyday
            convenience.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Product;
