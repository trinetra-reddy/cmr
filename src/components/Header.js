import React, { useRef, useState } from "react";
import classes from "./Header.module.scss";
import logo from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";
import { SocialMediaHeader } from "./socialMediaHeader";
export const Header = () => {
  const navList = [{
    name: 'Home',
    link: '/'
  },
  {
    name: 'About Us',
    link: '/about'
  }, {
    name: 'Services',
    link: '/services'
  }, {
    name: 'Contact Us',
    link: '/contact'
  },
  ]
  const navMenuRef = useRef();

  const toggleMenu = () => {
    if (navMenuRef) {
      if (navMenuRef.current.classList.contains(classes['show'])) {
        navMenuRef.current.classList.remove(classes['show'])
      } else {
        navMenuRef.current.classList.add(classes['show'])
      }
    }
  }

  return (
    <header className={classes["header"]} ref={navMenuRef}>
      <SocialMediaHeader/>
      <div className={classes['header__main-header']}>
      <div className={classes["header__logo"]}>
        <NavLink to="/">
          <img src={logo} alt="logo" width="100" />
        </NavLink>
      </div>
      <div className={classes["header__toggle-menu"]} onClick={toggleMenu}></div>
      <ul className={classes['header__nav']}>
        {navList.map((nav, index) => (<li key={index} className={classes['header__nav-item']}>
          <NavLink to={nav.link}>{nav.name}</NavLink>
        </li>))}
      </ul>
      </div>
    </header>
  );
};
export default Header;
