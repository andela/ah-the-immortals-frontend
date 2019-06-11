import ACTION_CONSTANTS from '../constants/constants';

const { SEARCH_SUCCESS, SEARCH_FAILURE } = ACTION_CONSTANTS;
const initialState = {
  result: {},
  errors: {},
  value:''
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_SUCCESS:
    return {
      value:action.data.value,
      result:action.data,
      errors:{}
    };
  case SEARCH_FAILURE:
    return{
      value:action.data.value,
      result:{},
      errors:action.data
    };
  default:
    return state;
  }
};
export default SearchReducer;
