import {mount, shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import React from 'react';
import StarRatingComponent from '../RateArtcles';

describe('Test the article rating', () =>{
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    post:{post:{}},
    signin:{
      currentUser:'testuser'
    }
  });
  const history = createBrowserHistory();
  it('test component mounts successfully', () => {
    const props = {
      value: 1,
      name: '',
      starCount: {},
      onStarClick: '',
      renderStarIcon: '',
    };
    const wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <StarRatingComponent
            {...props}
          />
        </Provider>
      </Router>
    );});
  it('test post snap', () => {

    const props = {
      value: 1,
      name: '',
      starCount: {},
      starClick: jest.fn(),
      renderStarIcon: jest.fn()
    };
    const wrapper = mount(

      <StarRatingComponent
        {...props} 
      />
    );
    const starRating = wrapper.find('ArticleRating');
    starRating.simulate('click');
  });
});
