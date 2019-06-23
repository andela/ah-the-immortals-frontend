import { mount } from 'enzyme';
import React from 'react';
import TwitterButtonComponent from '../TwitterButtonComponent';



describe('Test for the twitter button component', () =>{
  const props = {
    article: {
      slug: ''
    }
  };
  const wrapper = mount(
    <TwitterButtonComponent {...props} />
  );
  it('Test the mounting of the facebook button', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Simulates clicking of open button',()=>{
    const openButton = wrapper.find('button').first();
    openButton.simulate('click',
      global.open = jest.fn()
    );
    expect(global.open).toBeCalled();
  });
});
