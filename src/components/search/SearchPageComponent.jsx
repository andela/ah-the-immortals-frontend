import React from 'react';
import PropTypes from 'prop-types';
import ResultPage from './ResultPageComponent';
import '../../styles/Search.css';

const SearchPage = ({ history, result, handleFilter, filter, activeOption, handleClick }) => {
  return (
    <div className="search-page">
      <div className="container filter-section">
        <div className={`filter-content ${activeOption.title || activeOption.default ? 'dark' : ''}`}>
          <button
            type="button"
            onClick={handleFilter}
            name="title">
            Titles
          </button>
        </div>
        <div className={`filter-content ${activeOption.author ? 'dark' : ''}`}>
          <button
            type="button"
            onClick={handleFilter}
            name="author">
            Author
          </button>
        </div>
        <div className={`filter-content ${activeOption.tag ? 'dark' : ''}`}>
          <button
            type="button"
            onClick={handleFilter}
            name="tag">
            Tags
          </button>
        </div>
      </div>
      <div className="container-fluid search-body">
        <ResultPage result={result.result} handleClick={handleClick} />
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  activeOption: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};
export default SearchPage;
