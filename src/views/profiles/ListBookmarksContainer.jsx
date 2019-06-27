import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleItem from './ProfileArticlesItems';
import listBookmarks from '../../redux/actions/listBookmarks.actions';
import '../../styles/App.css';

class BookMarkedArticles extends Component {
  componentDidMount() {
    const { listBookmarks: Bookmarks } = this.props;
    Bookmarks();
  }
  
  render() {
    const { bookmarks: { bookmarks } } = this.props;
    return (
      <div className="container-fluid profile-articles-container">
        { bookmarks && bookmarks[0] ? (
          <div className="row">
            {
              bookmarks.map(article => (
                <ArticleItem
                  article={article}
                  key={article.slug}
                />
              ))
            }
          </div>
        )
          : 
          (<div className="list_bookmarks">You have not bookmarked any article</div>
          )}
      </div>
    );
  }
}

BookMarkedArticles.propTypes = {
  listBookmarks: PropTypes.func.isRequired,
  bookmarks: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  errors: state.bookmarks,
});

export default connect(mapStateToProps, { listBookmarks })(BookMarkedArticles);

