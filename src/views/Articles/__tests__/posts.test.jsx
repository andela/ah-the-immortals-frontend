import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import Posts from '../Posts';

describe('<Posts />', () => {
  const testStore = configureMockStore([thunk]);
  const initialState = {
    post: {
      posts: [], loading: false
    }
  };
  const store = testStore(initialState);
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Posts history={history} />
      </Provider>
    </Router>
  );
  it('passes', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
