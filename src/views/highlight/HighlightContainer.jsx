import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HighlightIcons from '../../components/highlight/HighlightComponent';
import highlightActions from '../../redux/actions/highlight.action';
import HighlightComment from '../../components/highlight/CommentComponent';
import '../../styles/style.css';

const { createHighlightAction, closeHighlightButton, showHighlighButton,
  showHighlightModal, closeHighlightModal, updateHighlightAction } = highlightActions;

class Highlight extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    giveHighlight: PropTypes.func.isRequired,
    baseOffset: PropTypes.number.isRequired,
    extentOffset: PropTypes.number.isRequired,
    section: PropTypes.string.isRequired,
    closeHighlight: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    displayModal: PropTypes.func.isRequired,
    updatehighlight: PropTypes.func.isRequired
  };
  static fields = ['title', 'body', 'description'];
  state = {
    show: false,
    showModal: false,
    comment: '',
    currentUser: ''
  };
  static getDerivedStateFromProps = (props, state) => (props.show != state.show) ?
    ({
      show: props.show,
      article: props.article,
      showModal: props.showModal,
      currentUser: props.currentUser
    }) : {
      show: state.show,
      article: props.article,
      showModal: props.showModal,
      currentUser: props.currentUser
    };
  getComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  };
  handlehighlight = async (section, baseOffset, extentOffset, article, comment = '') => {
    const { giveHighlight, closeHighlight, closeModal } = this.props;
    if (comment) {
      await giveHighlight(article.slug, {
        field: section,
        start_index: baseOffset,
        end_index: extentOffset,
        comment: comment
      });
      closeModal(section);
      closeHighlight(section);
    } else {
      await giveHighlight(article.slug, {
        field: section,
        start_index: baseOffset,
        end_index: extentOffset
      });
      closeHighlight(section);
    }
  };
  handleModalClose = (section) => {
    const { closeModal, closeHighlight } = this.props;
    closeModal(section);
    closeHighlight(section);
  }
  containsHighlight = (article, section, baseOffset, extentOffset) => {
    let highlights = [];
    if (article.highlights) {
      highlights = article.highlights.data.highlights.filter((item) => (item.field == section &&
        item.start_index == baseOffset && item.end_index == extentOffset && item.comment));
    }
    return highlights;
  }
  updateComment = async (slug, comment, id, section) => {
    const { updatehighlight, closeModal, closeHighlight } = this.props;
    await updatehighlight(slug, {
      comment: comment,
    }, id);
    closeModal(section);
    closeHighlight(section);
  };
  handleComment = (section) => {
    const { displayModal } = this.props;
    displayModal(section);
  };
  render = () => {
    const { show, showModal, comment, currentUser } = this.state;
    const { baseOffset, extentOffset, section, article } = this.props;
    if (currentUser) {
      return (
        <div>
          <HighlightIcons
            show={show}
            handlehighlight={this.handlehighlight}
            handleComment={this.handleComment}
            section={section}
            baseOffset={baseOffset}
            extentOffset={extentOffset}
            article={article}
          />
          <HighlightComment
            showModal={showModal}
            handleModalClose={this.handleModalClose}
            section={section}
            article={article}
            comment={comment}
            getComment={this.getComment}
            baseOffset={baseOffset}
            extentOffset={extentOffset}
            handleSubmit={this.handlehighlight}
            containsHighlight={this.containsHighlight}
            updateComment={this.updateComment}
            currentUser={currentUser}
          />
        </div>
      );
    } else {
      return null;
    }
  };
}
export default connect(null, {
  giveHighlight: createHighlightAction,
  showHighlight: showHighlighButton,
  closeHighlight: closeHighlightButton,
  displayModal: showHighlightModal,
  closeModal: closeHighlightModal,
  updatehighlight: updateHighlightAction
})(Highlight);
