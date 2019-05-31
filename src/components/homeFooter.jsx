import React, { Component } from 'react';

const Footer = () => (
  <footer className="bg-light text-dark mt-4 fixed-bottom">
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col-md-3 footmargin">
          Authors Haven 
          {' '}
          <span className="small">
            <br />
            <a href="#null">Terms and Conditions</a>
          </span>
        </div>
        <div className="col-md-8 text-right small align-self-end">
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
