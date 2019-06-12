import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const RenderedLinks = ({ links }) => (
  <Nav className="navbar navbar-expand-lg navbar-light fixed-top navbackground">
    <NavLink className="navbar-brand" to="/"><b className="brand-text">Authors Haven</b></NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="row collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav ml-auto">
        <li className="nav-item">
          <form className="form-inline">
            <input className="form-control mr-sm-4 font-awesome" type="search" placeholder="&#xF002;  Search for articles" aria-label="Search" />
          </form>
        </li>
        <li className="nav-item col">{links}</li>
      </ul>
    </div>
  </Nav>
);

RenderedLinks.propTypes = {
  links: PropTypes.object.isRequired,
};

export default RenderedLinks;
