import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Contactuspage from "./pages/Contactuspage";
import ProductDetailPage from "./component/productsection/productdetail/ProductDetailPage";
import ProductPage from "./pages/Productpage";
import Footer from "./component/homesection/footer/Footer";
import logo from "./assets/background/logo-f.png";
import "./App.css";

function App() {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const displaynav = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className={sticky ? "dark-nav" : ""}>
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars}
            className="bars"
            onClick={displaynav}
          />

          <ul className={toggle ? "ul-display" : ""}>
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products/faucet" onClick={closeMenu}>Faucets</NavLink>
            </li>
            <li>
              <NavLink to="/products/shower" onClick={closeMenu}>Shower</NavLink>
            </li>
            <li>
              <NavLink to="/products/accessory" onClick={closeMenu}>Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/contact" element={<Contactuspage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
