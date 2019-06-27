import ACTION_CONSTANTS from '../constants/constants';

const { SHOW_HIGHLIGHT_MODAL, CLOSE_HIGHLIGHT_MODAL } = ACTION_CONSTANTS;
export const initialState = {
  body: false,
  title: false,
  description: false
};

const highlightModalReduer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_HIGHLIGHT_MODAL:
    return {
      ...state,
      [action.payload.field]: action.payload.value
    };
  case CLOSE_HIGHLIGHT_MODAL:
    return {
      ...state,
      [action.payload.field]: action.payload.value
    };
  default:
    return state;
  }
};

export default highlightModalReduer;
