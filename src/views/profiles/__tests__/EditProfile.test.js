import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProfileContainer from '../EditProfile';
import ProfileForm from '../../../components/profiles/EditProfile';

describe('Test edit profile container', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({Profile: {profile: {}, errors: {} }});

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ProfileContainer />
      </BrowserRouter>
    </Provider>
  );

  it('test edit profile container snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('test handle change in form', () => {
    const form = wrapper.find(ProfileForm);
    const userInput = form.find('input[name="first_name"]');
    userInput.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'abraham',
        name: 'first_name'
      }
    });
    expect(userInput.length).toEqual(1);
  });

  it('test handle submit form', () => {
    const saveProfile = wrapper.findWhere(n => n.type() === 'button' && n.contains('Save'));
    saveProfile.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(saveProfile.length).toEqual(1);
  });

  it('test handle upload profile picture', () => {
    const uploadPhoto = wrapper.findWhere(n => n.type() === 'button' && n.contains('Upload Photo'));
    uploadPhoto.simulate('click', {
      preventDefault: jest.fn(),
    }, window.cloudinary = {
      openUploadWidget(propsObj, callback) {
        setTimeout(callback(null, { event: 'success', info: { secure_url: 'some-url' } }), window.location.reload = jest.fn(), 0);
      }
    });

    expect(uploadPhoto.length).toEqual(1);
  });
});
