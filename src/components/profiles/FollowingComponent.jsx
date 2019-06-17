import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../services/images/profile.png';

const Following = (follower) => {
  return (
    <div>
      <div className="user-card">
        <div className="follow-card list-card">
          <img className="user-avatar float-left" src={follower.image || profileImage} alt="Profile pic" />
          <div className="user-data">
            <h6><Link to={`/profile/${follower.username}`}>{follower.username}</Link></h6>
            <p>{follower.bio}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Following;
