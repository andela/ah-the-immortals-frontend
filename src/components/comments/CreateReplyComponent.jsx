import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, Form, Row, Col, Spinner } from 'react-bootstrap';

const CreateReply = ({ replyWrite, replySubmit, value, isLoading }) => (
  <Form onSubmit={replySubmit}>
    <Row>
      <Col>
        <FormControl 
          name="body" 
          className="input-width" 
          placeholder="Leave a reply" 
          onChange={replyWrite} 
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
           SENDING...
          </Button>
        ) : <Button type="submit">SEND</Button> }
      </Col>
    </Row>
  </Form>
);

CreateReply.propTypes = {
  replyWrite: PropTypes.func.isRequired,
  replySubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CreateReply;
