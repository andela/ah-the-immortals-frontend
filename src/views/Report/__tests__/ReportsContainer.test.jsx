import React from 'react';
import { Provider } from 'react-redux';
import { mount,shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import ReportsContainer from '../ReportsContainer';

describe('Reports', () => {
  const testStore = configureMockStore([thunk]);
  const initialState = {
    post: {
      posts: [],
      post: {
      },
      pages: {
        
      },
      pagination: {},
      editpost: [],
      loading: false,
      Report:[],
      AllReports:{
        'escalated articles':[
          {
            article: {
              slug: 'new-one-3',
              title: 'New one',
              description: 'This is a new article',
              body: 'Of course it\'s a new article',
              created_at: '2019-06-20T10:26:57.864585Z',
              updated_at: '2019-06-20T10:26:57.864640Z'
            },
            reason: 'Plagiarism',
            description: 'test flex'
          }
        ]
      },
    }
  };
  const store = testStore(initialState);
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <ReportsContainer history={history} />
      </Provider>
    </Router>
  );
  it('passes', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
