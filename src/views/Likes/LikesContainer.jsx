import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LikesDislikes from '../../components/Likes/LikesComponent';
import likeAction from '../../redux/actions/Likes.action';
import promptAction from '../../redux/actions/Prompt.action';
import Prompt from '../../components/Likes/PropmptComponent';

class Likes extends Component {
  static propTypes = {
    giveLike: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    promptSignIn:PropTypes.func.isRequired,
    isAuthenticated :PropTypes.bool.isRequired
  }
  state = {
    prompt: false,
    msg: ''
  };
  static getDerivedStateFromProps = (props, state) => {
    const { likeError } = props;
    if (likeError.likeError) {
      return {
        error: true
      };
    }
    return { error: state.error };
  }
  setTypeMessage = (type) => type == 'like' ?
    this.setState({
      msg: 'Do you like this article?'
    }) :
    this.setState({
      msg: 'Don\'t like this article?'
    });
  handleClick = async (slug, type) => {
    const { giveLike, article,isAuthenticated } = this.props;
    const { like_info } = article;
    const { like, dislike } = like_info;
    if(isAuthenticated){
      if (like == true && type == 'like') {
        await giveLike(slug, type, 'remove');
      } else if (dislike == true && type == 'dislike') {
        await giveLike(slug, type, 'remove');
      } else {
        await giveLike(slug, type);
      }
    }else{
      this.setTypeMessage(type);
      this.setState({
        prompt: true
      });
    }
  };
  handleSignInPrompt = () => {
    const {promptSignIn,article}=this.props;
    promptSignIn(true,article.slug);
    this.setState({
      prompt:false
    });
  }
  closeModal = () => {
    this.setState({
      prompt: false
    });
  };
  render = () => {
    const { prompt, msg } = this.state;
    const { article, isAuthenticated } = this.props;
    return (
      <div>
        <Prompt
          show={prompt}
          closeModal={this.closeModal}
          msg={msg}
          handlePrompt={this.handleSignInPrompt}
        />
        <LikesDislikes
          handleClick={this.handleClick}
          article={article}
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  };
}
const mapStateToprops = ({ post, signin }) => {
  const { likeError } = post;
  return {
    likeError: likeError,
    isAuthenticated: !!signin.currentUser
  };
};

export default connect(mapStateToprops, { giveLike: likeAction, promptSignIn: promptAction })(Likes);
