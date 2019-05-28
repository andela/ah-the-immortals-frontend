import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';

describe('test dummy login', () => {
  it('returns div element', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
