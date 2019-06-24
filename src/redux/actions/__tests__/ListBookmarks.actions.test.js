import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import listBookmarks from '../listBookmarks.actions';

const store = configureMockStore ([thunk])({});

describe('test list bookamrks actions', () => {
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('test list bookmark success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/article/bookmarks/`, {
      status: 200,
      response: {
        data: {
          bookmarks: [
            {
              'slug': 'tunechi-slug',
              'username': 'tunechi',
              'first_name': '',
              'last_name': '',
              'bio': '',
              'img_url': 'https://res.cloudinary.com/grean//upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
              'bookmarked': true
            }
          ]
        }
      }
    });
    await store.dispatch(listBookmarks({}));
    expect(store.getActions()[0].type).toEqual('LIST_BOOKMARKS');
    done();
  });
  it('test list bookmark failure', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/article/bookmarks/`, {
      status: 400,
      response: {}
    });
    await store.dispatch(listBookmarks({}));
    expect(store.getActions()[0].type).toEqual('LIST_BOOKMARKS_FAILURE');
    done();
  });
});
