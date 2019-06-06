import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import toJson from 'enzyme-to-json';
import SignedInLinks from '../signedInLinks';

describe('Tests rendering of links on navigation bar when the user is logged in', () => {
  it('renders signed in links component', () => {
    const history = createBrowserHistory();
    const wrapper = mount(
      <Router history={history}>
        <SignedInLinks />
      </Router>

    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });   
});
