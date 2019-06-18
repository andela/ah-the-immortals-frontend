import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ArticleItem from '../ProfileArticlesItems';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('test getting articles for a profile', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({ profile: {} });
  let props = {
    article: {}
  };
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <ArticleItem {...props} />
      </Provider>
    </MemoryRouter>
  );
  it('Match profile articles', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
