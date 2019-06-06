import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import toJson from 'enzyme-to-json';
import SignedOutLinks from '../signedOutLinks';

describe('Tests rendering of signed out links', () => {
  it('renders signed out links component', () => {
    const history = createBrowserHistory();
    const mockOnsubmit = jest.fn();
    const mockOnchange = jest.fn();
    const props = {
      closeModal: jest.fn()
    };
    const wrapper = mount(
      <Router history={history}>
        <SignedOutLinks
          handleSignInSubmit={mockOnsubmit}
          handleChange={mockOnchange}
          signindata={{
            email: 'testsignin@gmail.com',
            errors: {}
          }}
          signInError={false}
          signInShow={false}
          signupdata={{}}
          handleSignInLink={mockOnsubmit}
          handleSignInShow={mockOnsubmit}
          handleSignUpLink={mockOnsubmit}
          twitter={mockOnsubmit}
          facebook={mockOnsubmit}
          google={mockOnsubmit}
          show={false}
          showModal={mockOnsubmit}
          errorShow={{}}
          handleSubmit={mockOnsubmit}
          {...props}
        />
      </Router>

    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
