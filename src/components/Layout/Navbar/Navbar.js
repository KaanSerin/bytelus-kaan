import React from 'react';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <img src='./bytelus.png' alt='Bytelus Logo' />
      <p>Kaan Serin - Submission</p>
    </nav>
  );
};

export default Navbar;
