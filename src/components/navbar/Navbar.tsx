import React from 'react';
import './styles.scss';

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar__container">
      <div className="navbar__menu">
        <a href="">General</a>
      </div>
      <div className="navbar__menu">
        <a href="">Business</a>
      </div>
      <div className="navbar__menu">
        <a href="">Entertainment</a>
      </div>
      <div className="navbar__menu">
        <a href="">Health</a>
      </div>
      <div className="navbar__menu">
        <a href="">Science</a>
      </div>
      <div className="navbar__menu">
        <a href="">Sports</a>
      </div>
      <div className="navbar__menu">
        <a href="">Technology</a>
      </div>
    </div>
  );
};

export default Navbar;
