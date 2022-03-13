import React from 'react';
import './gototop.scss';
import { IoIosArrowUp } from 'react-icons/io';

const Gototop = ({ display }) => {
  console.log(display);
  return (
    <a
      href='#'
      id='goTop'
      className='goTop' //{`goTop ${props.display === true ? 'active' : 'inactive'}`}
      style={{
        opacity: `${display ? '1' : '0'}`,
        visibility: `${display ? 'visible' : 'hidden'}`,
        // background: 'red',
      }}
    >
      <IoIosArrowUp /> <br />
      Go Top
    </a>
  );
};

export default Gototop;
