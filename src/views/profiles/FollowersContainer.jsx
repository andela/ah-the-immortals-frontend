import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Followers from '../../components/profiles/FollowersComponent';
import { userFollowersAction } from '../../redux/actions/userFollow.action';


class FollowersContainer extends Component {
  componentDidMount() {
    const { userFollowersAction: followersAction, match: {params: {profile}} } = this.props;
    followersAction(profile);
  }
  render() {
    const { users: { users } } = this.props;
    return (
      <div>
        {
          users.map(user => (
            <Followers
              {...user}
              key={user.username}
            />
          ))
        }
      </div>
    );
  }
}

FollowersContainer.propTypes = {
  userFollowersAction: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  match: PropTypes.shape({})
};

FollowersContainer.defaultProps = {
  match: {}
};

const mapStateToProps = state => ({
  users: state.followers
});

export default connect(mapStateToProps, { userFollowersAction })(FollowersContainer);
