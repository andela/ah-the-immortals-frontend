import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BookmarkComponent from '../BookmarkComponent';



describe('Test BookmarkComponent', () => {
  const props = {
    article: {
      bookmarked: true
    },
    handleClick : jest.fn
  };

  const wrapper = mount(
    <BookmarkComponent {...props} />
  );

  it('test view profile container snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
