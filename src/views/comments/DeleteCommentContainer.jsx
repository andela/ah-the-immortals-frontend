import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Spinner } from 'react-bootstrap';
import { deleteCommentAction } from '../../redux/actions/Comments.action';

class DeleteComment extends Component {
  state = {
    loading: false
  };
  handleDelete = (e) => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    const { deleteCommentAction, slug, id } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteCommentAction(slug, id);
      this.setState({
        loading: false
      });
      toast.success('Comment deleted');
    } else {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { loading } = this.state;
    return (
      loading ? (
        <Button variant="danger" className="card-link btn-comment">
          <Spinner
            animation="border"
            id="loading-btn"
            size="sm"
            role="status"
          />
        </Button>
      ): (
        <Button onClick={this.handleDelete} variant="danger" className="card-link btn-comment"><i className="fas fa-trash-alt" /></Button>)
    );
  }
}
DeleteComment.propTypes = {
  deleteCommentAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({comments}) => ({
  data: comments.data,
});

export default connect(mapStateToProps, { deleteCommentAction })(DeleteComment);
