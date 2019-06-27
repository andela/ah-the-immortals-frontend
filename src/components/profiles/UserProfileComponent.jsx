import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from '../../services/images/profile.png';
import Footer from '../home/HomeFooter';
import ProfileArticlesContainer from '../../views/profiles/ProfileArticlesContainer';
import FollowersContainer from '../../views/profiles/FollowersContainer';
import FollowingContainer from '../../views/profiles/FollowingContainer';
import BookMarkedArticles from '../../views/profiles/ListBookmarksContainer';

const UserProfileView = (props) => {
  const { username, firstName, lastName, bio, image, articles, following, followings, followers, handleFollow, match } = props;
  return (
    <div>
      <Container className="profile">
        <div className="container-fluid">
          <div className="container">
            <div className="card profile-card">
              <div className="row">
                <div className="col-xs-3">
                  <div className="float-left profile-avatar">
                    <img src={image || profileImage} alt="Avatar" className="prof-avatar" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="profile-bio">
                    <div className="row">
                      <div className="col-xs-3">
                        <h5>
                          <b>
                            {
                              `${firstName} ${lastName}`
                            }
                          </b>
                        </h5>
                      </div>
                      <div className="col-sm-4">
                        <h5 className="profile-username">
                          <span className="small">
                            @
                            {
                              `${username}`
                            }
                          </span>
                        </h5>
                      </div>
                      <p>{bio || 'This is my biography'}</p>
                      <div>
                        <Link to={`/profile/${username}`}>
                          <Button className="btn primary" type="button" onClick={handleFollow}>
                            {following}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                <b>
                  {`${articles.length} `}
                </b>
                Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#followers">
                <b>
                  {`${followers} `}
                </b>
                Followers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#following">
                <b>
                  {`${followings} `}
                </b>
                Following
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content profile-content-articles">
            <div className="tab-pane fade active show" id="home">
              <ProfileArticlesContainer />
            </div>
            <div className="tab-pane fade" id="following">
              <FollowingContainer match={match} />
            </div>
            <div className="tab-pane fade" id="followers">
              <FollowersContainer match={match} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};


UserProfileView.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  articles: PropTypes.array,
  following: PropTypes.string,
  handleFollow: PropTypes.func.isRequired,
  match: PropTypes.shape({}),
  followings: PropTypes.number,
  followers: PropTypes.number
};

UserProfileView.defaultProps = {
  username: '',
  firstName: '',
  lastName: '',
  image: '',
  bio: '',
  following: '',
  articles: [],
  match: {},
  followings: 0,
  followers: 0
};

export default UserProfileView;

