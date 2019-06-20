import React from 'react';
import { Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import CreateReply from '../CreateReplyComponent';

describe('Tests CommentsReplyComponent', () => {
  const history = createBrowserHistory();
  const props = {
    replyWrite: jest.fn(),
    replySubmit: jest.fn(),
    value: ''
  };
  const wrapper = mount(
    <Router history={history}>
      <CreateReply {...props} />
    </Router>
  );
  it('tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
