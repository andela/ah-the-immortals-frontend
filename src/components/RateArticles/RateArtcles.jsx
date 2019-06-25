import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

/** 
 * @returns Class for ArticleRating
 */
class ArticleRating extends React.Component {
  state = {};

  onStarClick = nextValue => {
    const { article, starClick } = this.props;
    const slug = article.slug;
    starClick(slug, { rate: nextValue }
    );
  };

  render() {
    const { article, currentUser } = this.props;
    return currentUser?(
      <div className="rater">
        <div>
          <StarRatingComponent
            value={article.ratings.my_ratings || 0}
            name="rate1"
            starCount={5}
            onStarClick={this.onStarClick}
            emptyStarColor="#b8b8ba"
          />
        </div>
      </div>
    ):'';
  }
}


ArticleRating.propTypes = {
  starClick: PropTypes.func,
  article: PropTypes.object,
  currentUser:PropTypes.string.isRequired
};

ArticleRating.defaultProps = {
  starClick: ()=>{},
  article: {}
};

export default ArticleRating;
