import React from "react";
import "./Header.scss";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        exact
        activeClassName="headerLink__active"
        className="headerLink"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/people"
        activeClassName="headerLink__active"
        className="headerLink"
      >
        People
      </NavLink>
      {/*<NavLink to='/' >Home</NavLink>*/}
    </header>
  );
};

export default Header;
