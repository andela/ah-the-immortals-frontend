import React from 'react';
import { Link } from 'react-router-dom';

const PopularArticles = () => (
  <div className="quotes position-fixed cardwidth">
    <div className="box box1">
      <h5>POPULAR ARTICLES</h5>
      <hr />
      <Link to="#null">Cras justo odio</Link>
      <hr />
      <Link to="#null">Dapibus ac facilisis in</Link>
      <hr />
      <Link to="#null">Vestibulum at eros</Link>
      <hr />
      <Link to="#null">Vestibulum at eros</Link>
    </div>
  </div>
);

export default PopularArticles;
