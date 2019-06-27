import BookmarkReducer from '../Bookmark.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

const { BOOKMARK_SUCCESS, BOOKMARK_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  response:{}
};
const successAction = {
  type: BOOKMARK_SUCCESS,
  response: {}
};
const failureAction = {
  type: BOOKMARK_FAILURE,
  data: {}
};
describe('Tests bookmark reducer', () => {
  it('Tests for return of initial state', () => {
    const result = BookmarkReducer(initialState, { type: 'INVALID' });
    expect(result).toEqual(initialState);
  });
  it('Tests for dispatch of success', () => {
    const result = BookmarkReducer(initialState, successAction);
    expect(result.result).toEqual(successAction.data);
  });
  it('Tests for dispatch of failure action', () => {
    const result = BookmarkReducer(initialState, failureAction);
    expect(result).toEqual(failureAction.data);
  });
});
