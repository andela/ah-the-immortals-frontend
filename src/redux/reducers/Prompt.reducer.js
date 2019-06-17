import ACTION_CONSTANTS from '../constants/constants';

const { PROMPT_ACTION,PROMPT_CLOSE } = ACTION_CONSTANTS;

const initalState = {
  show: false
};
const PromptReducer = (state = initalState, action) => {
  switch (action.type) {
  case PROMPT_ACTION:
    return {
      show: action.payload.show,
      slug:action.payload.slug
    };
  case PROMPT_CLOSE:
    return{
      show:false
    };
  default:
    return state;
  }
};

export default PromptReducer;
