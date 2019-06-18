import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import profileImage from '../../services/images/profile.png';
import EditProfile from '../../views/profiles/EditProfile';
import Footer from '../home/HomeFooter';
import isLoggedIn from '../../services/checkAuthentication';
import createBrowserHistory from '../../services/history';
import FollowersContainer from '../../views/profiles/FollowersContainer';
import FollowingContainer from '../../views/profiles/FollowingContainer';

const history = createBrowserHistory; 
const ProfileView = (props) => {
  const { username, firstName, lastName, bio, image, following, followers } = props;
  const loggedIn= isLoggedIn();
  if(!loggedIn){
    history.push('/');
  }
  return (
    <div>
      <Container className="profile">
        <div className="container-fluid">
          <div className="container">
            <div className="card profile-card">
              <div className="centered">
                <div className="float-left profile-avatar">
                  <img src={image || profileImage} alt="Avatar" className="prof-avatar" />
                </div>
              </div>
              <div className="profile-bio">
                <div className="row">
                  <div className="col-xs-3">
                    <h5>
                      {
                        `${firstName} ${lastName}`
                      }
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
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                <b> 3 </b>
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
              <div className="row">
                <div className="col">
                  <div className="card">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="article" />
                    <div className="card-body">
                      <h4 className="card-title"><a href="#card">Article title</a></h4>
                      <p className="card-text">Once Leonidas realizes he will be surrounded, he sends away the Greek allies to alert the cities to the south. Being too few to hold the pass, the Spartans instead attack the Persian front, where Xerxes is nearby.</p>
                      <a href="#view" className="btn btn-primary">View</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="article" />
                    <div className="card-body">
                      <h4 className="card-title"><a href="#card">Article title</a></h4>
                      <p className="card-text">Once Leonidas realizes he will be surrounded, he sends away the Greek allies to alert the cities to the south. Being too few to hold the pass, the Spartans instead attack the Persian front, where Xerxes is nearby.</p>
                      <a href="#view" className="btn btn-primary">View</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="article" />
                    <div className="card-body">
                      <h4 className="card-title"><a href="#card">Article title</a></h4>
                      <p className="card-text">Once Leonidas realizes he will be surrounded, he sends away the Greek allies to alert the cities to the south. Being too few to hold the pass, the Spartans instead attack the Persian front, where Xerxes is nearby.</p>
                      <a href="#view" className="btn btn-primary">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade edit-profile" id="profile">
              <EditProfile />
            </div>
            <div className="tab-pane fade" id="following">
              <FollowingContainer />
            </div>
            <div className="tab-pane fade" id="followers">
              <FollowersContainer />
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
  following: PropTypes.number
};

ProfileView.defaultProps = {
  username: '',
  firstName: '',
  lastName: '',
  image: '',
  bio: '',
  following: 0,
  followers: 0
};

export default ProfileView;

