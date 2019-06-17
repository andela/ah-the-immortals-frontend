import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import likeAction from '../Likes.action';
import ACTION_CONSTANTS from '../../constants/constants';

const { LIKE_SUCCESS, LIKE_FAILURE } = ACTION_CONSTANTS;

const store = configureStore([thunk])({});
const ROOT_URL = process.env.REACT_APP_BASE_URL;

const slug = 'sample-slug';
const article = {
  article: {
    slug: slug,
    title: 'Sample title',
    body: 'Sample body',
    like_info: {
      like: true,
      dislike: false,
      likeCount: 1,
      dislikeCount: 0
    },
  }
};
const removeLike = {
  article: {
    slug: slug,
    title: 'Sample title',
    body: 'Sample body',
    like_info: {
      like: false,
      dislike: false,
      likeCount: 0,
      dislikeCount: 0
    }
  }
};
const likeError = {
  detail: 'Authentication credentials were not provided.'
};
describe('Tests for Like actions', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Simulates like success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/like/`, {
      response: { ...article },
      status: 200
    });
    await store.dispatch(likeAction(slug, 'like', undefined));
    expect(store.getActions()[0].type).toEqual(LIKE_SUCCESS);
    done();
  });
  it('Simulates like failure', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/like/`, {
      response: { ...likeError },
      status: 403
    });
    await store.dispatch(likeAction(slug, 'like', undefined));
    expect(store.getActions()[0].type).toEqual(LIKE_FAILURE);
    done();
  });
  it('Simulates remove of likes', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/like/`, {
      response: { ...removeLike },
      status: 200
    });
    await store.dispatch(likeAction(slug, 'like', 'remove'));
    expect(store.getActions()[0].type).toEqual(LIKE_SUCCESS);
    done();
  });
});
