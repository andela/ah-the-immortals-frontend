import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import isLoggedIn from '../../services/checkAuthentication';
import CreateReply from '../../components/comments/CreateReplyComponent';
import { createChildCommentAction } from '../../redux/actions/Comments.action';

class Replies extends Component {
  state = {
    body: '',
    loading: false
  };
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const { createChildCommentAction, slug, id } = this.props;
    const isAuthenticated = isLoggedIn();
    { isAuthenticated ? (createChildCommentAction(this.state, slug, id, () => this.setState({
      body: '',
      loading: false
    }))): toast.error('Please log in to reply!');}
    this.setState({loading: false});
  };
  render() {
    const { body, loading } = this.state;
    return (
      <CreateReply replySubmit={this.onSubmit} replyWrite={this.onChange} value={body} isLoading={loading} />
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
