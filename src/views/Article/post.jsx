import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from './Spinner';
import { getPost, deletePost } from '../../redux/actions/postActions';
import appAction  from '../../redux/actions/app.action';
import '../../styles/style.css';
import '../../styles/Likes.css';
import Likes from '../Likes/LikesContainer';
import Comments from '../comments/CommentsContainer';


class Post extends Component {
  componentDidMount() {
    const { match, singlePost, action } = this.props;
    const { params } = match;
    const { slug } = params;
    singlePost(slug);
    action();
  }
  onDeleteClick = (slug) => {const { history, delPost } = this.props;if (window.confirm('Delete This article?')) {delPost(slug);history.push('/postarticle');}
  }

  render() {
    const { post: { post, loading }, currentUser } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { slug } = params;
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
                      <i className="fas fa-tags fa-1x" aria-hidden="true">      
                        {post[item].tagList.map(singletag => (
                          <button key={`${i + 1}`} type="button" className="btn btn-outline-info tag-btn">
                            {singletag}
                          </button>
                        ))}
                      </i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row text-left text-muted meta-data">
                    <div className="col">
                      <i className="fas fa-star-half-alt fa-1x" aria-hidden="true"> Ratings</i>
                    </div>
                    <br />
                    <div className="col">
                      <i className="fas fa-heart fa-1x" aria-hidden="true"> Favorites</i>
                    </div>
                    <br />
                    <div className="col ">
                      <Likes article={post[item]} />
                    </div>
                    <br />
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
                      {currentUser === post[item].author.username ? (
                        <Link to={`/edit/${post[item].slug}`}>
                          <i className="fas fa-edit fa-1x" aria-hidden="true"> Edit</i>
                        </Link>
                      )
                        : null}
                    </div>
                    <div className="col">
                      <Link to="#null">
                        {currentUser === post[item].author.username ? <i className="fa fa-trash fa-1x" onClick={() => this.onDeleteClick(post[item].slug)} aria-hidden="true"> Delete</i>
                          : null}
                      </Link>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr />
                  <Comments slug={slug} />
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
  match: PropTypes.object.isRequired,
  action:PropTypes.func.isRequired,
  currentUser:PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  currentUser: state.signin.currentUser,
});

export default connect(mapStateToProps, { singlePost: getPost, delPost: deletePost, action: appAction })(Post);
