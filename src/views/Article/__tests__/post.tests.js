import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Post from '../post';
import Highlight from '../../highlight/HighlightContainer';
import HighlightComment from '../../../components/highlight/CommentComponent';
import HighlightIcons from '../../../components/highlight/HighlightComponent';
import storeContents from '../TestObjects';

const { uncommentedStore, commentedStore,storeWithoutUser } = storeContents;
describe('Test the article post', () => {
  beforeEach(() => {
    document.getSelection = () => ({
      removeAllRanges: () => { },
      baseOffset: 0,
      extentOffset: 4
    });
  });
  afterEach(() => {
    document.getSelection = () => ({
      removeAllRanges: () => { },
      baseOffset: 0,
      extentOffset: 4
    });
  });
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    ...uncommentedStore
  });
  const commentStore = configureMockStore([thunk])({
    ...commentedStore
  });
  const noUserStore=configureMockStore([thunk])({
    ...storeWithoutUser
  });
  const history = createBrowserHistory();
  describe('Tests for uncommented Highlight', () => {
    const wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <Post
            match={{ params: { post: {}, slug: 'van-gals-4' }, isExact: true, path: '', url: '' }}
            history={history}
          />
        </Provider>
      </Router>
    );
    const highlightContainer = wrapper.find(Highlight);
    const comment = wrapper.find(HighlightComment);
    const icons = wrapper.find(HighlightIcons);
    const bodyIcon = wrapper.find('div.highlight-icons');
    it('Gives highlight', () => {
      const highlighterIcon = bodyIcon.find('i[id="highlighter"]');
      highlighterIcon.simulate('click');
      expect(highlighterIcon.exists()).toEqual(true);
    });
    it('opens the comment modal', () => {
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      expect(commentIcon.exists()).toEqual(true);
    });
    it('adds comment to the highlight', () => {
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      const textArea = wrapper.find('textarea[name="body"]');
      textArea.simulate('change');
      expect(textArea.exists()).toEqual(true);
    });
    it('Submits comment', () => {
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      const textArea = wrapper.find('textarea[name="body"]');
      textArea.simulate('change');
      const submitBtn = wrapper.find('button[id="highlight-btn"]');
      submitBtn.simulate('click');
      expect(submitBtn.exists()).toEqual(true);
    });
    it('Closes the comment highlight comment modal', () => {
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      const closeBtn = wrapper.find(CloseButton);
      closeBtn.simulate('click');
      expect(closeBtn.exists()).toEqual(true);
    });
    it('Simulates mouse up event on rendered body', () => {
      const highlight = wrapper.find('Highlighter[id="body"]');
      highlight.simulate('mouseup');
      expect(highlight.exists()).toEqual(true);
    });
  });

  describe('Tests for commented Highlight', () => {
    const commentedWrapper = mount(
      <Router history={history}>
        <Provider store={commentStore}>
          <Post
            match={{ params: { post: {}, slug: 'van-gals-4' }, isExact: true, path: '', url: '' }}
            history={history}
          />
        </Provider>
      </Router>
    );
    it('updates comment',()=>{
      const bodyIcon = commentedWrapper.find('div.highlight-icons');
      const bodyhighlight = commentedWrapper.find('Highlighter[id="body"]');
      bodyhighlight.simulate('mouseup');
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      const submitBtn = commentedWrapper.find('button[id="highlight-btn"]');
      submitBtn.simulate('click');
    });
    it('updates comment',()=>{
      const bodyIcon = commentedWrapper.find('div.highlight-icons');
      const bodyhighlight = commentedWrapper.find('Highlighter[id="body"]');
      bodyhighlight.simulate('mouseup');
      const commentIcon = bodyIcon.find('i[id="highlight-comment"]');
      commentIcon.simulate('click');
      let textArea = commentedWrapper.find('textarea[id="highlight-comment"]');
      textArea.simulate('change', {
        target: {
          value: 'Test body'
        }
      });
      const submitBtn = commentedWrapper.find('button[id="highlight-btn"]');
      submitBtn.simulate('click');
    });
    it('Simulates mouse up events', () => {
      const bodyhighlight = commentedWrapper.find('Highlighter[id="body"]');
      bodyhighlight.simulate('mouseup');
      const descriptionHighlight = commentedWrapper.find('Highlighter[id="description"]');
      descriptionHighlight.simulate('mouseup');
      const titleHighlight = commentedWrapper.find('Highlighter[id="title"]');
      titleHighlight.simulate('mouseup');
      expect(titleHighlight.exists()).toEqual(true);
    });
  });
  
  describe('Tests for article without a logged in user',()=>{
    const noUserWrapper = mount(
      <Router history={history}>
        <Provider store={noUserStore}>
          <Post
            match={{ params: { post: {}, slug: 'van-gals-4' }, isExact: true, path: '', url: '' }}
            history={history}
          />
        </Provider>
      </Router>
    );
    const highlight=noUserWrapper.find(Highlight).find('div');
    expect(highlight.exists()).toEqual(false);
  });
});
