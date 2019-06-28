import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookmarkComponent extends Component {
  static  propTypes = {
    article: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  };
  render() {
    const { article, handleClick } = this.props;

    return (
      <div className={article.bookmarked?'bookmarked-icon':'bookmark'}>
        <i className="fas fa-bookmark" onClick={()=>handleClick(article.slug)} />
      </div>
    );
  }
}

export default BookmarkComponent;
