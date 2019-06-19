import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

const store = configureStore([thunk])({
  resetpasswordlink: {},
  confirmresetpassword: {},
  signup: {},
  signin: {},
  social: {},
  Profile: {},
  errors: {},
  search: {},
  followers: {},
  following: {},
  prompt: {},
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
            ratings: {
              average_ratings: 3
            },
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
});
describe('PASSES', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
