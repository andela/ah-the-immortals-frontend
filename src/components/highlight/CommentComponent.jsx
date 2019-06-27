import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/style.css';

const HighlightComment = ({ showModal, handleModalClose, section, article,
  comment, getComment, handleSubmit, baseOffset, extentOffset,
  containsHighlight, updateComment, currentUser }) => {
  const { author } = article;
  const commentedSection = containsHighlight(
    article, section,
    baseOffset, extentOffset
  );
  return (
    <div className="highlight-modal">
      <Modal
        show={showModal}
        onHide={() => handleModalClose(section)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="highlight-section">
              <div>
                <img src={author.image} className="highlight-icon" alt="profile" />
              </div>
              <div className="highlight-username">{currentUser}</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            id="highlight-comment"
            className="highlight-comment"
            onChange={getComment}
            defaultValue={commentedSection.length ? commentedSection[0].comment : ''}
          />
          <button
            type="button"
            id="highlight-btn"
            className="highlight-btn"
            onClick={commentedSection.length ?
              () => updateComment(article.slug, comment, commentedSection[0].id, section)
              : () => handleSubmit(section, baseOffset, extentOffset, article, comment)}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
HighlightComment.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired,
  getComment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  baseOffset: PropTypes.number.isRequired,
  extentOffset: PropTypes.number.isRequired,
  containsHighlight: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
};
export default HighlightComment;
