import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from './Spinner';
import { getPost, deletePost } from '../../redux/actions/postActions';
import { CurrentUser } from '../../services/api';
import '../../styles/style.css';


class Post extends Component {
  componentDidMount() {
    const { match, singlePost } = this.props;
    const { params } = match;
    const { slug } = params;
    singlePost(slug);
  }
  onDeleteClick = (slug) => {
    const { history, delPost } = this.props;
    if (window.confirm('Delete This article?')) {
      delPost(slug);
      history.push('/postarticle');
    }
  }

  render() {
    const { post: { post, loading } } = this.props;
    if (post === null || loading || Object.keys(post).length === 0) {
      <Spinner />;
    }

    return (
      <div>
        <br />
        <br />
        <br />
        {
          Object.keys(post).map((item, i) => (

            <div className="container-fluid text-center" key={`${i + 1}`}>
              <div className="row content">
                <div className="col-sm-2 sidenav text-left text-muted" />
                <div className="col-sm-8 text-left">
                  <div className="row">
                    <div className="col text-left">
                      <img src="https://img.icons8.com/material/50/000000/user-male-circle.png" className="rounded-circle" alt="Cinque Terre" width="50" height="50" />
                      {' '}
                      {post[item].author.username}
                    </div>
                    <div className="col text-muted text-right">
                      {post[item].readtime}
                      {' '}
                      Read
                    </div>
                  </div>
                  <br />
                  <h1>{post[item].title}</h1>
                  <hr />
                  <br />
                  <h5 className="text-muted ">{post[item].description}</h5>
                  <hr />
                  {renderHTML(post[item].body)}
                  <br />
                  <br />
                  <div className="row text-muted">

                    <div className="col">
                      <i className="fas fa-tags fa-1x" aria-hidden="true">Tags</i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row text-left text-muted">
                    <div className="col">
                      <i className="fas fa-star-half-alt fa-1x" aria-hidden="true"> Ratings</i>
                    </div>
                    <br />
                    <div className="col">
                      <i className="fas fa-heart fa-1x" aria-hidden="true"> Favorites</i>
                    </div>
                    <br />
                    <div className="col ">
                      <i className="fas fa-thumbs-up fa-1x" aria-hidden="true"> Likes</i>
                    </div>
                    <br />
                    <div className="col">
                      <i className="fas fa-thumbs-down fa-1x" aria-hidden="true"> DisLikes</i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className=" text-muted">
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far far fa-star fa-1x" aria-hidden="true"> Rate</i>

                  </div>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col">
                      Published on:
                      <Moment format="DD-MMM-YYYY">
                        {post[item].created_at}
                      </Moment>
                    </div>
                    <div className="col ">
                      {CurrentUser === post[item].author.username ? (
                        <Link to={`/edit/${post[item].slug}`}>
                          <i className="fas fa-edit fa-1x" aria-hidden="true"> Edit</i>
                        </Link>
                      )
                        : null}
                    </div>
                    <div className="col">
                      <Link to="#null">
                        {CurrentUser === post[item].author.username ? <i className="fa fa-trash fa-1x" onClick={() => this.onDeleteClick(post[item].slug)} aria-hidden="true"> Delete</i>
                          : null}
                      </Link>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="text-muted">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                          <h3>Comments</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-1">
                          <div className="thumbnail">
                            <img className="rounded-circle" alt="Cinque Terre" width="50" height="50" src="https://img.icons8.com/material/50/000000/user-male-circle.png" />
                          </div>
                        </div>

                        <div className="col-sm-5">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <strong>{post[item].author.username}</strong>
                              {' '}
                              <span className="text-muted">commented 5 days ago</span>
                            </div>
                            <div className="panel-body">
                              This is a comment
                              {post[item].comments}
                            </div>
                          </div>
                          <div>
                            <div className="col-sm-1">
                              <div className="thumbnail">
                                <img className="rounded-circle" alt="Cinque Terre" width="50" height="50" src="https://img.icons8.com/material/50/000000/user-male-circle.png" />
                              </div>
                            </div>
                            <div className="panel-heading">
                              <strong>{post[item].author.username}</strong>
                              {' '}
                              <span className="text-muted">commented 2 days ago</span>
                            </div>
                            <div className="panel-body">
                              This is reply comment
                              {post[item].comments}
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 sidenav text-left" />
              </div>
            </div>
          ))}
        <br />
        <br />
        <br />
        <br />
      </div>

    );
  }
}

Post.propTypes = {
  singlePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  delPost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { singlePost: getPost, delPost: deletePost })(Post);
