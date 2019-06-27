import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllArticles } from '../../redux/actions/allArticles.action';
import TopRatedArticles from  '../../components/home/TopRatedArticles';
import { sortTopRated } from '../../services/sortArticles';

class Articles extends Component {

  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { allArticles: { articles } } = this.props;
    const articleRatings = articles.map(article => article);
    if(articleRatings.length !== 0) sortTopRated(articleRatings);
    const topArticles = articleRatings.slice(0, 4);
    return (
      <div>
        <TopRatedArticles
          topArticles={topArticles}
        />
      </div>
    );
  }
}

Articles.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.object.isRequired,
};

const mapStateToProps = ({ allArticles }) => {
  return {
    allArticles: allArticles
  };
};

export default connect(mapStateToProps, { getAllArticles })(Articles);
