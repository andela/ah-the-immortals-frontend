import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopRatedArticles = ({ topArticles }) => {
  return (
    <div className="quotes position-fixed cardwidth cardmargins">
      <div className="box box1">
        <h6><b>TOP RATED ARTICLES</b></h6>
        {topArticles.map((article) => (
          <div key={article.slug}>
            <hr className="art-line" />
            <Link to={`/post/${article.slug}`} className="art-title">
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

TopRatedArticles.propTypes = {
  topArticles: PropTypes.array.isRequired,
};

export default TopRatedArticles;
