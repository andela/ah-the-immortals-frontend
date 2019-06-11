import SearchReducer from '../Search.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

const { SEARCH_SUCCESS, SEARCH_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  result: {},
  errors: {},
  value: ''
};
const successAction = {
  type: SEARCH_SUCCESS,
  data: {
    results: {
      articles: []
    }
  }
};
const failureAction = {
  type: SEARCH_FAILURE,
  data: {
    results: {
      articles: []
    }
  }
};
describe('Tests search reducer', () => {
  it('Tests for return of initial state', () => {
    const result = SearchReducer(initialState, { type: 'INVALID' });
    expect(result).toEqual(initialState);
  });
  it('Tests for dispatch of success', () => {
    const result = SearchReducer(initialState, successAction);
    expect(result.result).toEqual(successAction.data);
  });
  it('Tests for dispatch of failure action', () => {
    const result = SearchReducer(initialState, failureAction);
    expect(result.errors).toEqual(failureAction.data);
  });
});
