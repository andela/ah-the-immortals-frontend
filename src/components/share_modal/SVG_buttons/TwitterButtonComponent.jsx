import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TwitterButtonComponent extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };
  render() {
    const {article: {slug}} = this.props;
    const url = process.env.URL;
    const currentUrl  = `${url}/post/${slug}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${currentUrl}`;
    return (
      <div className="svg">
        <button className="btn btn-link" id="twt" type="button" onClick={() => window.open(shareUrl, '_blank')}>
          <img src="https://img.icons8.com/color/64/000000/twitter-circled.png" alt="avatar" />
        </button>
        <div className="twitter-style">Twitter</div>
      </div>
    );
  }
}

export default TwitterButtonComponent;
