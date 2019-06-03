import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { mount } from 'enzyme';
import Login from '../Login';

describe('test dummy login', () => {
  it('returns div element', () => {
    const wrapper = mount(<Router><Login /></Router>);
    expect(wrapper).toMatchSnapshot();
  });
});
