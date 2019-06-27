import ACTION_CONSTANTS from '../../constants/constants';
import UnBookmarkReducer from '../UnBookmark.reducer';

const { UNBOOKMARK_SUCCESS } = ACTION_CONSTANTS;

const initialState = {
  response:{}
};
const successAction = {
  type: UNBOOKMARK_SUCCESS,
  response: {}
};

describe('Tests unbookmark reducer', () => {
  it('Tests for return of initial state', () => {
    const result = UnBookmarkReducer(initialState, { type: 'INVALID' });
    expect(result).toEqual(initialState);
  });
  it('Tests for dispatch of success', () => {
    const result = UnBookmarkReducer(initialState, successAction);
    expect(result.result).toEqual(successAction.data);
  });
});
