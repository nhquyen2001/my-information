import React from 'react';
import './gototop.scss';
import { IoIosArrowUp } from 'react-icons/io';

const Gototop = ({ display }) => {
  console.log(display);
  return (
    <a
      href='#'
      id='goTop'
      className={`goTop ${display ? 'active' : 'inactive'}`}
    >
      <IoIosArrowUp /> <br />
      Go Top
    </a>
  );
};

export default Gototop;
