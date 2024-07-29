import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home" onClick={handleCloseMenu}>Home</a></p>
          <p><a href="#wgpt3" onClick={handleCloseMenu}>What is GPT3?</a></p>
          <p><a href="#possibility" onClick={handleCloseMenu}>Open AI</a></p>
          <p><a href="#features" onClick={handleCloseMenu}>Case Studies</a></p>
          <p><a href="#blog" onClick={handleCloseMenu}>Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
          : <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home" onClick={handleCloseMenu}>Home</a></p>
            <p><a href="#wgpt3" onClick={handleCloseMenu}>What is GPT3?</a></p>
            <p><a href="#possibility" onClick={handleCloseMenu}>Open AI</a></p>
            <p><a href="#features" onClick={handleCloseMenu}>Case Studies</a></p>
            <p><a href="#blog" onClick={handleCloseMenu}>Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
