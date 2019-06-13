import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactQuill from 'react-quill';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import EditArticle from '../EditArticle';
import 'react-quill/dist/quill.snow.css';

const history = createBrowserHistory();
global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass edit article', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    post: {},
    errors: {}
  });
  let props = {
    editPost: jest.fn(),
  };
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <EditArticle
          history={history}
          match={{ params: { slug: 'how-to' }, isExact: true, path: '', url: '' }} />
      </Router>
    </Provider>
  );
  it('test edit article snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('simulates change events', () => {
    const titleName = wrapper.find('#Title-name');
    titleName.simulate('change', {
      target: {
        name: 'title', value: 'testing'
      }
    });
    expect(titleName.length).toEqual(1);
  });
  it('simulates submit', () => {
    const button = wrapper.find('button[name="edit-form"]');
    button.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(button.length).toEqual(1);
  });
  it('simulates body change events', () => {
    const quil = wrapper.find(ReactQuill);
    quil.setState({ body: 'hello' });
    expect(quil.length).toEqual(1);
  });
});
