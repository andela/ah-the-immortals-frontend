import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BookmarkContainer from '../BookmarkContainer';


describe('Test BookmarkContainer', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const props = {
    article: {
      bookmarked: true
    },
    handleClick : jest.fn(),
  };
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <BookmarkContainer {...props} />
      </BrowserRouter>
    </Provider>
  );

  it('test view profile container snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test simulates click', () => {
    const clickbookmark = wrapper.find('BookmarkComponent');
    const click = wrapper.find('.fas');
    click.simulate('click');
    expect(props.handleClick.mock.calls.length).toEqual(0);
  });
});
