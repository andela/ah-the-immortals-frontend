import jwtDecode from 'jwt-decode';

const tokenDecoded = () => {
  const token = window.localStorage.getItem('token');
  let user = undefined;
  try {
    user = jwtDecode(token).user_data.username;
    return { data: { user: jwtDecode(token).user_data }};
  } catch (error) {
    user = '';
    return user;
  }
};
export default tokenDecoded;
