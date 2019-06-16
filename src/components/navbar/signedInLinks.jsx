import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignedInLinks = ({ handleLogout, username }) => {
  const userurl = `/Profile/${username}`;
  return (
    <div className="nav ml-auto">
      <NavLink to="/postarticle" className="nav-link">
        Post Article
      </NavLink>
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
          <NavLink to={userurl} className="nav-link">
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
            onClick={handleLogout}
          >
                Logout
          </NavLink>
        </div>
      </div>
    </div>
  )
};
SignedInLinks.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
export default SignedInLinks;
