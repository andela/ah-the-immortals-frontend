import React from 'react';
import { Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import EditComment from '../EditCommentComponent';

describe('Tests CommentsReplyComponent', () => {
  const history = createBrowserHistory();
  const props = {
    editWrite: jest.fn(),
    editSubmit: jest.fn(),
    value: '',
    isLoading: false,
    placeholder: 'issa'
  };
  const wrapper = mount(
    <Router history={history}>
      <EditComment {...props} />
    </Router>
  );
  it('tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
