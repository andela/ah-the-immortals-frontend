import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewProfile from '../ViewProfile';

describe('Test view profile container', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({Profile: {profile: {} }});

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ViewProfile />
      </BrowserRouter>
    </Provider>
  );

  it('test view profile container snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
