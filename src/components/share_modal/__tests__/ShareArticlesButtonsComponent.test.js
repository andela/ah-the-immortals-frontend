import { mount } from 'enzyme';
import React from 'react';
import ShareArticlesButtonsComponent from '../ShareArticlesButtonsComponent';

describe('Testing the file with all the buttons', () => {
  const props = {
    article: {}
  };
  const wrapper = mount(
    <ShareArticlesButtonsComponent {...props} />
  );
  it('Test successful mount of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
