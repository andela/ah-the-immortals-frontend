import jwtDecode from 'jwt-decode';

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try{
      jwtDecode(token);
      return true;
    }catch(error){
      return false;
    }
  }
  return false;
};

export default isLoggedIn;
