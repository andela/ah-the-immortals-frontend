import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Article/Spinner';
import ArticlesFeed from './ProfileArticlesFeed';
import { fetchProfile } from '../../redux/actions/profile.actions';
import '../../styles/App.css';

class ProfileArticles extends Component {
  componentDidMount() {
    const { fetchProfile: Profile } = this.props;
    Profile();
  }
  
  render() {
    const { profile: { articles } } = this.props;
    return (
      <div className="container-fluid profile-articles-container">
        <div className="row">
          <br />
          {
            (!articles) ? <Spinner /> : <ArticlesFeed articles={articles} />
          }
        </div>
      </div>
    );
  }
}

ProfileArticles.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
};

ProfileArticles.defaultProps = {
  profile: {}
};

const mapStateToProps = state => ({
  profile: state.Profile.profile,
});

export default connect(mapStateToProps, { fetchProfile })(ProfileArticles);
