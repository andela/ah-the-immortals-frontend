import {mount} from 'enzyme';
import React from 'react';
import ArticlesFeed from '../ProfileArticlesFeed';


describe('Test profile article feed', () => {
  let props = [];
  const wrapper = mount(
    <ArticlesFeed articles={props} />
  );
  it('test article feed ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('test map function', () => {
    wrapper.find('PostFeed').find('PostItem').map(node => node.text());
    expect(wrapper).not.toBe(null);
  });
});
