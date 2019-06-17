import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../NotFoundComponent';

describe('404 page', () => {
  it('returns div elements', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <NotFound />
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

