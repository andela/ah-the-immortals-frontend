import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Search from '../SearchBarContainer';
import SearchBar from '../../../components/search/SearchBarComponent';

const store = configureStore([thunk])({
  search: {}
});
const props = {
  history: {
    push: jest.fn()
  },
  search: jest.fn(),
  result: {
    search: {}
  }
};
describe('Tests SearchBar container', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Search {...props} />
    </Provider>
  );
  const searchInput = wrapper.find(SearchBar).find('div.search-bar').find('input');
  it('Simulates Change Evenet', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Brian'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
  it('Simulates Enter button without search value', () => {
    searchInput.simulate('keyDown', {
      keyCode: 13,
      target: {}
    });
    expect(searchInput.exists());
  });
});
describe('Tests for title filter', () => {
  const filterProps = {
    ...props,
    filter: {
      title: true
    }
  };
  const wrapper = mount(
    <Provider store={store}>
      <Search {...filterProps} />
    </Provider>
  );
  const searchInput = wrapper.find(SearchBar).find('div.search-bar').find('input');
  it('Simulates Change Evenet', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'test'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
  it('Simulates keyDown event with search value', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'test'
      }
    });
    searchInput.simulate('keyDown', {
      keyCode: 13,
      target: {
        value: 'test'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
});
describe('Tests for author filter', () => {
  const filterProps = {
    ...props,
    filter: {
      author: true
    }
  };
  const wrapper = mount(
    <Provider store={store}>
      <Search {...filterProps} />
    </Provider>
  );
  const searchInput = wrapper.find(SearchBar).find('div.search-bar').find('input');
  it('Simulates Change Evenet', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Brian'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
});
describe('Tests for author filter', () => {
  const filterProps = {
    ...props,
    filter: {
      author: true
    }
  };
  const wrapper = mount(
    <Provider store={store}>
      <Search {...filterProps} />
    </Provider>
  );
  const searchInput = wrapper.find(SearchBar).find('div.search-bar').find('input');
  it('Simulates Change Evenet', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Brian'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
});
describe('Tests for tags filter', () => {
  const filterProps = {
    ...props,
    filter: {
      tag: true
    }
  };
  const wrapper = mount(
    <Provider store={store}>
      <Search {...filterProps} />
    </Provider>
  );
  const searchInput = wrapper.find(SearchBar).find('div.search-bar').find('input');
  it('Simulates Change Evenet', () => {
    searchInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Brian'
      }
    });
    expect(searchInput.exists()).toEqual(true);
  });
});
