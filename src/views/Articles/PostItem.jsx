import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import '../../styles/App.css';


class PostItem extends Component {


  render() {
    const { post } = this.props;
    const {created_at} = post;
    return (
      <div className="quotes">
        <div className="box box1">

          <div className="">
            <div className="title-header">
              {post.title}
              <div className="timer">
                <div className="bookmark">
                  <i className="far fa-bookmark" />
                </div>
                <span className="readingTime">
                  {post.readtime}
                </span>
              </div>
            </div>
            <div className="author">
              {post.author.username}
            </div>
            <div className="description">
              {post.description}
              <Link to={`/post/${post.slug}`}>
                .... Read More
              </Link>
            </div>
            <div className="date-read-time">
              <time>
                <Moment format="DD-MMM-YYYY">
                  {created_at}
                </Moment>
              </time>
            </div>
          </div>
        </div>
      </div>
      
     
    );
  }
}



PostItem.propTypes = {

  post: PropTypes.object.isRequired

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(
  PostItem
);
