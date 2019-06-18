import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Following from '../../components/profiles/FollowingComponent';
import { userFollowingAction } from '../../redux/actions/userFollow.action';


class FollowingContainer extends Component {
  componentDidMount() {
    const { userFollowingAction: followingAction, match: { params: { profile } } } = this.props;
    followingAction(profile);
  }
  render() {
    const { data: { data } } = this.props;
    return (
      <div>
        {
          data.map(follower => (
            <Following
              {...follower}
              key={follower.username}
            />
          ))
        }
      </div>
    );
  }
}

FollowingContainer.propTypes = {
  userFollowingAction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  match: PropTypes.shape({})
};

FollowingContainer.defaultProps = {
  match: {}
};

const mapStateToProps = state => ({
  data: state.following
});

export default connect(mapStateToProps, { userFollowingAction })(FollowingContainer);
