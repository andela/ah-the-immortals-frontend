import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promptAction from '../Prompt.action';
import ACTION_CONSTANTS from '../../constants/constants';

const { PROMPT_ACTION, PROMPT_CLOSE } = ACTION_CONSTANTS;
const store = configureStore([thunk])({});

describe('Tests from prompt Action', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('Dispatches prompt action', () => {
    store.dispatch(promptAction(true, 'sample-slug'));
    expect(store.getActions()[0].type).toEqual(PROMPT_ACTION);
  });
  it('Dispatches prompt close action', () => {
    store.dispatch(promptAction(false, 'sample-slug'));
    expect(store.getActions()[0].type).toEqual(PROMPT_CLOSE);
  });
});
