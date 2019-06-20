import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import Posts from '../Posts';

describe('<Posts />', () => {
  const testStore = configureMockStore([thunk]);
  const initialState = {
    post: {
      posts: [],
      post: {
      },
      pages: {
        pageCount: 10,
        articlesCount: 21,
        next: 'https://ah-the-immortals-staging.herokuapp.com/api/articles/?page=2',
        previous: null,
        results: {
          articles: [
            {
              slug: 'communication-skills',
              title: 'Communication Skills',
              description: '7Cs of effective communication',
              body: 'In order to be understood by your audience, there are rules you need to abide by, the 7Cs of effective communication',
              image_url: 'No image uploaded',
              created_at: '2019-06-20T08:01:07.659929Z',
              updated_at: '2019-06-20T08:03:39.411965Z',
              author: {
                username: 'Big-Hiro',
                bio: '',
                image: 'https://res.cloudinary.com/grean/image/upload/v1561016204/transparent-Hiro-big-hero-6-37747465-427-378_i2kikl',
                following: false
              }
            }
          ]
        }
      },
      pagination: {},
      editpost: [],
      loading: false
    }
  };
  const store = testStore(initialState);
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Posts history={history} />
      </Provider>
    </Router>
  );
  it('passes', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Simulates cliccking of the pagination button', () => {
    const pagainationButton = wrapper.find('span.active-page').first();
    pagainationButton.simulate('click');
    expect(pagainationButton.exists());
  });
  it('Simulates for handleLink event', () => {
    const link = wrapper.find('span.link-test').first();
    link.simulate('click');
    expect(link.exists()).toEqual(true);
  });
});
