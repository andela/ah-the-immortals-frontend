import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FacebookButtonComponent extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const {article: {slug}} = this.props;
    const url = process.env.URL;
    const currentUrl  = `${url}/post/${slug}`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    return (
      <div>
        <button className="btn btn-link" id="fb" type="button" onClick={() => window.open(shareUrl, '_blank')}>
          <img src="https://img.icons8.com/color/64/000000/facebook-circled.png" alt="avatar" />
        </button>
        <div>Facebook</div>
      </div>
    );
  }
}

export default FacebookButtonComponent;
