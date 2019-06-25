import React from 'react';
import { Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import CreateComment from '../CreateCommentComponent';

describe('Tests CreateCommentsComponent', () => {
  const history = createBrowserHistory();
  const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    value: '',
    isLoading: false
  };
  const wrapper = mount(
    <Router history={history}>
      <CreateComment {...props} />
    </Router>
  );
  it('tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
