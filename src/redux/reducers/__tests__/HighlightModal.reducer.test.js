import highlightModalReducer, { initialState } from '../HighlightModal.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

const { SHOW_HIGHLIGHT_MODAL, CLOSE_HIGHLIGHT_MODAL } = ACTION_CONSTANTS;

describe('Tests highlight modal reducer', () => {
  it('shows highlight modal', () => {
    const result = highlightModalReducer(initialState, {
      type: SHOW_HIGHLIGHT_MODAL,
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
  it('Closes highlight modal', () => {
    const result = highlightModalReducer(undefined, {
      type: CLOSE_HIGHLIGHT_MODAL,
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
  it('Tests for unknown action type', () => {
    const result = highlightModalReducer(initialState, {
      type: 'UNKNOWN_TYPE'
    });
    expect(result).toEqual({
      ...initialState
    });
  });
});
