import React from 'react';
import PropTypes from 'prop-types';

const SocialComponent = ({ facebook, google, twitter }) => {
  return (
    <div>
      <button className="btn btn-link" id="fb" onClick={facebook} type="button">
        <img src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="avatar" />
      </button>
      <button className="btn btn-link" id="ggl" onClick={google} type="button">
        <img src="https://img.icons8.com/color/48/000000/google-plus.png" alt="avatar" />
      </button>
      <button className="btn btn-link" id="twt" onClick={twitter} type="button">
        <img src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="avatar" />
      </button>
    </div>
  );
};

SocialComponent.propTypes = {
  facebook: PropTypes.func.isRequired,
  google: PropTypes.func.isRequired,
  twitter: PropTypes.func.isRequired,
};

export default SocialComponent;
