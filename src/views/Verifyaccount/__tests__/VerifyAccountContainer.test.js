import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Button } from 'react-bootstrap';
import VerifyAccount from '../VerifyAccountContainer';

describe('Tests VerifyAccountContainer', () => {
  const store = configureStore([thunk])({
    verification: {
      error: {
        response: {
          message: 'fail'
        }
      },
      isActivating: false }});
  const props = {
    verifyAccountAction: jest.fn(),
    match: {
      params: {
        token: 'hbchujhb8g7g48y2uby82'
      }
    },
    error: {
      response: {
        message: 'fail'
      }
    },
    isLoading: false,
    history: {
      push: jest.fn()
    }
  };
  const history = createBrowserHistory();
  const wrapper = mount (
    <Router history={history}>
      <Provider store={store}>
        <VerifyAccount {...props} />
      </Provider>
    </Router>
  );
  it('tests mounting of container', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call handleReload method' , () => {
    const button = wrapper.find('button[id="try"]');
    button.simulate('click');
    expect(button.exists()).toEqual(true);
  });
});
