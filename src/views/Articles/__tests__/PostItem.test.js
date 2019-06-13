import {mount, shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import renderHTML from 'react-render-html';
import PostItem from '../PostItem';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({post:{}});
  let props = {
    post: jest.fn(),
  };
  const wrapper = shallow(
    <Provider store={store}>
      <PostItem post={props} />
    </Provider>
  );
  it('test 1', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
