import { RATE_ARTICLE, RATE_ERRORS } from '../constants/types';


import { starClick } from '../../services/api';

export const rateSuccess = response => ({
  type: RATE_ARTICLE,
  payload: response
});

const rateFailure = response => ({
  type: RATE_ERRORS,
  payload: response
});
// eslint-disable-next-line import/prefer-default-export
export const starClickAction = (slug, data) => async dispatch => {
  try {
    const response = await starClick(slug, data);
    const ratings = response.data;
    dispatch(rateSuccess({
      article:ratings
    }));
  } catch (error) {
    window.alert(error.response.data.errors.error);
  }
};
