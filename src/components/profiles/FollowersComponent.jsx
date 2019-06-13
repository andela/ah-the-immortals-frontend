import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../services/images/profile.png';

const Followers = (user) => {
  return (
    <div>
      <div className="user-card">
        <div className="follow-card list-card">
          <img className="user-avatar float-left" src={user.img_url || profileImage} alt="Profile pic" />
          <div className="user-data">
            <h6><Link to={`/profile/${user.username}`}>{user.username}</Link></h6>
            <p>{user.bio}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Followers;
