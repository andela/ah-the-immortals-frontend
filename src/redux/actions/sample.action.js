import SAMPLE_ACTION from '../constants/actionTypes';

const sampleActionCreator = () => {
  const action = {
    type: SAMPLE_ACTION,
    payload: {
      information: 'Sample Action',
    },
  };
  return action;
};

export default sampleActionCreator;
