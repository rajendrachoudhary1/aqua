import React from 'react'
import logo from '../../assets/logo-f.png'
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

        <div className='footer-right'>
            <div className='footer-right-a'>
                <a href="">Home</a>
                <a href="">Contact us</a>
            </div>
            <div className='footer-right-address'>
                <p>Address</p>
                <div className="underline"></div>
                <p>SHREE RAM DISTRIBUTOR</p>
                <p>Opp. MPE FINANCE PVT. LTD.,Ganesh Marge</p>
                <p>Nr. Mahatma Gandhi Circle,Sumerpur,Pali-306902</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer
