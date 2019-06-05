import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginInformation = () => (
  <div className="top">
    <Link to="/" className="title-text">Authors Haven</Link>
    <p className="mini-text">Welcome!</p>
    <p className="small-text">
  To keep connected with us please
      <br />
  Create an account.
    </p>
    <Link to="/signup">
      <Button variant="danger" className="signup-btn">SIGN UP</Button> 
    </Link>
  </div>  
);

export default LoginInformation;
