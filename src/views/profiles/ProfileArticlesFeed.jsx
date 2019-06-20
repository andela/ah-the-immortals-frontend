import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ProfileArticlesItems';

class ArticlesFeed extends Component {

  render() {
    const { articles } = this.props;
    return articles.map(article => <ArticleItem key={article.slug} article={article} />);
  }
}

ArticlesFeed.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticlesFeed;
