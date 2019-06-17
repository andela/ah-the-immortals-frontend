import { toast } from 'react-toastify';

export const errorHandler = (res) => {
  let result = undefined;
  try{
    const error = ['password', 'token', 'email'];
    error.forEach((e) => {
      if (res.response.data.errors[e]) result = res.response.data.errors[e][0];
    });
  }catch(e) {
    result = '';
  }
  return result;
};

const toastfunc = (res) => {
  try {
    toast.success(res['data'][0]['message']);
  } catch (error) {
    toast.error(errorHandler(res));
  }
};

export default toastfunc;
