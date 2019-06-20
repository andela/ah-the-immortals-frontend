import { mount } from 'enzyme';
import React from 'react';
import MailButtonComponent from '../MailButtonComponent';


describe('Test for the mail button component', () =>{
  const props = {
    article: {
      slug: ''
    }
  };
  const wrapper = mount(
    <MailButtonComponent {...props} />
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
