import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';

const CreateComment = ({ onChange, onSubmit, value, isLoading }) => (
  <div className="mb-5">
    <h3>Leave your comment</h3>
    <form onSubmit={onSubmit} className="form-horizontal">
      <div className="form-group">
        <textarea
          onChange={onChange}
          className="form-control"
          name="body"
          rows="6"
          value={value}
          placeholder="Leave your thoughts on this article here"
          required
        />
      </div>
      <div className="form-item">
        <div className="">
          { isLoading ? (
            <Button>
              <Spinner
                as="span"
                animation="border"
                id="loading-btn"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              {' '}
           SENDING...
            </Button>
          ) : <Button type="submit">ADD COMMENT</Button> }
        </div>
      </div>
    </form>
    <hr />
  </div>
);

CreateComment.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CreateComment;
