import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import EditComment from '../../components/comments/EditCommentComponent';
import { editCommentAction } from '../../redux/actions/Comments.action';

class Edit extends Component {
  state = {
    body: '',
    loading: false
  };
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const { editCommentAction, slug, id } = this.props;
    editCommentAction(this.state, slug, id, () => this.setState({
      body: '',
      loading: false
    }));
    toast.success('Comment edited successfully');
  };
  render() {
    const { body, loading } = this.state;
    const { placeholder } = this.props;
    return (
      <EditComment editSubmit={this.onSubmit} editWrite={this.onChange} value={body} isLoading={loading} placeholder={placeholder} />
    );
  }
}
Edit.propTypes = {
  editCommentAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const mapStateToProps = ({comments}) => ({
  data: comments.data,
});

export default connect(mapStateToProps, { editCommentAction })(Edit);
