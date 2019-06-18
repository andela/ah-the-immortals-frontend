import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class ArticleItem extends Component {
  
  render() {
    const { article } = this.props;
    return (
      <div className="quotes-prof profile-quotes">
        <div className="box box1 prof-articles">
          <div className="title-header">
            {article.title}
            <div className="timer">
              <div className="bookmark">
                <i className="far fa-bookmark" />
              </div>
              <span className="readingTime">
                {article.readtime}
                <span> Read</span>
              </span>
            </div>
          </div>
          <br />
          <div className="description">
            {article.description}
            <Link to={`/post/${article.slug}`}>
              .... Read More
            </Link>
          </div>
          <br />
          <div className="date-read-time">
            <time>
              <Moment format="DD-MMM-YYYY">
                {article.created_at}
              </Moment>
            </time>
          </div>
        </div>
      </div>
    );
  }
}

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default connect(null)(ArticleItem);
