import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import ReportContainer from '../ReportContainer';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

describe('pass Report container', () => {
  let testStore = configureMockStore([thunk]);
  const initialState = {
    post: {
      posts: [],
      post: {
        article: {
          slug: 'van-gals-4',
          title: 'Van Gals',
          description: 'Van Gals',
          body: 'Van Gals',
          image_url: 'No image uploaded',
          created_at: '2019-06-25T19:55:55.011540Z',
          updated_at: '2019-06-25T21:05:06.583494Z',
          author: {
            username: 'OgutuBrian',
            bio: '',
            image: 'https://res.cloudinary.com/grean/image/upload/v1556488518/samples/vbioaj1wwewmtmeryucv',
            following: false
          },
          ratings: 0,
          tagList: [],
          like_info: {
            like: false,
            dislike: false,
            likeCount: 0,
            dislikeCount: 0
          },
          comments: [],
          favorites: {
            favorite: false,
            favoritesCount: 0
          },
          readtime: '2 second(s)',
          bookmarked: false,
          highlights: {
            data: {
              highlights: []
            },
            error: {}
          }
        }
      },
      pages: {
        
      },
      pagination: {},
      editpost: [],
      loading: false,
      Report: [],
      AllReports: {
        'escalated articles': []
      },
    }
  };
  let props = {
    reportArticle: jest.fn(),
    getPost: jest.fn(),


  };
  const store = testStore(initialState);
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <ReportContainer {...props} history={history} match={{ params: { post: {} }, isExact: true, path: '', url: '' }} />
      </Provider>
    </Router>
  );

  const renderComponent = properties => mount(
    React.createElement(
      props => (
        <Provider store={store}>
          <Router history={history}>
            <ReportContainer {...props} history={history} match={{ params: { post: {} }, isExact: true, path: '', url: '' }} />
          </Router>

        </Provider>
      ),
      properties));
  it('test 1', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('simulates submit', () => {
    const button = wrapper.find('button[name="post-form"]');
    button.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(button.length).toEqual(1);
  });
  it('simulates change event', () => {
    const descriptionName = wrapper.find('#description-name');
    descriptionName.simulate('change', {
      target: {
        name: 'description', value: 'this is a description'
      }
    });
    expect(descriptionName.length).toEqual(1);
  });
  it('set props', () => {
    const renderedComponent = renderComponent(props);
    renderedComponent.setProps({
      errors: {

      }
    });
  });

  expect(true).toBe(true);
});
