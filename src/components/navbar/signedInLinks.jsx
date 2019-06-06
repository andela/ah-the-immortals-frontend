import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { username } from '../../services/api';


const handleLogout = () => (
  localStorage.clear()
);

const SignedInLinks = () => (
  <div className="nav ml-auto">
    <i className="fa fa-bell notnotif text-dark mt-3" />
    <NavLink
      to="#null"
      className="nav-link dropdown-toggle"
      role="button"
      data-toggle="dropdown"
      data-target="#profileDropdown"
      aria-expanded="true"
    >
      <i className="fa fa-user-circle ml-3 mr-2 mt-2" />
      <span className="mr-1">{username}</span>
    </NavLink>
    <div className="dropdown-menu ml-5" id="profileDropdown">
      <div className="dropdown-item">
        <NavLink to="/Profile" className="nav-link">
                Profile
        </NavLink>
      </div>
      <div className="dropdown-item">
        <NavLink
          to="#null"
          className="nav-link"
        >
                Settings
        </NavLink>
      </div>
      <div className="dropdown-item">
        <NavLink
          to="/"
          className="nav-link"
          onClick={handleLogout()}
        >
                Logout
        </NavLink>
      </div>
    </div>
  </div>
);
export default SignedInLinks;
