import React from 'react';
import { Link } from 'react-router-dom';

const TopRatedArticles = () => (
  <div className="quotes position-fixed cardwidth cardmargins">
    <div className="box box1">
      <h5>TOP RATED ARTICLES</h5>
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

export default TopRatedArticles;
