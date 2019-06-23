import { mount } from 'enzyme';
import React from 'react';
import FacebookButtonComponent from '../FacebookButtonComponent';

describe('Test for the facebook button component', () =>{
  const props = {
    article: {
      slug: ''
    }
  };
  const wrapper = mount(
    <FacebookButtonComponent {...props} />
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
