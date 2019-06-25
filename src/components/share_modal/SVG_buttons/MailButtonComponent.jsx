import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MailButtonComponent extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };
  render() {
    const {article: {slug, title}} = this.props;
    const url = process.env.URL;
    const currentUrl  = `${url}/post/${slug}`;
    const shareUrl = `mailto:?subject=${title}&body=${currentUrl}`;
    return (
      <div className="svg">
        <button className="btn btn-link" id="twt" type="button" onClick={() => window.open(shareUrl, '_blank')}>
          <img src="https://img.icons8.com/color/64/000000/gmail.png" />
        </button>
        <div className="mail-style">Gmail</div>
      </div>
    );
  }
}

export default MailButtonComponent;
