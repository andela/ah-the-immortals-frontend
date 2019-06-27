import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllArticles } from '../../redux/actions/allArticles.action';
import PopularArticles from '../../components/home/PopularArticlesComponent';
import { sortPopular } from '../../services/sortArticles';

class PopularArticlesContainer extends Component {

  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { allArticles: { articles } } = this.props;
    if(articles.length !== 0) sortPopular(articles);
    const likesCount = articles.slice(0, 4);
    return (
      <div>
        <PopularArticles likesCount={likesCount} />
      </div>

    );
  }
}

PopularArticlesContainer.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.object.isRequired
};

const mapStateToProps = ({ allArticles }) => {
  return {
    allArticles: allArticles
  };
};

export default connect(mapStateToProps, { getAllArticles })(PopularArticlesContainer);
