import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.css';

/** 
* @renders 404 page
* */

class NotFound extends Component {
  render() {
    return (
      <div className="errorMessage">
        <div className="four04">404</div>
        <div className="the-page">THE PAGE</div>
        <div className="notFound">WAS NOT FOUND</div>
        <Link to="/">
          <Button className="back-btn">BACK TO AUTHORS HAVEN</Button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
