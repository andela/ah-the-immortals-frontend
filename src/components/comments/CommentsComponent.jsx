import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Replies from '../../views/comments/RepliesContainer';

const ViewComments = ({ comments, slug }) => (
  comments.map((comment, index) => (
    <div className="tab-content" key={`${index + 1}`}>           
      <div className="media-body ml-3">
        <div className="card well">
          <div className="card-body bg-light">
            <div className="row mb-2">
              <div className="col-1">
                <Link to={`/Profile/${comment.author.username}`}>
                  <img className="avatar" src={comment.author.image} alt="profile" />
                </Link>
              </div>
              <div className="col-11 mt-2 mb-2">
                <p className="card-subtitle text-muted">{comment.author.username}</p>
                <p className="text-muted date-size">{moment(comment.createdAt).format('h:mm a, MMM Do YYYY')}</p>
                
              </div>
            </div>
            <p className="card-text">{comment.body}</p>
            <hr />
            <Button variant="outline-success" className="card-link btn-comment" data-toggle="collapse" data-target={`#createreply-${comment.id}`}>
              <i className="fas fa-share" />
              {' '}
              Reply
            </Button>
            <Button variant="outline-info" className="card-link btn-comment" data-toggle="collapse" data-target={`#replies-${comment.id}`}>              
              <i className="fas fa-comment-alt" />
              {' '}
              <span className="comments-count">
                {comment.replies.length}
              </span>
              {' '}
                replies
            </Button>
            <div className="collapse mt-3" id={`createreply-${comment.id}`}>
              <Replies id={comment.id} slug={slug} />
            </div>
          </div>
        </div>
      </div>
      { comment.replies[0] ? (
        <div className="collapse" id={`replies-${comment.id}`}>
          { comment.replies.map((reply, index) => (
            <div className="tab-pane" key={`${index + 1}`}>
              <div className="media-body ml-5">
                <div className="card well">
                  <div className="card-body bg-light">
                    <div className="row mb-2">
                      <div className="col-1">
                        <Link to={reply.author.username}>
                          <img className="avatar" src={reply.author.image} alt="profile" />
                        </Link>
                      </div>
                      <div className="col-11 mt-2 mb-2">
                        <p className="card-subtitle text-muted">{reply.author.username}</p>
                        <p className="text-muted date-size">{moment(reply.createdAt).format('h:mm a, MMM Do YYYY')}</p>
                      </div>
                    </div>
                    <p className="card-text">{reply.body}</p>
                  </div>
                </div>
              </div>       
            </div> 
          ))
          }
        </div> 
        
      ):
        ( <div />) }
    </div>


 
  )));

export default ViewComments;
