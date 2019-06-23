import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactQuill from 'react-quill';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import {EditArticle} from '../EditArticle';
import 'react-quill/dist/quill.snow.css';

const history = createBrowserHistory();
global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass edit article', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    post: {},
    errors: {},
  });
  let props = {
    editPost: jest.fn(),
    getPost:jest.fn(),
  };
  const tag = {
    id: 'dude',
    text: 'dude',
  };
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <EditArticle
          history={history}
          match={{ params: { slug: 'how-to' }, isExact: true, path: '', url: '' }}
          {...props} />
      </Router>
    </Provider>
  );  
  it('test edit article snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleDragg', () => {
    const dragtagg = shallow(<EditArticle {...props} match={{ params: { slug: 'how-to' }, isExact: true, path: '', url: '' }} />);
    const instance = dragtagg.instance();
    const dragg = jest.spyOn(instance, 'handleDrag');
    instance.handleDrag(tag);
    expect(dragg).toBeCalledWith({ id: 'dude', text: 'dude' });
  });
  it('should call handleAddition', () => {
    const addtag = shallow(<EditArticle {...props} match={{ params: { slug: 'how-to' }, isExact: true, path: '', url: '' }} />);
    const instance = addtag.instance();
    const add = jest.spyOn(instance, 'handleAddition');
    instance.handleAddition(tag);
    expect(add).toBeCalledWith({ id: 'dude', text: 'dude' });
  });
  it('should call handleDelete', () => {
    const deltag = shallow(<EditArticle {...props} match={{ params: { slug: 'how-to' }, isExact: true, path: '', url: '' }} />);
    const instance = deltag.instance();
    const del = jest.spyOn(instance, 'handleDelete');
    instance.handleDelete(0);
    expect(del).toBeCalledWith(0);
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
