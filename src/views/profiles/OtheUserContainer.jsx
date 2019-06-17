import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserProfileView from '../../components/profiles/UserProfileComponent';
import { getProfile } from '../../redux/actions/profile.actions';
import { followAction, unfollowAction } from '../../redux/actions/userFollow.action';

class ViewUserProfile extends Component {
  state = {};
  componentDidMount() {
    const { getProfile: fetchProfile, match: {params: { otherUser }} } = this.props;
    fetchProfile(otherUser); 
  }
  handleFollow = (e) => {
    e.preventDefault();
    const { followAction: follow, unfollowAction: unfollow, profile: {following}, match: {params: { otherUser }} } = this.props;
    const click = (otherUser) => following?unfollow(otherUser):follow(otherUser);
    click(otherUser);
  }
  render() {
    const { profile: { username, bio, img_url, first_name, last_name, following } } = this.props;
    return (
      <UserProfileView
        username={username}
        image={img_url}
        bio={bio}
        firstName={first_name}
        lastName={last_name}
        following={following ? 'Unfollow': 'Follow'}
        isFollowing={following}
        handleFollow={this.handleFollow}
      />
    );
  }
}

ViewUserProfile.propTypes = {
  profile: PropTypes.shape({}),
  getProfile: PropTypes.func.isRequired,
  followAction: PropTypes.func.isRequired,
  unfollowAction: PropTypes.func.isRequired,
  match: PropTypes.shape({})
};

ViewUserProfile.defaultProps = {
  profile: {},
  match: {}
};

const mapStateToProps = state => ({
  profile: state.Profile.profile
});

export default connect(mapStateToProps, { getProfile, followAction, unfollowAction })(ViewUserProfile);
