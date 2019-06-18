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
      Profile: {profile: {} }, 
      following: {
        data: [
          {
            'username': 'slim',
            'first_name': '',
            'last_name': '',
            'bio': '',
            'img_url': 'https://res.cloudinary.com/grean/image/upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
            'created_at': '2019-05-30 11:52:18',
            'updated_at': '2019-06-13 17:59:21',
            'following': true
          }
        ],
        errors: {},
        count: 0
      },
      followers: {
        users: [
          {
            'username': 'slim',
            'first_name': '',
            'last_name': '',
            'bio': '',
            'img_url': 'https://res.cloudinary.com/grean/image/upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
            'created_at': '2019-05-30 11:52:18',
            'updated_at': '2019-06-13 17:59:21',
            'following': true
          }
        ],
        error: {},
        userCount: 0
      }
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
