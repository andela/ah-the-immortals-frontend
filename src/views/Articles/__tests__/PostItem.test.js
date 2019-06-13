import {mount, shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import renderHTML from 'react-render-html';
import { MemoryRouter } from 'react-router-dom';
import PostItem from '../PostItem';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({post:{author:{}}});
  let props = {
    post: {
      author: {
        username: ''
      }
    },
    history: {
      push: jest.fn()
    }
  };
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <PostItem {...props} />
      </Provider>
    </MemoryRouter>
  );
  it('test 1', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
