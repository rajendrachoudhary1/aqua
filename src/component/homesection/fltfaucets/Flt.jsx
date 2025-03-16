import React from 'react';
import { Link } from "react-router-dom";

import FLT_IMG1 from '../../../assets/background/flt.jpg';
import FLT_IMG2 from '../../../assets/background/SHOWER.jpg';
import './Flt.css';

const Flt = () => {
  return (
    <>
    <div className='flt-main-container'>
    <div className="flt-title">
        <h3>Category</h3>
      </div>

      <div className="flt-main">
        {/* Faucets Section */}
        <div className="flt">
          <img src={FLT_IMG1} alt="Faucets" />
          <div className="flt-overlay"></div>
          <div className="flt-info">
            <p>FAUCETS</p>
            <div className="underline"></div>
            <div>
              <Link to="products/faucets">
                <button>Explore Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Showers Section */}
        <div className="flt">
          <img src={FLT_IMG2} alt="Showers" />
          <div className="flt-overlay"></div>
          <div className="flt-info">
            <p>SHOWERS</p>
            <div className="underline"></div>
            <div>
              <Link to="/Showers">
                <button>Explore Now</button>
              </Link>
            </div> 
          </div>
        </div>
      </div>  

    </div>
      
    </>
  );
};

export default Flt;
