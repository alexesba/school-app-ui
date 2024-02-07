import { useNavigate } from 'react-router-dom';
import useAxiosWrapper from './request';
import { LOGIN_URL, LOGOUT_URL } from '../constants/api';

export const useAuthActions = () => {
  const api = useAxiosWrapper();
  const navigate = useNavigate();

  const login = async payload => {
    try {
      const response = await api.post(LOGIN_URL, payload);
      if (response.status == 200) return navigate('/', { replace: true });
    } catch (error) {
      console.warn(401, error);
      return error;
    }
  };

  const logout = async payload => {
    try {
      const response = await api.delete(LOGOUT_URL, payload);
      if (response.status == 200) return navigate('/login', { replace: true });
    } catch (error) {
      console.warn(error);
      return error;
    }
  };

  return { login, logout};
};

export default useAuthActions;
