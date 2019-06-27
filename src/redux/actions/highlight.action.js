import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { getHighlightsApi,
  createHighlightApi,
  removeHighlightApi,
  updateHighlightApi
} = APIS;

const {
  GET_HIGHLIGHTS_SUCCESS,
  GET_HIGHLIGHTS_FAILURE,
  CREATE_HIGHLIGHT_SUCCESS,
  REMOVE_HIGHLIGHT_SUCCESS,
  SHOW_HIGHLIGHT_BUTTONS,
  CLOSE_HIGHLIGHT_BUTTONS,
  SHOW_HIGHLIGHT_MODAL,
  CLOSE_HIGHLIGHT_MODAL,
  UPDATE_HIGHLIGH_SUCCESS,
  UPDATE_HIGHLIGHT_FAILURE
} = ACTION_CONSTANTS;


const gethighlightSuccess = (response) => ({
  type: GET_HIGHLIGHTS_SUCCESS,
  payload: response
});

const gethighlightFailure = (response) => ({
  type: GET_HIGHLIGHTS_FAILURE,
  payload: response
});

const createHighlightSuccess = (response) => ({
  type: CREATE_HIGHLIGHT_SUCCESS,
  payload: response
});

const updateHighlightSuccess = (response) => ({
  type: UPDATE_HIGHLIGH_SUCCESS,
  payload: response
});

const updateHighlightFailure = (response) => ({
  type: UPDATE_HIGHLIGHT_FAILURE,
  payload: response
});

const removhighlightSuccess = (response) => ({
  type: REMOVE_HIGHLIGHT_SUCCESS,
  payload: response
});

const showHighlighButton = (field) => ({
  type: SHOW_HIGHLIGHT_BUTTONS,
  payload: {
    field: field,
    value: true
  }
});

const closeHighlightButton = (field) => ({
  type: CLOSE_HIGHLIGHT_BUTTONS,
  payload: {
    field: field,
    value: false
  }
});

const showHighlightModal = (field) => ({
  type: SHOW_HIGHLIGHT_MODAL,
  payload: {
    field: field,
    value: true
  }
});

const closeHighlightModal = (field) => ({
  type: CLOSE_HIGHLIGHT_MODAL,
  payload: {
    field: field,
    value: false
  }
});

const getHighlightsAction = (slug) => async (dispatch) => {
  try {
    const response = await getHighlightsApi(slug);
    dispatch(gethighlightSuccess(response.data));
  } catch (error) {
    dispatch(gethighlightFailure(error));
  }
};

const createHighlightAction = (slug, data) => async (dispatch) => {
  try {
    const response = await createHighlightApi(slug, data);
    dispatch(createHighlightSuccess(response.data));
  } catch (error) {
    const highlightError = error.response.data.errors.error;
    if (highlightError.length) {
      const response = await getHighlightsApi(slug);
      const highlight = response.data.highlights.filter((item) => (item.field == data.field && item.start_index
        == data.start_index && item.end_index == data.end_index));
      const highlightId = highlight[0].id;
      const removalResponse = await removeHighlightApi(slug, highlightId);
      dispatch(removhighlightSuccess({
        data: removalResponse.data,
        id: highlightId
      }));
    }
  }
};

const updateHighlightAction = (slug, data, id) => async (dispatch) => {
  try {
    const response = await updateHighlightApi(data, slug, id);
    dispatch(updateHighlightSuccess({
      data: response.data,
      id: id
    }));
  } catch (error) {
    dispatch(updateHighlightFailure(error));
  }
};

const highlightsActions = {
  getHighlightsAction,
  createHighlightAction,
  showHighlighButton,
  closeHighlightButton,
  showHighlightModal,
  closeHighlightModal,
  updateHighlightAction
};

export default highlightsActions;
