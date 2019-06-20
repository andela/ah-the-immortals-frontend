import {mount, shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import React from 'react';
import Post from '../post';

describe('Test the article post', () =>{
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    post:{post:{}},
    signin:{
      currentUser:'testuser'
    }
  });
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Post
          match={{params: {post: {}}, isExact: true, path: '', url: ''}}
          history={history} 
        />
      </Provider>
    </Router>
  );
  it('test post snap', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
