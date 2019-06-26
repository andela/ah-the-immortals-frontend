import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { ROOT_URL } from '../../../services/api';
import { createCommentAction, createChildCommentAction, getCommentsAction, editCommentAction, deleteCommentAction } from '../Comments.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests comments actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const slug = 'this-is-a-test-slug';
  const id = 3;
  const commentsUrl = `${ROOT_URL}/articles/this-is-a-test-slug/comments/`;
  const replyUrl = `${ROOT_URL}/articles/this-is-a-test-slug/comments/3/`;
  const data = {
    body: 'Issa is testing comments'
  };

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('tests successful creation of a comment', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/articles/${slug}/comments/`, {
        status: 201,
        response: {
          data: {
            id
          }
        }
      }
    );
    await store.dispatch(createCommentAction(data, slug, jest.fn()));
    done();
  });

  it('tests successful creation of a reply', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 201,
        response: {}
      }
    );
    await store.dispatch(createChildCommentAction(data, slug, id, jest.fn()));
    expect(store.getActions()[0].type).toEqual('CREATE_REPLY');
    done();
  });

  it('tests failure of reply creation', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 400,
        response: {}
      }
    );
    await store.dispatch(createChildCommentAction(data, slug, id, jest.fn()));
    expect(store.getActions()[0].type).toEqual('CREATE_COMMENT_FAILURE');
    done();
  });

  it('tests successful fetching of comments', async (done) => {
    moxios.stubRequest(
      commentsUrl, {
        status: 200,
        response: {
          comments: {}
        }
      }
    );
    await store.dispatch(getCommentsAction(slug));
    expect(store.getActions()[0].type).toEqual('READ_COMMENTS');
    done();
  });

  it('tests failure of comment creation', async (done) => {
    moxios.stubRequest(
      commentsUrl, {
        status: 400,
        response: {}
      }
    );
    await store.dispatch(createCommentAction(data, slug, jest.fn()));
    expect(store.getActions()[0].type).toEqual('CREATE_COMMENT_FAILURE');
    done();
  });

  it('tests failure of fetching comments', async (done) => {
    moxios.stubRequest(
      commentsUrl, {
        status: 400,
        response: {}
      }
    );
    await store.dispatch(getCommentsAction(slug, jest.fn()));
    expect(store.getActions()[0].type).toEqual('READ_COMMENTS_FAILURE');
    done();
  });

  it('tests successful edit of comments', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 200,
        response: {}
      }
    );
    await store.dispatch(editCommentAction(data, slug, id, jest.fn()));
    expect(store.getActions()[0].type).toEqual('EDIT_COMMENT');
    done();
  });

  it('tests failure of edit of comments', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 400,
        error: {}
      }
    );
    await store.dispatch(editCommentAction(data, slug, id, jest.fn()));
    expect(store.getActions()[0].type).toEqual('EDIT_COMMENT_FAILURE');
    done();
  });

  it('tests successful delete of comments', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 200,
        response: {}
      }
    );
    await store.dispatch(deleteCommentAction(slug, id));
    expect(store.getActions()[0].type).toEqual('DELETE_COMMENT');
    done();
  });

  it('tests failure of delete of comments', async (done) => {
    moxios.stubRequest(
      replyUrl, {
        status: 400,
        error: {}
      }
    );
    await store.dispatch(deleteCommentAction(slug, id));
    expect(store.getActions()[0].type).toEqual('DELETE_COMMENT_FAILURE');
    done();
  });
});
