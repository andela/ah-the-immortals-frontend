import highlightReducer, { initialState } from '../Highlight.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

const { SHOW_HIGHLIGHT_BUTTONS, CLOSE_HIGHLIGHT_BUTTONS } = ACTION_CONSTANTS;

describe('Tests highhlight actions', () => {
  it('Triggers show of highlight buttons', () => {
    const result = highlightReducer(initialState, {
      type: SHOW_HIGHLIGHT_BUTTONS,
      payload: {
        field: 'body',
        value: true
      }
    });
    expect(result).toEqual({
      ...initialState,
      body: true
    });
  });
  it('Triggers close of highlight buttons', () => {
    const result = highlightReducer(undefined, {
      type: CLOSE_HIGHLIGHT_BUTTONS,
      payload: {
        field: 'body',
        value: false
      }
    });
    expect(result).toEqual({
      ...initialState,
      body: false
    });
  });
  it('Triggeres default store',()=>{
    const result = highlightReducer(initialState,{
      type:'UNKNOWN_TYPE'
    });
    expect(result).toEqual(initialState);
  });
});
