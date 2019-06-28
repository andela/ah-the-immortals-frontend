import ACTION_CONSTANTS from '../constants/constants';
import {articlesUrl, unbookmarkArticleApi} from '../../services/api';
import {getPages} from './postActions';

const { UNBOOKMARK_SUCCESS } = ACTION_CONSTANTS;

const unbookmarkSuccess = (response) => {
  return {
    type: UNBOOKMARK_SUCCESS,
    response
  };
};

const UnBookmarkAction = (slug) => async (dispatch) => {
  const response = await unbookmarkArticleApi(slug);
  const result = response.data.message;

  if (result) {
    dispatch(unbookmarkSuccess({
      result
    }));
    dispatch(getPages(articlesUrl));
  }
};

export default UnBookmarkAction;
