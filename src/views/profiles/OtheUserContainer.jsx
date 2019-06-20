import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserProfileView from '../../components/profiles/UserProfileComponent';
import { getProfile } from '../../redux/actions/profile.actions';
import { followAction, unfollowAction } from '../../redux/actions/userFollow.action';

class ViewUserProfile extends Component {
  state = {};
  componentDidMount() {
    const { getProfile: fetchProfile, match: { params: { profile } } } = this.props;
    fetchProfile(profile);
  }
  handleFollow = (e) => {
    e.preventDefault();
    const { followAction: follow, unfollowAction: unfollow, profile: { following }, match: { params: { profile } } } = this.props;
    const click = (profile) => following ? unfollow(profile) : follow(profile);
    click(profile);
  }
  render() {
    const { profile: { username, bio, img_url, first_name, last_name, following, articles }, data: { userCount }, users: { count }, match } = this.props;
    return (
      <UserProfileView
        username={username}
        image={img_url}
        bio={bio}
        firstName={first_name}
        lastName={last_name}
        following={following ? 'Unfollow' : 'Follow'}
        isFollowing={following}
        handleFollow={this.handleFollow}
        articles={articles}
        match={match}
        followings={userCount}
        followers={count}
      />
    );
  }
}

ViewUserProfile.propTypes = {
  profile: PropTypes.shape({}),
  getProfile: PropTypes.func.isRequired,
  followAction: PropTypes.func.isRequired,
  unfollowAction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  match: PropTypes.shape({})
};

ViewUserProfile.defaultProps = {
  profile: {},
  match: {}
};

const mapStateToProps = state => ({
  profile: state.Profile.profile,
  data: state.following,
  users: state.followers
});

export default connect(mapStateToProps, { getProfile, followAction, unfollowAction })(ViewUserProfile);
