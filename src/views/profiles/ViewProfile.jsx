import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileView from '../../components/profiles/ViewProfile';
import { fetchProfile, editProfile } from '../../redux/actions/profile.actions';

class ViewProfile extends Component {
  componentDidMount() {
    const { fetchProfile } = this.props;
    const { match } = this.props;
    const username = match.params.username;
    fetchProfile(username);
  }

  render() {
    const { profile: { username, bio, img_url, first_name, last_name } } = this.props;
    return (
      <ProfileView
        username={username}
        image={img_url}
        bio={bio}
        firstName={first_name}
        lastName={last_name}
      />
    );
  }
}

ViewProfile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
};

ViewProfile.defaultProps = {
  profile: {}
};

const mapStateToProps = state => ({
  profile: state.Profile.profile
});

export default connect(mapStateToProps, { fetchProfile, editProfile })(ViewProfile);

