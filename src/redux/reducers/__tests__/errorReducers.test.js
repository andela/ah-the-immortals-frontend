import errorReducer from '../errorReducers';
import { GET_ERRORS, CLEAR_ERRORS } from '../../constants/types';

describe('article crud error tests', () => {
  it('returns original state', () => {
    expect(errorReducer({}, {type: 'TYPE'})).toEqual({});
  });
  it('returns a cleared array in  clear error actions', () =>{
    expect(errorReducer({}, {type: 'CLEAR_ERRORS'})).toEqual({});
  });
  it('returns an action in  get error actions', () =>{
    expect(errorReducer({}, {type: 'GET_ERRORS'})).toEqual(undefined);
  });
});
