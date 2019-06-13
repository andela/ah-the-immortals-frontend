import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from './Spinner';
import { getPost, deletePost } from '../../redux/actions/postActions';
import {CurrentUser} from '../../services/api';


class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.slug);
  }
  onDeleteClick(slug) {
    const { history } = this.props;
    
    if (window.confirm('Delete This article?')) {
      this.props.deletePost(slug);
      history.push('/postarticle');
      
    }
  }

  render() {
    const { post, loading } = this.props.post;
    
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

            <div className="container-fluid text-center" key={i}>
              <div className="row content">
                <div className="col-sm-2 sidenav" />
                <div className="col-sm-8 text-left">

                  <h1>{post[item].title}</h1>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src="https://img.icons8.com/material/50/000000/user-male-circle.png" className="rounded-circle" alt="Cinque Terre" width="50" height="50" />
                      {' '}
                      {post[item].author.username}
                    </div>
                    <div className="col-sm-4" />
                    <div className="col-sm-4 text-left">
                    Read Time :
                      {' '}
                      {post[item].readtime}
                    </div>
                  </div>
                  <hr />
                  <h4>{post[item].description}</h4>
                  {renderHTML(post[item].body)}
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-sm-4">
                      Ratings:
                        {post[item].ratings}

                      </div>
                      <div className="col-sm-4">
                    Tags:
                        {post[item].taglist}
                      </div>
                      <div className="col-sm-4">
                    Likes:
                        {post[item].like_info.likeCount}
                      </div>
                      <div className="col-sm-4">
                    DisLikes:
                        {post[item].like_info.dislikeCount}
                      </div>
                      <div className="col-sm-4">
                    favorites:
                        {post[item].favorites.favoritesCount}
                      </div>
                      <div className="col-sm-4">
                    Published on:
                        <Moment format="DD-MMM-YYYY">
                          {post[item].created_at}
                        </Moment>
                      </div>
                    </div>
                  </li>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-sm-3">
                      { CurrentUser === post[item].author.username ? (
                        <Link to={`/edit/${post[item].slug}`}>
                          <i className="fas fa-edit fa-1x" aria-hidden="true"> Edit</i>
                        </Link>
                      )
                        : null }
                      
                    </div>
                    <div className="col-sm-6" />
                    <div className="col-sm-3 text-right">
                      { CurrentUser === post[item].author.username ? <i className="fa fa-trash fa-1x" style={{color: 'Tomato'}} onClick={this.onDeleteClick.bind(this, post[item].slug)} aria-hidden="true"> Delete</i>
                        : null }
                      
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
                <div className="col-sm-2 sidenav" />
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
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost, deletePost })(Post);
