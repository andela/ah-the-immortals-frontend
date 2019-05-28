import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from '../NotFoundComponent';

describe('404 page', () => {
  it('returns div elements', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
