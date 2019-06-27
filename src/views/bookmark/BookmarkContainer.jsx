import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookmarkComponent from '../../components/bookmark/BookmarkComponent';
import BookmarkAction from '../../redux/actions/Bookmark.actions';
import UnBookmarkAction from '../../redux/actions/UnBookmark.actions';

class BookmarkContainer extends Component {
  static  propTypes = {
    article: PropTypes.object.isRequired,
    bookmarkAction: PropTypes.object.isRequired,
    unbookmarkAction: PropTypes.object.isRequired,

  };
  onClick = async (slug) => {
    const { article, bookmarkAction, unbookmarkAction }=this.props;
    if(article.bookmarked)
      await unbookmarkAction(slug);
    else {
      await bookmarkAction(slug);
    }
  };
  render() {
    const { article } = this.props;
    return (
      <div>
        <BookmarkComponent
          article={article}
          handleClick={this.onClick}
        />
      </div>
    );
  }
}

BookmarkContainer.propTypes = {};
const mapStateToProps=({bookmark})=>{
  return{
    bookmark
  };
};
export default connect(mapStateToProps, {bookmarkAction:BookmarkAction, unbookmarkAction:UnBookmarkAction})(BookmarkContainer);
