import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PostForm from '../../../views/Articles/PostForm';


describe('<PostForm/>', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({post:{}});
  const props = {
    addPost: jest.fn()
  };
  it('passes', () => {
    const history = createBrowserHistory();
    const wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <PostForm {...props} history={history} />
        </Provider>
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
