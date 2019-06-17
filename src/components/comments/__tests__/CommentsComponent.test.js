import React from 'react';
import { Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import ViewComments from '../CommentsComponent';

describe('Tests CommentsComponent', () => {
  const history = createBrowserHistory();
  const props = {
    comments: [],
    slug: 'this-one'
  };
  const wrapper = mount(
    <Router history={history}>
      <ViewComments {...props} />
    </Router>
  );
  it('tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
