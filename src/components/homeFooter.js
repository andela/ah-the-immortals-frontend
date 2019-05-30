import React, { Component } from 'react';

const Footer = () => (
  <footer className="bg-light text-dark mt-4 fixed-bottom">
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-3" />
        <div className="col-md-3" />
      </div>
      <div className="row">
        <div className="col-md-6">
          Authors Haven 
          {' '}
          <span className="small">
            <br />
            <a href="#null">Terms and Conditions</a>
          </span>
        </div>
        <div className="col-md-3" />
        <div className="col-md-3 text-right small align-self-end">
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
