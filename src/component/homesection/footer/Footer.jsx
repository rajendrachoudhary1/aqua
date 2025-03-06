import React from 'react'
import logo from '../../../assets/logo-f.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';;

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-left'>
            <img src={logo} alt="" />
            <div className='footer-icon'>
             <div className='icon'><FontAwesomeIcon icon={faInstagram} /></div>   
            <div className='icon'><FontAwesomeIcon icon={faXTwitter} /></div> 
            </div>
        </div>
        <div className='footer-middle'>
            <h3>Pages</h3>
            <div className="underline-footer"></div>
            <div className='middle'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Terms & Condition</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>


        </div>

        <div className='footer-right'>
             <h3>Contact</h3>
             <div className="underline-footer"></div>
            <div className='footer-right-address'>
                <p>Office No : 9166748923</p>
            </div>
        </div>

    </div>
    <p className='copy-right'>&copy; <span id="year">2024</span> Aquabenz. All rights reserved.</p>

    </>
  )
}

export default Footer
