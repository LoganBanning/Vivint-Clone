import './Footer.component.css';
import VivintHouseLogo from '../../Images/vivint-house-logo.png';

const Footer = () => {
  return (
    <div className='footer-comp-container'>
      <div className='footer-comp-main-links'>
        <img src={VivintHouseLogo} alt='Vivint Logo' className='vivint-house-logo-footer' />
        <p className='footer-comp-link'>Customer Support</p>
        <p className='footer-comp-link'>Licenses</p>
        <p className='footer-comp-link'>Privacy Policy</p>
        <p className='footer-comp-link'>Term of Service</p>
      </div>
      <div className='footer-comp-copyright-opt-out-links'>
        <p>Copyright 2023 Vivint, Inc.  All rights reserved.</p>
        <div className='copyright-links-footer'>
          <p className='copyright-link'>Do not sell or share my personal infromation.</p>
          <p className='copyright-link'>Limit the use of my sensitive personal information.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;