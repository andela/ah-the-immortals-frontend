import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PopularArticles = ({ likesCount }) => {
  /* istanbul ignore next */
  return (
    <div className="quotes position-fixed cardwidth">
      {
        <div className="box box1">
          <h6>
            <b>
            POPULAR ARTICLES
            </b>
          </h6>
          {likesCount.map((article) => (
            <div key={article.slug}>
              <hr className="art-line" />
              <Link to={`/post/${article.slug}`} className="art-title">
                {article.title}
              </Link>
              
            </div>
          ))}
        </div>
      }
    </div>
  );
};

PopularArticles.propTypes = {
  likesCount: PropTypes.array.isRequired
};

export default PopularArticles;
