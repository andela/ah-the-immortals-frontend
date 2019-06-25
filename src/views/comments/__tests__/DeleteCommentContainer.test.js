import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Button } from 'react-bootstrap';
import DeleteComment from '../DeleteCommentContainer';

describe('Tests DeleteCommentContainer', () => {
  const store = configureStore([thunk])({
    comments: { data: {comments: []}, error: {}}
  });
  const props = {
    deleteCommentAction: jest.fn(),
    id: 3,
    slug: 'string'
  };
  const history = createBrowserHistory();
  const wrapper = mount (
    <Router history={history}>
      <Provider store={store}>
        <DeleteComment {...props} />
      </Provider>
    </Router>
  );
  it('tests mounting of container', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('tests click of delete button', () => {
    const btn = wrapper.find(Button);
    btn.simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(btn.length).toEqual(1);
  });
});
