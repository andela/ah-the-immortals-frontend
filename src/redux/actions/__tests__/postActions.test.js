import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  addPost,
  getPosts,
  getPost, deletePost, editPost,getNextPages,getPages
} from '../postActions';
import {
  ADD_POST, EDIT_POST,
  CLEAR_ERRORS,
  GET_POSTS,
  POST_LOADING,
  GET_POST, DELETE_POST, GET_ERRORS,GET_PAGES,GET_PAGES_NEXT
} from '../../constants/types';
import { ROOT_URL }  from '../../../services/api';

describe('Test the creation of an article', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const url = `${ROOT_URL}/articles`;
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('deletes an article', async (done) => {
    const testStore = configureMockStore([thunk]);
    const store = testStore({});
    moxios.stubRequest(
      `${ROOT_URL}/articles/hi-there`, {
        status: 200,
        response: {
          message: 'Article \'hi-there\' deleted'
        }
      }
    );
    await store.dispatch(deletePost('hi-there'));
    expect(store.getActions()[0].type).toEqual(DELETE_POST);
    done();
  });

  it('deletes an article and dispatches error action on failure', async (done) => {
    const testStore = configureMockStore([thunk]);
    const store = testStore({});
    moxios.stubRequest(
      `${ROOT_URL}/articles/hi`, {
        status: 400,
        response: {
          message: 'Article \'hi\' deleted'
        }
      }
    );
    await store.dispatch(deletePost('hi'));
    expect(store.getActions()[0].type).toEqual(GET_ERRORS);
    done();
  });

  it('posts an article', async (done) => {
    moxios.stubRequest(`${url}/`, {
      status: 200,
      response: {
        data: []
      }
    });
    const redirect = jest.fn();
    const callback = jest.fn();
    await store.dispatch(addPost({}, redirect,callback));
    expect(store.getActions()[1].type).toEqual(ADD_POST);
    done();
  });

  it('dispatches gets errors when an error is received', async (done) => {
    moxios.stubRequest(`${url}/`, {
      status: 400,
      response: {
        data: []
      }
    });
    const redirect = jest.fn();
    const callback = jest.fn();
    await store.dispatch(addPost({}, redirect, callback));
    expect(store.getActions()[1].type).toEqual(GET_ERRORS);
    done();
  });

  it('gets posts and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 200,
      response: {
        data: {
          results: {
            articles: []
          }
        }
      }
    });
    await store.dispatch(getPosts());
    expect(store.getActions()[1].type).toEqual(GET_POSTS);
    done();
  });

  it('gets posts and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 500,
      response: {}
    });
    await store.dispatch(getPosts());
    expect(store.getActions()[1].payload).toBeFalsy();
    done();
  });
  it('gets pages and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 500,
      response: {}
    });
    await store.dispatch(getPages(url));
    expect(store.getActions()[1].payload).toBeFalsy();
    done();
  });
  it('gets pages and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 200,
      response: {
        data: {
          results: {
            articles: []
          }
        }
      }
    });
    await store.dispatch(getPages(url));
    expect(store.getActions()[1].type).toEqual(GET_PAGES);
    done();
  });
  it('gets pages,pagination data and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 200,
      response: {
        data: {
          results: {
            articles: []
          }
        }
      }
    });
    await store.dispatch(getNextPages(url));
    expect(store.getActions()[1].type).toEqual(GET_PAGES_NEXT);
    done();
  });
  it('gets pages ,pagination data and dispatches actions appropriately', async (done) => {
    moxios.stubRequest(url, {
      status: 500,
      response: {}
    });
    await store.dispatch(getNextPages(url));
    expect(store.getActions()[1].payload).toBeFalsy();
    done();
  });
  it('edits', async (done) => {
    moxios.stubRequest(`${url}/slug/`, {
      status: 200,
      response: {
        data: {}
      }
    });
    await store.dispatch(editPost('slug', {}));
    expect(store.getActions()[1].type).toEqual(EDIT_POST);
    done();
  });
  it('edit failure', async (done) => {
    moxios.stubRequest(`${url}/slug/`, {
      status: 500,
      response: {
        data: {}
      }
    });
    await store.dispatch(editPost('slug', {}));
    expect(store.getActions()[1].type).toEqual(EDIT_POST);
    expect(store.getActions()[1].payload).toEqual(null);
    done();
  });
  it('gets a single post', async (done) => {
    moxios.stubRequest(`${url}/slug`, {
      status: 200,
      response: {
        data: {}
      }
    });
    await store.dispatch(getPost('slug'));
    expect(store.getActions()[1].type).toEqual(GET_POST);
    done();
  });
  it('gets a single post', async (done) => {
    moxios.stubRequest(`${url}/slug`, {
      status: 400,
      response: []
    });
    await store.dispatch(getPost('slug'));
    expect(store.getActions()[1].type).toEqual(GET_POST);
    expect(store.getActions()[1].payload).toBeFalsy();
    done();
  });
});
