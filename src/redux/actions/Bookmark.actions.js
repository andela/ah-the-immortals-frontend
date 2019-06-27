import ACTION_CONSTANTS from '../constants/constants';
import {articlesUrl, bookmarkArticleApi} from '../../services/api';
import {getPages} from './postActions';

const { BOOKMARK_SUCCESS, BOOKMARK_FAILURE } = ACTION_CONSTANTS;

const bookmarkSuccess = (response) => {
  return {
    type: BOOKMARK_SUCCESS,
    response
  };
};

const bookmarkFailure = (response) => {
  return {
    type: BOOKMARK_FAILURE,
    response
  };
};

const BookmarkAction = (slug) => async (dispatch) => {
  const response = await bookmarkArticleApi(slug);
  const result = response.data;
  if (result) {
    dispatch(bookmarkSuccess({
      bookmarked:result.article.bookmarked,
    }));
    dispatch(getPages(articlesUrl));
  } else {
    dispatch(bookmarkFailure({ ...result }));
  }
};

export default BookmarkAction;
