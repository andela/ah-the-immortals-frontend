import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FacebookButtonComponent from './SVG_buttons/FacebookButtonComponent';
import TwitterButtonComponent from './SVG_buttons/TwitterButtonComponent';
import MailButtonComponent from './SVG_buttons/MailButtonComponent';


class ShareArticlesButtonsComponent extends Component {
  static propTypes = {
    article:PropTypes.object.isRequired
  };
  render() {
    const { article } = this.props;
    return (
      <div className="main-svg">
        <FacebookButtonComponent article={article} />
        <TwitterButtonComponent article={article} />
        <MailButtonComponent article={article} />
      </div>
    );
  }
}

export default ShareArticlesButtonsComponent;
