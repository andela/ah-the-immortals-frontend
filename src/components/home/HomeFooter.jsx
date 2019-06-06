import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-light text-dark mt-4 fixed-bottom">
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col">
          <span className="small">
            <br />
            <Link to="#null">Terms and Conditions</Link>
          </span>
        </div>
        <div className="col text-center">
          <br />
          Authors Haven 
          {' '}
        </div>
        <div className="col text-right small align-self-end">
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Immortals
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

