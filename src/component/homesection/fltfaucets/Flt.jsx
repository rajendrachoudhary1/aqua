import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FLT_IMG1 from '../../../assets/flt.jpg';
import FLT_IMG2 from '../../../assets/SHOWER.jpg';
import './Flt.css';

const Flt = () => {
  return (
    <>
      <motion.div className="flt-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Category</h3>
      </motion.div>

      <div className="flt-main">
        {/* Faucets Section */}
        <motion.div className="flt"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={FLT_IMG1} alt="Faucets" />
          <div className="flt-overlay"></div>
          <div className="flt-info">
            <p>FAUCETS</p>
            <div className="underline"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/Faucets">
                <button>Explore Now</button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Showers Section */}
        <motion.div className="flt"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={FLT_IMG2} alt="Showers" />
          <div className="flt-overlay"></div>
          <div className="flt-info">
            <p>SHOWERS</p>
            <div className="underline"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/Showers">
                <button>Explore Now</button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Flt;
