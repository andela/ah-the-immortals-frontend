import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateReply from '../../components/comments/CreateReplyComponent';
import { createChildCommentAction } from '../../redux/actions/Comments.action';

class Replies extends Component {
  state = {
    body: ''
  };
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { createChildCommentAction, slug, id } = this.props;
    createChildCommentAction(this.state, slug, id, () => this.setState({
      body: ''
    }));
  };
  render() {
    const { body } = this.state;
    return (
      <CreateReply replySubmit={this.onSubmit} replyWrite={this.onChange} value={body} />
    );
  }
}
Replies.propTypes = {
  createChildCommentAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({comments}) => ({
  data: comments.data,
});

export default connect(mapStateToProps, { createChildCommentAction })(Replies);
