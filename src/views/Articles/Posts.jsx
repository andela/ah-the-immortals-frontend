import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import StarRatings from 'react-star-ratings';
import Spinner from '../Article/Spinner';
import { getPages, getNextPages } from '../../redux/actions/postActions';
import articlesUrl from '../../services/api';
import '../../styles/App.css';
import '../../styles/pagination.scss';
import PaginationContainer from '../Pagination/PaginationContainer';
import BookmarkContainer from '../bookmark/BookmarkContainer';



class Posts extends Component {
  state = {
    ArticlesPerPage: 10,
    currentPage: 1,
  };

  componentDidMount() {
    const { getPages } = this.props;
    const url = articlesUrl.articlesUrl;
    getPages(url);
  }
  handleClick = e => {
    const { getNextPages } = this.props;
    getNextPages(`${articlesUrl.articlesUrl}?page=${Number(e.target.id)}`);
    this.setState({
      currentPage: Number(e.target.id),
    });
  };

  handleLink = e => { const { getNextPages } = this.props;
    this.setState({ currentPage: Number(e.target.id.substring(e.target.id.lastIndexOf('=') + 1)) });
    getNextPages(e.target.id);
  };

  render() {

    const { post: { loading } } = this.props;
    const { post: { pages } } = this.props;
    const { results } = pages;
    const { articles } = { ...results };
    const { ArticlesPerPage, currentPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pages.articlesCount / ArticlesPerPage); i++) {pageNumbers.push(i);}
    return (
      <div>
        <div className="post-feed">
          <br />
          {
            (!pages || loading) ? <Spinner /> : (
              articles ? articles.map(article => (
                <div className="quotes" key={article.slug}>
                  <div className="box box1">
                    <div className="">
                      <div className="title-header">
                        {article.title}
                        <div className="timer">
                          <BookmarkContainer article={article} />
                          <span className="readingTime">
                            {article.readtime}
                          </span>
                        </div>
                      </div>
                      <div className="ratingstar">
                        <StarRatings
                          starRatedColor="#ffa534"
                          rating={article.ratings.average_ratings/5 || 0}
                          starDimension="25px"
                          numberOfStars={1}
                        />
                      </div>
                      <div className="author">
                        {article.author.username}
                      </div>
                      <div className="description">
                        {article.description}
                        <Link to={`/post/${article.slug}`}>
                          .... Read More
                        </Link>
                      </div>
                      <div className="date-read-time">
                        <time>
                          <Moment format="DD-MMM-YYYY">
                            {article.created_at}
                          </Moment>
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              )) : null
            )}
        </div>
        <PaginationContainer
          allowUnique={false}
          handleLink={this.handleLink}
          handleClick={this.handleClick}
          pageNumbers={pageNumbers}
          next={pages.next}
          previous={pages.previous}
          currentPage={currentPage} 
        />
        <br />
        <br />
        <br />
        <br />
      </div>

    );
  }
}

Posts.propTypes = {
  getPages: PropTypes.func.isRequired,
  getNextPages:PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { getNextPages, getPages })(Posts);
