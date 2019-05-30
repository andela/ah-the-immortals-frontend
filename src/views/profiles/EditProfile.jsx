import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ProfileForm from '../../components/profiles/EditProfile';
import { editProfile } from '../../redux/actions/profile.actions';

class ProfileContainer extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const { editProfile: Profile } = this.props;
    Profile(this.state);
  }

  handleChangeProfile = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    toast.dismiss(1);
  }

  handleFileUpload = (e) => {
    e.preventDefault();
    const widget = window.cloudinary.openUploadWidget({
      cloud_name: 'grean',
      upload_preset: 'green_immortal',
      cropping: true,
      sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'search', 'instagram'],
    }, (error, result) => {
      if (result.event === 'success') {
        this.setState({
          image: result.info.secure_url
        });
        const { editProfile: Profile } = this.props;
        Profile(this.state);
      }
    });
  }

  render = () => {
    const { profile } = this.props;
    return (
      <div className="container profile-form">
        <ProfileForm
          handleSubmit={this.handleSubmit}
          handleChangeProfile={this.handleChangeProfile}
          handleFileUpload={this.handleFileUpload}
        />
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  editProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.Profile.profile
});

export default connect(mapStateToProps, { editProfile })(ProfileContainer);
