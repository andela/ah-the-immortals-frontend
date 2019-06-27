import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import highlightActions from '../highlight.action';
import ACTION_CONSTANTS from '../../constants/constants';

const {
  getHighlightsAction,
  createHighlightAction,
  showHighlighButton,
  closeHighlightButton,
  showHighlightModal,
  closeHighlightModal,
  updateHighlightAction
} = highlightActions;

const {
  GET_HIGHLIGHTS_SUCCESS,
  GET_HIGHLIGHTS_FAILURE,
  CREATE_HIGHLIGHT_SUCCESS,
  SHOW_HIGHLIGHT_BUTTONS,
  CLOSE_HIGHLIGHT_BUTTONS,
  SHOW_HIGHLIGHT_MODAL,
  CLOSE_HIGHLIGHT_MODAL,
  UPDATE_HIGHLIGH_SUCCESS,
  UPDATE_HIGHLIGHT_FAILURE
} = ACTION_CONSTANTS;

const store = configureStore([thunk])({});
const ROOT_URL = process.env.REACT_APP_BASE_URL;
describe('Tests for highlight actions', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Dispatches successful get of action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/highlight/`, {
      response: {},
      status: 200
    });
    await store.dispatch(getHighlightsAction('sample-slug'));
    expect(store.getActions()[0].type).toEqual(GET_HIGHLIGHTS_SUCCESS);
    done();
  });
  it('Dispatches get highlights failure action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/highlight/`, {
      response: {},
      status: 403
    });
    await store.dispatch(getHighlightsAction('sample-slug'));
    expect(store.getActions()[0].type).toEqual(GET_HIGHLIGHTS_FAILURE);
    done();
  });
  it('Dispatches successful creation of highlight', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/highlight/`, {
      response: {},
      status: 201
    });
    await store.dispatch(createHighlightAction('sample-slug', {}));
    expect(store.getActions()[0].type).toEqual(CREATE_HIGHLIGHT_SUCCESS);
    done();
  });
  it('Dispatches update of highlight success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/highlight/1/`, {
      response: {},
      status: 201
    });
    await store.dispatch(updateHighlightAction('sample-slug', {}, 1));
    expect(store.getActions()[0].type).toEqual(UPDATE_HIGHLIGH_SUCCESS);
    done();
  });
  it('Dispatches update of highlight failure', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/sample-slug/highlight/1/`, {
      response: {},
      status: 404
    });
    await store.dispatch(updateHighlightAction('sample-slug', {}, 1));
    expect(store.getActions()[0].type).toEqual(UPDATE_HIGHLIGHT_FAILURE);
    done();
  });
  it('Dispatches show of highlight modal', () => {
    store.dispatch(showHighlightModal('body'));
    expect(store.getActions()[0].type).toEqual(SHOW_HIGHLIGHT_MODAL);
  });
  it('Dispatches close of highlight modal', () => {
    store.dispatch(closeHighlightModal('body'));
    expect(store.getActions()[0].type).toEqual(CLOSE_HIGHLIGHT_MODAL);
  });
  it('Dispatches show of highlight button actions',()=>{
    store.dispatch(showHighlighButton('body'));
    expect(store.getActions()[0].type).toEqual(SHOW_HIGHLIGHT_BUTTONS);
  });
  it('Dispatches close of highlight button actions',()=>{
    store.dispatch(closeHighlightButton('body'));
    expect(store.getActions()[0].type).toEqual(CLOSE_HIGHLIGHT_BUTTONS);
  });
});
