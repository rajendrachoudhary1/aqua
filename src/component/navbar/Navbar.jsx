import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-f.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
 
const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
     <>
       <nav className={` ${sticky? 'dark-nav' : '' }`}>
        <div className='nav-logo'>
        <img src={logo} alt="" />
        </div>
       
        
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact</li>
            
          </ul>
          <FontAwesomeIcon icon={faBars} className='bars' />
       </nav>
     </>
  )
}

export default Navbar
