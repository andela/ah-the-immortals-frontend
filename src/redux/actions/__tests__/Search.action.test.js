import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import SearchAction from '../Search.action';
import ACTION_CONSTANTS from '../../constants/constants';

const store = configureStore([thunk])({});
const ROOT_URL = process.env.REACT_APP_BASE_URL;
const { SEARCH_FAILURE, SEARCH_SUCCESS } = ACTION_CONSTANTS;
describe('Tests for search action', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const succesResult = {
    data: {
      results: {
        articles: [
          {
            title: 'Test Title',
            description: 'Test Description',
            body: 'Test Body',
            author: {
              username: 'Test User',
              bio: '',
              image: 'https://res.cloudinary.com/grean/image/upload/v1556488518/samples/vbioaj1wwewmtmeryucv',
            },
          }
        ]
      },
    }
  };
  const failureResult = {
    message: 'Results not found'
  };
  it('Tests successful search action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/?author=test`, {
      response: { ...succesResult },
      status: 200
    });
    await store.dispatch(SearchAction({ author: 'test', value: 'test' }));
    expect(store.getActions()[0].type).toEqual(SEARCH_SUCCESS);
    done();
  });
  it('Tests successful failure search action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/?author=test`, {
      response: { ...failureResult }
    });
    await store.dispatch(SearchAction({ author: 'test', value: 'test' }));
    expect(store.getActions()[0].type).toEqual(SEARCH_FAILURE);
    done();
  });
  it('Tests for filter by tag', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/?tags=test`, {
      response: { ...failureResult },
      status: 200
    });
    await store.dispatch(SearchAction({ tag: 'test', value: 'test' }));
    expect(store.getActions()[0].type).toEqual(SEARCH_FAILURE);
    done();
  });
  it('Tests for filter by title', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/?title=test`, {
      response: { ...succesResult },
      status: 200
    });
    await store.dispatch(SearchAction({ title: 'test', value: 'test' }));
    expect(store.getActions()[0].type).toEqual(SEARCH_SUCCESS);
    done();
  });
});
