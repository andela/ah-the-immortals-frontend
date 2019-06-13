import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../../views/Articles/PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <PostItem key={post.slug} post={post} />);
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
