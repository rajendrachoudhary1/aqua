import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Showerpage from "./pages/Showerpage";
import Contactuspage from "./pages/Contactuspage";
import Assocesriospage from "./pages/Assocesriospage"; // Fixed typo
import Footer from "./component/homesection/footer/Footer";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import logo from "./assets/background/logo-f.png";
import "./App.css";
import { useState, useEffect } from "react";
import ProductDetailPage from './pages/ProductDetailPage'
import {products} from './assets/assets'

function App() {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  // Handle sticky navbar on scroll
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
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Faucets" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Faucets
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shower" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Shower
              </NavLink>
            </li>
            <li>
              <NavLink to="/Accessories" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Faucets" element={<Productpage />} />
          <Route path="/Shower" element={<Showerpage />} />
          <Route path="/Accessories" element={<Assocesriospage />} />
          <Route path="/Contact" element={<Contactuspage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
