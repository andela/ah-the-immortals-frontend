import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search.css';

const SearchBar = ({ handleChange, history,handleKeyDown }) => {
  return (
    <div className="input-group col-md-4 font-awesome search-bar">
      <input
        className="form-control py-2"
        type="search" 
        placeholder="&#xF002; Search Authors Haven"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        history={history}
        onFocus={handleChange}
        id="search-bar"
      />
    </div>
  );
};
SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  handleKeyDown:PropTypes.func.isRequired
};
export default SearchBar;
