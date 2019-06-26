import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, Form, Row, Col, Spinner } from 'react-bootstrap';

const EditComment = ({ editWrite, editSubmit, value, isLoading, placeholder }) => (
  <Form onSubmit={editSubmit}>
    <Row>
      <Col>
        <FormControl 
          name="body" 
          className="input-width placecolor" 
          placeholder={placeholder} 
          onChange={editWrite} 
          value={value} 
          required 
        />
      </Col>
      <Col xs lg="2">
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
           EDITING...
          </Button>
        ) : <Button type="submit">EDIT</Button> }
      </Col>
    </Row>
  </Form>
);

EditComment.propTypes = {
  editWrite: PropTypes.func.isRequired,
  editSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default EditComment;
