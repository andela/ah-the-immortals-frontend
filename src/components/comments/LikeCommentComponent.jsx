import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Likes.css';
import '../../styles/commentlikes.css';
import { likeDeterminer, styleDeterminer } from '../../services/styleSelector';

const LikeDislikeComment = ({ handleClick, comment, isAuthenticated }) => {
  const { likesInfo } = comment;
  const { like, dislike, like_count, dislikes_count } = likesInfo;
  return (
    <div className={`commentlike ${likeDeterminer(like,dislike,isAuthenticated).underline}`}>
      <div>
        <i
          id="like"
          className="fas fa-thumbs-up fa-1x like-icon left-icon"
          style={{color:`${styleDeterminer(like,isAuthenticated).color}`}}
          aria-hidden="true"
          comment={comment}
          onClick={() => handleClick(comment.id, 'like')}
        />
      </div>
      <div className={`likes-count ${styleDeterminer(like,isAuthenticated).render}`}>
        {like_count}
      </div>
      <div>
        <i
          id="dislike"
          className="fas fa-thumbs-up fa-rotate-180 fa-1x like-icon right-icon"
          aria-hidden="true"
          style={{color:`${styleDeterminer(dislike,isAuthenticated).color}`}}
          onClick={() => handleClick(comment.id, 'dislike')}
        />
      </div>
      <div className={`likes-count ${styleDeterminer(dislike,isAuthenticated).render}`}>
        {dislikes_count}
      </div>
    </div>
  );
};

LikeDislikeComment.propTypes = {
  handleClick: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.string.isRequired
};

export default LikeDislikeComment;
