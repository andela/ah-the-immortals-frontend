import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isLoggedIn from '../../services/checkAuthentication';
import likeCommentAction from '../../redux/actions/likeComment.action';
import LikeDislikeComment from '../../components/comments/LikeCommentComponent'; 
import promptAction from '../../redux/actions/Prompt.action';

class LikeComment extends Component {

  handleClick = async (id, vote_type) => {
    const { likeCommentAction, isAuthenticated, promptAction, comment, slug } = this.props;
    const isAuthenticate = isAuthenticated || isLoggedIn();
    { isAuthenticate ? (
      await likeCommentAction(slug, id, vote_type)
    ):
      promptAction(true, comment.slug);
    }
  };
  render() {
    const { comment, isAuthenticated } = this.props;
    const isAuthenticate = isAuthenticated || isLoggedIn();
    return (
      <LikeDislikeComment comment={comment} handleClick={this.handleClick} isAuthenticated={isAuthenticate} />
    );
  }
}

LikeComment.propTypes = {
  likeCommentAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.string.isRequired,
  promptAction: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

const mapStateToProps = ({signin}) => ({
  isAuthenticated: signin.currentUser
});

export default connect(mapStateToProps, { likeCommentAction, promptAction })(LikeComment);
