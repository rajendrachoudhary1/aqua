import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Contactuspage from "./pages/Contactuspage";
import ProductDetailPage from "./component/productsection/productdetail/ProductDetailPage";
import ProductPage from "./pages/Productpage";
import logo from "./assets/background/logo-f.png";
import "./App.css";
import Privacypage from "./pages/privacypage";
import Termpage from "./pages/termpage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
}

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
      <ScrollToTop />
      <div>
        {/* Navigation Menu */}
        <nav className={sticky ? "dark-nav" : ""}>
          <div className="nav-logo">
           <Link to='/'><img src={logo} alt="Logo" /></Link> 
          </div>
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars}
            className="bars"
            onClick={displaynav}
          />

          <ul className={toggle ? "ul-display" : ""}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/faucet" onClick={closeMenu}>
                Faucets
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/shower" onClick={closeMenu}>
                Shower
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/accessory" onClick={closeMenu}>
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
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
            <Route path="/privacy-policy" element={<Privacypage />} />
            <Route path="/term&condition" element={<Termpage />} />
          </Routes>
        </div>

        <div className="footer">
          <div className="footer-left">
           <Link to='/'> <img src={logo} alt="logo" /></Link>
            <div className="footer-icon">
              <div className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faXTwitter} />
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <h3>Pages</h3>
            <div className="underline-footer"></div>
            <div className="middle">
              <ul>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                   <Link to='/contact'>FAQs</Link>
                </li>
                <li>
                  <Link to='/term&condition'>Terms & Condition</Link>
                </li>
                <li>
                  <Link to='/privacy-policy'>Privacy & Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h3>Contact</h3>
            <div className="underline-footer"></div>
            <div className="footer-right-address">
              <p>Office No : 9166748923</p>
              <p>Email: aquabenz.in@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="copy-right">
          &copy; <span id="year">2024</span> Aquabenz. All rights reserved.
        </p>
      </div>
    </Router>
  );
}

export default App;
