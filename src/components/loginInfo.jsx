import React from 'react';
import { Button } from 'react-bootstrap';

const LoginInformation = () => (
  <div className="top">
    <a href="/" className="title-text">Authors Haven</a>
    <p className="mini-text">Welcome Back!</p>
    <p className="small-text">
  To keep connected with us please
      <br />
  Create an account.
    </p>
    <Button variant="danger" className="signup-btn">SIGN UP</Button> 
  </div>  
);

export default LoginInformation;
