import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CreateComment = ({ onChange, onSubmit, value }) => (
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
          <Button
            variant="primary"
            type="submit"
          >
          ADD COMMENT
          </Button>
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
};

export default CreateComment;
