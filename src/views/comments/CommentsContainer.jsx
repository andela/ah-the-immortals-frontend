import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import isLoggedIn from '../../services/checkAuthentication';
import ViewComments from '../../components/comments/CommentsComponent';
import CreateComment from '../../components/comments/CreateCommentComponent';
import { createCommentAction, getCommentsAction } from '../../redux/actions/Comments.action';

class Comments extends Component {
  state = {
    body: '', 
    loading: false,
  };
  componentWillMount(){
    const { getCommentsAction, slug } = this.props;
    getCommentsAction(slug);
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const isAuthenticated = isLoggedIn();
    const { createCommentAction, slug } = this.props;
    { isAuthenticated ? (createCommentAction(this.state, slug, () => this.setState({
      body: '',
      loading: false
    }))): (  
      this.setState({loading: false}),    
      toast.error('Please log in to comment!')
    );
    }
  };
  render() {
    const { slug, currentUser } = this.props;
    const { loading } = this.state;
    const { data } = this.props;
    const comments = data.comments;
    const { body } = this.state;
    return (
      <div>
        <CreateComment onChange={this.onChange} value={body} onSubmit={this.onSubmit} slug={slug} isLoading={loading} />
        {  comments  && (
          <div className="comment-tabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item active">
                <a
                  className="nav-link active"
                  href="#comments-logout"
                  role="tab"
                  data-toggle="tab"
                >
                  <h5 className="text-capitalize">
                  Comments
                    {' '}
                    <span className="comments-count">{comments.length}</span>
                  </h5>
                </a>
              </li>
              <li className="nav-item" />
            </ul>
            <ViewComments comments={comments} slug={slug} user={currentUser} handleDelete={this.handleDelete} />
            {' '}
          </div>
        ) }
      </div> 
    );
  }
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
  getCommentsAction: PropTypes.func.isRequired,
  createCommentAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};

const mapStateToProps = ({comments, signin }) => ({
  data: comments.data,
  currentUser: signin.currentUser
});

export default connect(mapStateToProps, { getCommentsAction, createCommentAction })(Comments);
