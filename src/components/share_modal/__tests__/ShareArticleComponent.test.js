import { mount } from 'enzyme';
import React from 'react';
import ShareModal from '../ShareArticleComponent';


describe('Test the successful mounting of the share article component', () => {
  const props = {
    article: {
      slug: 'test-stlug'
    }
  };
  const wrapper = mount(
    <ShareModal {...props} />
  );
  it('Test successful mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Simulates clicking of show button',()=>{
    const showButton = wrapper.find('button').first();
    showButton.simulate('click');
    expect(showButton.exists()).toEqual(true);
  });
  it('Simulates clicking of close button',()=>{
    const showButton = wrapper.find('button').first();
    showButton.simulate('click');
    const closeButton = wrapper.find('button[id="close-button"]');
    closeButton.simulate('click');
    expect(closeButton.exists()).toEqual(true);
  });
});
