import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <Link to='/'>
        <img src='./bytelus.png' alt='Bytelus Logo' />
      </Link>
      <p>Kaan Serin</p>
    </nav>
  );
};

export default Navbar;
