import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import ACTION_CONSTANTS from '../../constants/constants';
import UnBookmarkAction from '../UnBookmark.actions';

const { UNBOOKMARK_SUCCESS,} = ACTION_CONSTANTS;

const store = configureStore([thunk])({});
const ROOT_URL = process.env.REACT_APP_BASE_URL;

const slug = 'sample-slug';
const result = {};

describe('Tests for unbookmarking actions', () => {
  beforeEach(() => {
    store.clearActions();
    jest.setTimeout(10000);
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Simulates unbookmark success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/bookmark/sample-slug/`, {
      response: {
        message: 'Bookmark has been removed'
      },
      status: 204
    });
    await store.dispatch(UnBookmarkAction(slug));
    expect(store.getActions()[0].type).toEqual(UNBOOKMARK_SUCCESS);
    done();
  });

});
