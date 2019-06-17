import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from '../../services/images/profile.png';
import Footer from '../home/HomeFooter';

const UserProfileView = (props) => {
  const { username, firstName, lastName, bio, image, following, handleFollow } = props;
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
              <h4>
                @
                {
                  `${username || 'username'} [${firstName} ${lastName}]`
                }
              </h4>
              <p>{bio || 'This is my biography'}</p>
              <div>
                <Link to={`/userprofile/${username}`}>
                  <Button className="btn primary" type="button" onClick={handleFollow}>
                    {following}
                  </Button>
                </Link>
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
  following: PropTypes.string,
  handleFollow: PropTypes.func.isRequired
};

UserProfileView.defaultProps = {
  username: '',
  firstName: '',
  lastName: '',
  image: '',
  bio: '',
  following: '',
};

export default UserProfileView;

