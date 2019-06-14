import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchPageContainer from '../SearchPageContainer';
import ResultPage from '../../../components/search/ResultPageComponent';
import TEST_CONSTANTS from '../../../components/search/constants';

const { search } = TEST_CONSTANTS;
const store = configureStore([thunk])({
  search: { ...search }
});
const props = {
  history: {
    push: jest.fn()
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
  it('Simulates click of results', () => {
    document.body.innerHTML = `<div>
     <input id='search-bar'></input>
    <div>`;
    const resultPage = wrapper.find(ResultPage);
    const title = resultPage.find('div.title-info');
    title.simulate('click');
    expect(title.exists()).toEqual(true);
  });
});
