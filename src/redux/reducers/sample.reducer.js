import SAMPLE_ACTION from '../constants/actionTypes';

const sampleReducer = (state = [], action) => {
  if (action.type === SAMPLE_ACTION) {
    return {
      sample: 'Sample action',
    };
  }
  return state;
};

export default sampleReducer;
