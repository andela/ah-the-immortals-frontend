import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileView from '../../components/profiles/ViewProfile';
import { fetchProfile, editProfile } from '../../redux/actions/profile.actions';
import { userFollowingAction, userFollowersAction } from '../../redux/actions/userFollow.action';

class ViewProfile extends Component {
  state = {};
  componentDidMount() {
    const { fetchProfile: Profile, userFollowingAction: userFollowing, userFollowersAction: userFollowers } = this.props;
    Profile(this.state);
    userFollowers();
    userFollowing();
  }
  render() {
    const { profile: { username, bio, img_url, first_name, last_name }, data: { userCount }, users: { count } } = this.props;
    return (
      <ProfileView
        username={username}
        image={img_url}
        bio={bio}
        firstName={first_name}
        lastName={last_name}
        following={userCount}
        followers={count}
      />
    );
  }
}

ViewProfile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  userFollowingAction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  userFollowersAction: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

ViewProfile.defaultProps = {
  profile: {}
};

const mapStateToProps = state => ({
  profile: state.Profile.profile,
  data: state.following,
  users: state.followers
});

export default connect(mapStateToProps, { fetchProfile, editProfile, userFollowingAction, userFollowersAction })(ViewProfile);
