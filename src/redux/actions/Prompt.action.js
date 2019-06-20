import ACTION_CONSTANTS from '../constants/constants';

const { PROMPT_ACTION, PROMPT_CLOSE } = ACTION_CONSTANTS;

const promptAction = (show,slug) => show == true ?
  {
    type: PROMPT_ACTION,
    payload: {
      show,
      slug
    }
  } :
  {
    type: PROMPT_CLOSE,
    payload: {
      show,
      slug
    }
  };

export default promptAction;
