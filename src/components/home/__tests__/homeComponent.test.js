import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Home from '../HomeComponent'; 


describe('Tests PasswordResetConfirmContainer', () => {
  const store = configureStore([thunk])({
    post:   {
      posts: [],
      post: {},
      pages:[],
      pagination:{},
      editpost: [],
      loading: false},
    allArticles:{
      articles: [],
      error: {}
    }
  });
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Home history={history} />
      </Provider>
    </Router>
  );
  it('Test mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
