import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Homepage from "./pages/Homepage"
import Productpage from "./pages/Productpage"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from './assets/logo-f.png'
import './App.css'
import { useState,useEffect } from 'react';
import Showerpage from './pages/Showerpage';

function App() {
    const [sticky, setSticky] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY >50 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return (
    <> <Router>
    <div>
      {/* Navigation Menu */}
      <nav className={` ${sticky? 'dark-nav' : '' }`} >
             <div className='nav-logo'>
             <img src={logo} alt="" />
             </div>
               <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Faucets">Faucets</Link></li>
               <li><Link to="/Shower">Sanitaryware</Link></li>
               <li><Link to="/Accessories">Accessories</Link></li>
               <li><Link to="/Contact">Contact</Link></li> 
               </ul>
               <FontAwesomeIcon icon={faBars} className='bars' />
            </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Faucets" element={<Productpage />} />
        <Route path="/Shower" element={<Showerpage />} />
      </Routes>
    </div>
  </Router>
    </>
  )
}

export default App
