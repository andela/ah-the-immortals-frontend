import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchPageContainer from '../SearchPageContainer';

const store = configureStore([thunk])({
  search: {
    result: {}
  }
});
const props = {
  history: {
    push: jest.fn()
  },
  result: {
    result: {}
  },
  search: jest.fn()
};
describe('Tests for Search Page Container', () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPageContainer {...props} />
    </Provider>
  );
  it('Simulates Click of filter options', () => {
    const button = wrapper.find('button').first();
    button.simulate('click');
    expect(button.exists()).toEqual(true);
  });
});
