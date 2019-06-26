import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { ROOT_URL } from '../../../services/api';
import likeCommentAction from '../likeComment.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests like Comment actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const id = 1;
  const type = 'like';
  const slug = 'issa-is-testing';
  const likeCommentUrl = `${ROOT_URL}/articles/comments/${id}/${type}/`;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('tests successful liking of comment', async (done) => {
    moxios.stubRequest(
      likeCommentUrl, {
        status: 200,
        response: {}
      }
    );
    await store.dispatch(likeCommentAction(slug, id, type));
    expect(store.getActions()[0].type).toEqual('LIKE_COMMENT');
    done();
  });

  it('tests unsuccessful liking of comment', async (done) => {
    moxios.stubRequest(
      likeCommentUrl, {
        status: 400,
        response: {}
      }
    );
    await store.dispatch(likeCommentAction(slug, id, type));
    expect(store.getActions()[0].type).toEqual('LIKE_COMMENT_FAILURE');
    done();
  });
});
