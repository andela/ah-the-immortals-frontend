import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../SearchPageComponent';

describe('Tests for search page', () => {
  const props = {
    history: {},
    result: {
      result: {}
    },
    handleFilter: jest.fn(),
    filter: {},
    activeOption: {}
  };
  const wrapper = shallow(
    <SearchPage {...props} />
  );
  it('Tests for mounting of the search page', () => {
    expect(wrapper.find('div.search-page').exists()).toEqual(true);
  });
});
