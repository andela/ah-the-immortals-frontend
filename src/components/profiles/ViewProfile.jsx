import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, Button } from 'react-bootstrap';
import profileImage from '../../services/images/profile.png';
import EditProfile from '../../views/profiles/EditProfile';
import Footer from '../home/HomeFooter';
import isLoggedIn from '../../services/checkAuthentication';
import createBrowserHistory from '../../services/history';
import FollowersContainer from '../../views/profiles/FollowersContainer';
import FollowingContainer from '../../views/profiles/FollowingContainer';
import ProfileArticlesContainer from '../../views/profiles/ProfileArticlesContainer';

const history = createBrowserHistory;
const ProfileView = (props) => {
  const { username, firstName, lastName, bio, image, following, followers, articles, match } = props;
  const loggedIn = isLoggedIn();
  if (!loggedIn) {
    history.push('/');
  }
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
                      <p>{bio}</p>
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
              <a className="nav-link" data-toggle="tab" href="#profile">Edit Profile</a>
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
                  {`${following} `}
                </b>
                Following
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content profile-content-articles">
            <div className="tab-pane fade active show" id="home">             
              <ProfileArticlesContainer />
            </div>
            <div className="tab-pane fade edit-profile" id="profile">
              <EditProfile />
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


ProfileView.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  articles: PropTypes.array,
  match: PropTypes.shape({})
};

ProfileView.defaultProps = {
  username: '',
  firstName: '',
  lastName: '',
  image: '',
  bio: '',
  following: 0,
  followers: 0,
  articles: [],
  match: {}
};

export default ProfileView;

