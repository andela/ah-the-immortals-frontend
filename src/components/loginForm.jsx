import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { Button } from 'react-bootstrap';

library.add(faFacebook, faTwitter, faGooglePlus);

const LoginForm = () => (
  <form>
    <label htmlFor="email">
        Email
      <br />
      <input type="email" required className="form-control" />
    </label>
    <br />
    <label htmlFor="password">
        Password
      <br />
      <input type="password" required className="form-control" />
    </label>
    <br />
    <Button variant="info" className="form-control">
        SIGN IN
    </Button>
    <br />
    <div className="reset-div">
      <a href="#null" className="passreset-link">Forgot Password?</a>
    </div>
    <div>
      <hr />
      <p className="option-text">Or sign in with:</p>
    </div>
    <div className="round-icon">
      <FontAwesomeIcon icon={['fab', 'twitter']} className="twitter" />
      <FontAwesomeIcon icon={['fab', 'facebook']} className="facebook" />
      <FontAwesomeIcon icon={['fab', 'google-plus']} className="google" />
    </div>
  </form>
);

export default LoginForm;
