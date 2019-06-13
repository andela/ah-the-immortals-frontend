import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Article/Spinner';
import PostFeed from '../../components/Articles/PostFeed';
import { getPosts } from '../../redux/actions/postActions';
import '../../styles/App.css';



class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { post: { posts, loading } } = this.props;
    return (
      <div>
        <div className="post-feed">
          <br />
          {
            (!posts || loading)? <Spinner />: <PostFeed posts={posts} />
          }
        </div>
        <div className="row">
          <div className="col" />
          <div className="col">
            <div>
              <ul className="pagination pagination-lg">
                <li className="page-item disabled">
                  <a className="page-link" href="#">&laquo;</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">&raquo;</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="col" />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
     
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { getPosts })(Posts);
