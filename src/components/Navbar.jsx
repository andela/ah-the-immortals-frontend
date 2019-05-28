import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navigationbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/Login"> Dummy Login </Link>
        </li>
      </ul>
    );
  }
}

export default Navigationbar;

