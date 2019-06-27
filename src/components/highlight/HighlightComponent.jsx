import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.css';

const HighlightIcons = ({
  show, handlehighlight,
  section,
  baseOffset,
  extentOffset,
  article,
  handleComment
}) => (show) ?
  (
    <div className="highlight-icons">
      <div className="icon">
        <i
          className="fas fa-highlighter"
          aria-hidden="true"
          id="highlighter"
          onClick={() => handlehighlight(section, baseOffset, extentOffset, article)}
        />
      </div>
      <div className="icon">
        <i
          className="fas fa-comment"
          aria-hidden="true"
          id="highlight-comment"
          onClick={()=>handleComment(section)}
        />
      </div>
    </div>
  ) : null;

HighlightIcons.propTypes = {
  show: PropTypes.bool.isRequired,
  handlehighlight: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  baseOffset: PropTypes.number.isRequired,
  extentOffset: PropTypes.number.isRequired,
  handleComment:PropTypes.func.isRequired
};
export default HighlightIcons;
