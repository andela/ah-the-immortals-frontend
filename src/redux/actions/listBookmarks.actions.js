import { toast } from 'react-toastify';
import ACTION_CONSTANTS from '../constants/constants';
import { listBookmarksApi } from '../../services/api';

const { LIST_BOOKMARKS, LIST_BOOKMARKS_FAILURE } = ACTION_CONSTANTS;

const listSuccess = (data) => ({
  type: LIST_BOOKMARKS,
  payload: data,
});

const listFailure = (error) => ({
  type: LIST_BOOKMARKS_FAILURE,
  payload: error,
});

const listBookmarks = () => async (dispatch) => {
  try {
    const data = await listBookmarksApi();  
    dispatch(listSuccess(data.data.articles));
  } catch (error) {
    error.response ? (dispatch(listFailure(error.response.data.message))):
      toast.error('An error occured while trying to view bookamrks');
  }
};

export default listBookmarks;
