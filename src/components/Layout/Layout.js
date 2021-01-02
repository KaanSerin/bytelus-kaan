import React from 'react';
import classes from './Layout.module.scss';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={classes.Main}>{children}</main>
    </>
  );
};

export default Layout;
