import React from 'react';

import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-logo">
      <span>IM</span>
      <span>BD</span>
    </div>
    <div className="navbar-menu">
      <NavLink
        to="/"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? 'menu active' : 'menu'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/animes"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? 'menu active' : 'menu'
        }
      >
        Anime List
      </NavLink>
    </div>
  </div>
);

export default Navbar;
