import PromptReducer from '../Prompt.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

const { PROMPT_ACTION, PROMPT_CLOSE } = ACTION_CONSTANTS;

const initialState = {
  show: false
};
const prompt = {
  type: PROMPT_ACTION,
  payload: {
    show: true
  }
};
const promptClose = {
  type: PROMPT_CLOSE,
  payload: {
    show: false
  }
};
describe('Tests prompt reducer', () => {
  it('Triggers prompt action', () => {
    const result = PromptReducer(initialState, prompt);
    expect(result).toEqual({
      show: prompt.payload.show
    });
  });
  it('Triggers prompt close action', () => {
    const result = PromptReducer(initialState, promptClose);
    expect(result).toEqual({
      show: promptClose.payload.show
    });
  });
  it('Triggers default operation to be performed', () => {
    const result = PromptReducer(initialState, {
      type: 'UNDEFINED'
    });
    expect(result).toEqual(initialState);
  });
  it('Assigns a default state', () => {
    const result = PromptReducer(undefined, promptClose);
    expect(result).toEqual({
      show: promptClose.payload.show
    });
  });
});
