import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileForm = ({ handleSubmit, handleChangeProfile, handleFileUpload}) => (
  <div>  
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">
          First Name
          <br />
          <input type="text" className="form-control" name="first_name" onChange={handleChangeProfile} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="lastname">
          Last Name
          <br />
          <input type="text" className="form-control" name="last_name" onChange={handleChangeProfile} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="bio">
          Bio
          <br />
          <textarea className="form-control" name="bio" onChange={handleChangeProfile} />
        </label>
      </div>
      <div className="btn-group mr-2" role="group">
        <button type="submit" className="btn btn-primary" id="save">Save</button>
      </div>
      <div className="btn-group" role="group">
        <button type="submit" className="btn btn-primary" onClick={handleFileUpload}>Upload Photo</button>
      </div>
    </form>
  </div>
);

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeProfile: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
};

export default ProfileForm;
