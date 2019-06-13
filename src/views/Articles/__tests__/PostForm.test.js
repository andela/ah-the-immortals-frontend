import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { PostForm } from '../PostForm';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  let props = {
    addPost: jest.fn(),
  };
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <PostForm {...props} history={history} />
      </Provider>
    </Router>
  );
  const renderComponent = properties => mount(
    React.createElement(
      props => (
        <Provider store={store}>
          <Router history={history}>
            <PostForm {...props} />
          </Router>

        </Provider>
      ),
      properties));
  it('test 1', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates change event', () => {
    const titleName = wrapper.find('#Title-name');
    titleName.simulate('change', {
      target: {
        name: 'title', value: 'this is a title'
      }
    });
    expect(titleName.length).toEqual(1);
  });

  it('simulates submit', () => {
    const button = wrapper.find('button[name="post-form"]');
    button.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(props.addPost).toHaveBeenCalled();
  });
  it('should set some props', () => {
    const renderedComponent = renderComponent(props);
    renderedComponent.setProps({ errors:{

    }});
  });

  expect(true).toBe(true);
});
