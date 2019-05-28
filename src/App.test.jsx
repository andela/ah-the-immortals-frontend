import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('PASSES', () => {
  const div = document.createElement('div');
  it('renders without crashing', () => {
    const wrapper = shallow(
      <App />
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
