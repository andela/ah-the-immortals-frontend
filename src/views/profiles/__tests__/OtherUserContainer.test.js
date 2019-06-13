import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewUserProfile from '../OtheUserContainer';

describe('Test view user profile container', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore(
    {
      Profile: {profile: {} }
    });

  
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ViewUserProfile 
          match={{params: {profile: {}}, isExact: true, path: '', url: ''}}
        />
      </BrowserRouter>
    </Provider>
  );

  it('test view user profile container snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('simulates handle follow', () => {
    const followBtn = wrapper.findWhere(n => n.type() === 'button');
    followBtn.simulate('click', {
      preventDefault: jest.fn()
    });
    expect(followBtn.length).toEqual(1);
  });
});
