import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/NHQuyen2001' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.facebook.com/nhquyen01' target='_blank'>
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
