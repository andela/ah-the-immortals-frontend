import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import ACTION_CONSTANTS from '../../constants/constants';
import BookmarkAction from '../Bookmark.actions';

const { BOOKMARK_SUCCESS, BOOKMARK_FAILURE } = ACTION_CONSTANTS;

const store = configureStore([thunk])({});
const ROOT_URL = process.env.REACT_APP_BASE_URL;

const slug = 'sample-slug';
const result = {
  article: {
    slug: slug,
    title: 'Sample title',
    body: 'Sample body',
    bookmarked : 'False'
  }
};

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
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/bookmark/`, {
      response: {
        article:{
          bookmarked:true
        }
      },
      status: 200
    });
    await store.dispatch(BookmarkAction(slug));
    expect(store.getActions()[0].type).toEqual(BOOKMARK_SUCCESS);
    done();
  });
});
