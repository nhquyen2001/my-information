import React from 'react';
import './footer.scss';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        NHQUYEN
      </a>

      <ul className='footer__permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/NHQuyen2001' target='_blank'>
          <FiFacebook />
        </a>
        <a href='https://www.instagram.com/nhquyen/' target='_blank'>
          <BsInstagram />
        </a>
        <a href='https://twitter.com' target='_blank'>
          <FiTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; NHQUYEN. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
