import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import '../../styles/Search.css';

const ResultPage = ({ result,handleClick }) => (result.results ? (
  result.results.articles.map((article, index) => (
    <div
      className="card"
      key={`${index + 0}-card`}>
      <div className="card-header user-info">
        <img src={article.author.image} alt="avatar" className="avatar" />
        <p>{article.author.username}</p>
      </div>
      <div
        className="card-header title-info"
        onClick={()=>handleClick(article.slug)} 
        tabIndex="0"
        role="button"
        onKeyPress={handleClick}
        key={`${index + 1}-head`}>
        {article.title}
      </div>
      <div
        className="card-body description"
        onClick={()=>handleClick(article.slug)} 
        tabIndex="0"
        role="button"
        onKeyPress={handleClick}
        key={`${index + 2}-description`}>
        {article.description}
      </div>
      <div
        className="card-body article-body"
        onClick={()=>handleClick(article.slug)} 
        tabIndex="0"
        role="button"
        onKeyPress={handleClick}
        key={`${index + 3}-body`}>
        {renderHTML(article.body)}
      </div>
    </div>
  ))
) : (
  <div
    className="filter-error">
      There are no results found
  </div>
));
ResultPage.propTypes = {
  result: PropTypes.object.isRequired,
  handleClick:PropTypes.func.isRequired
};
export default ResultPage;
