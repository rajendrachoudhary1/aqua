import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/logo-f.png";
import "./App.css";
import { useState, useEffect } from "react";
import Showerpage from "./pages/Showerpage";
import { NavLink } from "react-router-dom";
import Contactuspage from "./pages/Contactuspage";
import Assocesrios from "./pages/Assocesriospage";
import Footer from "./component/homesection/footer/Footer";
function App() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  const displaynav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {" "}
      <Router>
        <div>
          {/* Navigation Menu */}
          <nav className={` ${sticky ? "dark-nav" : ""}`}>
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className="bars"
              onClick={displaynav}
            />
            

               
              <ul className={toggle ? "ul-display" : ""}>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Faucets" activeClassName="active">
                    Faucets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Shower" activeClassName="active">
                    Sanitaryware
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Accessories" activeClassName="active">
                    Accessories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contact" activeClassName="active">
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
            <Route path="/Accessories" element={<Assocesrios />} />
            <Route path="/Contact" element={<Contactuspage />} />
            
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
