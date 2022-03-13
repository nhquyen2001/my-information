import React, { useEffect, useState } from 'react';
import './header.scss';
import CTA from './CTA';
import ME from '../../assets/Quyen2-removebg-preview.png';
import HeaderSocials from './HeaderSocials';
import Gototop from '../btn-gototop/Gototop';

const Header = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Quyen Nguyen</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#footer' className='scroll__down'>
          Scroll Down
        </a>
      </div>
      {showGoToTop && <Gototop />}
    </header>
  );
};

export default Header;
