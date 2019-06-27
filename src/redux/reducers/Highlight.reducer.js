import ACTION_CONSTANTS from '../constants/constants';

const { SHOW_HIGHLIGHT_BUTTONS, CLOSE_HIGHLIGHT_BUTTONS } = ACTION_CONSTANTS;
export const initialState = {
  body: false,
  title: false,
  description: false
};

const highlightReduer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_HIGHLIGHT_BUTTONS:
    return {
      ...state,
      [action.payload.field]: action.payload.value
    };
  case CLOSE_HIGHLIGHT_BUTTONS:
    return{
      ...state,
      [action.payload.field]:action.payload.value
    };
  default:
    return state;
  }
};

export default highlightReduer;
