import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import StarRatings from 'react-star-ratings';
import Highlighter from 'react-highlight-words';
import Spinner from './Spinner';
import { getPost, deletePost } from '../../redux/actions/postActions';
import appAction from '../../redux/actions/app.action';
import '../../styles/style.css';
import '../../styles/Likes.css';
import Likes from '../Likes/LikesContainer';
import Comments from '../comments/CommentsContainer';
import ShareModal from '../../components/share_modal/ShareArticleComponent';
import { starClickAction } from '../../redux/actions/rateArtcicles';
import ArticleRating from '../../components/RateArticles/RateArtcles';
import highlightActions from '../../redux/actions/highlight.action';
import Highlight from '../highlight/HighlightContainer';

const { getHighlightsAction, showHighlighButton, closeHighlightButton } = highlightActions;
class Post extends Component {
  static fields = ['body', 'title', 'description']
  state = {
    baseOffset: 0,
    extentOffset: 0
  };
  componentDidMount = async () => {
    const { match, singlePost, action, getHighlights } = this.props;
    const { params } = match;
    const { slug } = params;
    await singlePost(slug);
    await action();
    await getHighlights(slug);
  }
  onDeleteClick = (slug) => { const { history, delPost } = this.props; if (window.confirm('Delete This article?')) { delPost(slug); history.push('/postarticle'); } }
  
  getHighlights = (article, filed) => {
    let highlights = [];
    const data = article.highlights;
    if (data) {
      let highlightData = data.data.highlights;
      highlightData.filter((item) => (item.field == filed)).map((value, index) => {
        highlights.push(value.highlighted_text);
      });
    }
    return highlights;
  }
  showHighlightOptions = (field) => {
    const baseOffset = document.getSelection().baseOffset;
    const extentOffset = document.getSelection().extentOffset - 1;

    if ((extentOffset - baseOffset) >= 1) {
      const { showHighlight, closeHighlight } = this.props;
      showHighlight(field);
      Post.fields.filter((item) => item != field).map((value, index) => {
        closeHighlight(value);
      });
      this.setState({
        [field]: true,
        baseOffset,
        extentOffset
      });
    }
  }
  render() {
    const { post: { post, loading }, currentUser, starClick, highlight, highlightmodal } = this.props;
    const { body, title, description } = highlight;
    const { match } = this.props;
    const { params } = match;
    const { slug } = params;
    const { baseOffset, extentOffset } = this.state;
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
                      <img src={post[item].author.image} className="rounded-circle" alt="Cinque Terre" width="50" height="50" />
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
                  <div className="row">
                    <div className="col text-left">
                      <div role="presentation" onMouseUp={() => this.showHighlightOptions('title')}>
                        <Highlight
                          show={title}
                          showModal={highlightmodal.title}
                          article={post[item]}
                          baseOffset={baseOffset}
                          extentOffset={extentOffset}
                          section="title"
                          currentUser={currentUser}
                        />
                        <h1>
                          <Highlighter
                            onMouseUp={() => this.showHighlightOptions('title')}
                            id="title"
                            highlightClassName="text-highlight"
                            searchWords={currentUser ? this.getHighlights(post[item], 'title') : []}
                            autoEscape
                            textToHighlight={post[item].title}
                          />
                        </h1>
                      </div>
                    </div>
                    <div className="fivestar">
                      <StarRatings
                        starRatedColor="#ffa534"
                        rating={post[item].ratings.average_ratings / 5 || 0}
                        starDimension="35px"
                        numberOfStars={1}
                      />
                    </div>
                    <div className="col-sm-2 text-right">
                      <ShareModal article={post[item]} />
                    </div>
                  </div>
                  <hr />
                  <br />
                  <div role="presentation" onMouseUp={() => this.showHighlightOptions('description')}>
                    <Highlight
                      show={description}
                      showModal={highlightmodal.description}
                      article={post[item]}
                      baseOffset={baseOffset}
                      extentOffset={extentOffset}
                      section="description"
                      currentUser={currentUser}
                    />
                    <h5 className="text-muted ">
                      <Highlighter
                        onMouseUp={() => this.showHighlightOptions('description')}
                        id="description"
                        highlightClassName="text-highlight"
                        searchWords={currentUser ? this.getHighlights(post[item], 'description') : []}
                        autoEscape
                        textToHighlight={post[item].description}
                      />
                    </h5>
                  </div>
                  <hr />
                  <div role="presentation" onMouseUp={() => this.showHighlightOptions('body')}>
                    <Highlight
                      show={body}
                      showModal={highlightmodal.body}
                      article={post[item]}
                      baseOffset={baseOffset}
                      extentOffset={extentOffset}
                      section="body"
                      currentUser={currentUser}
                    />
                    <Highlighter
                      onMouseUp={() => this.showHighlightOptions('body')}
                      id="body"
                      highlightClassName="text-highlight"
                      searchWords={currentUser ? this.getHighlights(post[item], 'body') : []}
                      autoEscape
                      textToHighlight={renderHTML(post[item].body)}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="row text-muted">
                    <div className="col">
                      <i className="fas fa-tags fa-1x" aria-hidden="true">
                        {post[item].tagList.map((singletag, j) => (
                          <button key={`${j + 1}`} type="button" className="btn btn-outline-info tag-btn">
                            {singletag}
                          </button>
                        ))}
                      </i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row text-left text-muted meta-data">
                    <div className="col rate">
                      <ArticleRating currentUser={currentUser} starClick={starClick} article={post[item]} />
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
                  <div className=" text-muted" />
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
                        : ''}
                    </div>
                    <div className="col">
                      <Link to="#null">
                        {currentUser === post[item].author.username ? <i className="fa fa-trash fa-1x" onClick={() => this.onDeleteClick(post[item].slug)} aria-hidden="true"> Delete</i>
                          : ''}
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
  action: PropTypes.func.isRequired,
  starClick: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  getHighlights: PropTypes.func.isRequired,
  highlight: PropTypes.object.isRequired,
  closeHighlight: PropTypes.func.isRequired,
  showHighlight: PropTypes.func.isRequired,
  highlightmodal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  currentUser: state.signin.currentUser,
  highlight: state.highlight,
  highlightmodal: state.highlightmodal
});

export default connect(mapStateToProps, {
  singlePost: getPost, delPost: deletePost, action: appAction, starClick: starClickAction,
  getHighlights: getHighlightsAction, showHighlight: showHighlighButton, closeHighlight: closeHighlightButton
})(Post);
