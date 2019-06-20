import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewComments from '../../components/comments/CommentsComponent';
import CreateComment from '../../components/comments/CreateCommentComponent';
import { createCommentAction, getCommentsAction } from '../../redux/actions/Comments.action';

class Comments extends Component {
  state = {
    body: ''
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
    const { createCommentAction, slug } = this.props;
    createCommentAction(this.state, slug, () => this.setState({
      body: ''
    }));
  };
  render() {
    const { slug } = this.props;
    const { data } = this.props;
    const comments = data.comments;
    const { body } = this.state;
    return (
      <div>
        <CreateComment onChange={this.onChange} value={body} onSubmit={this.onSubmit} slug={slug} />
        {  comments ? (
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
            <ViewComments comments={comments} slug={slug} />
            {' '}
          </div>
        ): null }
      </div> 
    );
  }
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
  getCommentsAction: PropTypes.func.isRequired,
  createCommentAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = ({comments}) => ({
  data: comments.data,
});

export default connect(mapStateToProps, { getCommentsAction, createCommentAction })(Comments);
