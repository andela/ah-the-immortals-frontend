import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, Form, Row, Col } from 'react-bootstrap';

const CreateReply = ({ replyWrite, replySubmit, value }) => (
  <Form onSubmit={replySubmit}>
    <Row>
      <Col>
        <FormControl name="body" className="input-width" placeholder="Leave a reply" onChange={replyWrite} value={value} required />
      </Col>
      <Col xs lg="2">
        <Button type="submit">Send</Button>
      </Col>
    </Row>
  </Form>
);

CreateReply.propTypes = {
  replyWrite: PropTypes.func.isRequired,
  replySubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default CreateReply;
